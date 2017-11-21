const express = require('express');
const reload = require('reload');
const watch = require('watch');
const app = express();
const bodyParser = require("body-parser"); 
const Picasa = require('picasa');
const redis = require('redis');
const Clarifai = require('clarifai');
const passport = require('passport');
const session = require('express-session');
require ('dotenv').config();

const GoogleStrategy = require('passport-google-oauth20').Strategy;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// let json = app.use(bodyParser.json({limit: "50mb"}))

// function extractProfile (profile) {
//   let imageUrl = '';
//   if (profile.photos && profile.photos.length) {
//     imageUrl = profile.photos[0].value;
//   }
//   return {
//     id: profile.id,
//     displayName: profile.displayName,
//     image: imageUrl
//   };
// }

// passport.use(new GoogleStrategy({
//   clientID: config.get(process.env.CLIENT_ID),
//   clientSecret: config.get(process.env.CLIENT_SECRET),
//   callbackURL: config.get('http://localhost:8080/oauth2callback'),
//   accessType: 'offline'
// }, (accessToken, refreshToken, profile, cb) => {
//     cb(null, extractProfile(profile));
// }));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.use(session({
    secret: 'cookie_secret',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

const client = redis.createClient({
    host: 'localhost',
    port: 6379
})

client.on('error', function(err){
    console.log(err);
})

const picasa = new Picasa();

const clarifai = new Clarifai.App({
    apiKey: process.env.CLARIFAI
});


app.get('/getphoto',(req,res)=>{
    var photosArray = [];

    var clarifaiUrl = [];

    client.get('albums', (err, albums)=>{
        if(err){
            console.log('Error in getting code');
        }
        var albumsID = JSON.parse(albums);
        var token = localStorage.getItem('accessToken')
        // client.get('accessToken', (err, accessToken)=>{
            albumsID.map((albumid)=>{
                const options = {
                    maxResults : 10, // by default get all 
                    albumId: albumid 
                }
                picasa.getPhotos(token, options, (error, photos) => {
                    if(photos){
                        photosArray.push(photos.map((b)=>{return b.content.src}))

                        photos.forEach((nnn)=>{
                            clarifaiUrl.push({url: nnn.content.src})
                        })

                        if(photosArray.length === albumsID.length-1){
                            console.log('for clarifai'+ clarifaiUrl[0].url)
                            clarifai.inputs.create(clarifaiUrl).then(
                                function(response) {
                                    console.log(response)
                                },
                                function(err) {
                                    console.log('err in clarifaing photos');
                                }
                            );
                            res.json({
                                'links': photosArray
                            })
                        }
                    }
                })
            })
        // })
    })
    
});

app.get('/oauth2callback', (req,res)=>{
    const config = {
        clientId     : process.env.CLIENT_ID,
        redirectURI  : 'http://localhost:8080/oauth2callback',
        clientSecret : process.env.CLIENT_SECRET
    }
    console.log(req.body)
    picasa.getAccessToken(config, req.query.code, (error, accessToken, refreshToken) => {
        client.setex('accessToken', 60*60, accessToken, (err)=>{
            if(err){
                console.log('eRro')
            }
        })
        const optionsAlbums = {}
        picasa.getAlbums(accessToken, optionsAlbums,  (error, albums) => {
            var albumtosave = albums.map((n)=>{return n.id})
            client.setex('albums', 60*60, JSON.stringify(albumtosave), (err)=>{
                if(err){
                    console.log('eRR in saving code');
                }
            })
        })
    })
    res.redirect('/login')
})


reloadServer = reload(app);
watch.watchTree(__dirname + "/frontend", function (f, curr, prev) {
    // Fire server-side reload event 
    reloadServer.reload();
});

app.use(express.static('frontend'));

app.use(function(req, res, next) {
    res.sendFile(__dirname + "/frontend/index.html");
})


app.listen(8080);