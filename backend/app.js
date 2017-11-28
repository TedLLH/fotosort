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
const model = require('./models');

const User = model.user
require ('dotenv').config();

const port = 8080 || process.env.PORT 

const GoogleStrategy = require('passport-google-oauth20').Strategy;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json({limit: "50mb"}))

app.use(express.static('public'))

function extractProfile (profile) {
  let imageUrl = '';
  if (profile.photos && profile.photos.length) {
    imageUrl = profile.photos[0].value;
  }
  return {
    id: profile.id,
    displayName: profile.displayName,
    image: imageUrl
  };
}

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/auth/google/callback'|| 'http://www.fotosort/auth/google/callback'
    },(accessToken, refreshToken, profile, done) => {
        console.log(profile.id + profile.emails[0].value);
     
        process.nextTick(function () {
        client.set(profile.id, profile.emails[0].value, (err)=>{
            if(err){
                console.log('can;t save email');
            }
        })
        client.set(profile.id+'_accessT', accessToken, (err)=>{
            if(err){console.log('eerrr in saving accessToken from google auth')}
        })
        return done(null, extractProfile(profile));
     })
   })
);

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

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile', 'https://www.googleapis.com/auth/drive.photos.readonly', 'https://picasaweb.google.com/data'] }), (req,res,next)=>{next()});

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/signup' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/login');
});
               

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get('/login', authRequired, (req,res, next)=>{
    console.log(req.user);
    next()
})

app.get('/username',(req,res)=>{
    console.log("this is from username backend route "+req.user.displayName)
    return res.json({
        'user':req.user.displayName,
        'image': req.user.image
    })
})

app.get('/checktoken', (req,res)=>{
    if(req.user){
        console.log(req.user)
        res.json({
            'user': req.user
        })
    }else{
      res.json(null)
    }
})

app.get('/getAlbum', authRequired, (req,res)=>{
    client.get(req.user.id+'_accessT', (err,data)=>{
        if(err){
            console.log('eeeeee')
        }
        const optionsAlbums = {}
        picasa.getAlbums(data, optionsAlbums,  (error, albums) => {
            var albumtosave = albums.filter((a)=>{return a.num_photos>0})
                                    .map((n)=>{ 
                                        var obj = {
                                            'id': n.id,
                                            'title': n.title
                                        }
                                        return obj
                                    })
            // client.setex(req.user.id+'_albums', 60*60, JSON.stringify(albumtosave), (err)=>{
            //     if(err){
            //         console.log('error in saving code');
            //     }
            // })
            res.json({
                'album': albumtosave
            })
        })
    })
})

app.post('/getPhoto',authRequired, (req,res)=>{
    console.log(req.body)

    var photosArray = [];

    var clarifaiUrl = [];

    var noPhotoAlbum = 0;

    var dataArray = []

    let albumsID = req.body;
    client.get(req.user.id+'_accessT', (err, token)=>{
        albumsID.map((albumid)=>{
            const options = {
                maxResults: 10, // by default get all 
                albumId: albumid 
            }
        picasa.getPhotos(token, options, (error, photos) => {
            if(!photos){
                noPhotoAlbum ++;
            }
            if(photos){
                photosArray.push(photos.map((b)=>{return b.content.src}))
                photos.forEach((nnn)=>{
                    clarifaiUrl.push({url: nnn.content.src})
            })
            if(photosArray.length === albumsID.length-1){
                console.log('for clarifai')
                clarifai.models.predict(Clarifai.GENERAL_MODEL, clarifaiUrl)
                .then((response)=> {
                                // console.log(response.outputs[0].input.data.image.url)
                    response.outputs.forEach((data)=>{
                        let obj = {
                            'image': data.input.data.image.url,
                            'tags': data.data.concepts
                                    .filter((scoresAll)=>{
                                        return scoresAll.value > 0.9
                                    })
                                    .map((scoresFiltered)=>{
                                        return scoresFiltered.name
                                    })
                                   }
                                 dataArray.push(obj)
                              })
                                // response.outputs.forEach((each)=>{
                                //     tags.push(each.data.concepts.filter((scoresAll)=>{
                                //     return scoresAll.value > 0.9
                                //     }).map((scoresFiltered)=>{return scoresFiltered.name}))
                                // })
                            },
                            (err)=>{
                                console.log('fafds'+err)
                            })
                            .then(()=>{
                                res.json({
                                    'links': dataArray
                                }
                            )}, 
                            (err)=>{                                
                            });
                    }
                }
            })
        })
    }) 
});

app.post('/createalbum', (req,res)=>{
    console.log(req.body)
    console.log(req.body.albumName)
    client.get(req.user.id, (err,data)=>{

        User.findOrCreate({
            where:{
                email: data,
                albumName: req.body.albumName,
                url: req.body.url.toString()
            }

        }).spread((users, created)=>{
            console.log(users.get({
                plain: true
            }))
            console.log(created)
        }).then(()=>{
            console.log('add success')
            res.redirect('/login')
        }).catch((err)=>{
            console.log(err)
        })
     }) 
})

app.get('/album', (req,res)=>{
    User.findAll().then((users)=>{
        res.json(users)
    })
})

app.delete('/deletealbum/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    client.get(req.user.id,(err,data)=>{
        User.destroy({
            where: {
                "id":id
            }
        })
        .then((users)=>{
            User.findAll().then((users)=>{
                res.json(users)
            })
        })
    })
})

function authRequired (req, res, next) {
  if (!req.user) {
    return res.redirect('/auth/google');
  }
  next();
}


reloadServer = reload(app);
watch.watchTree(__dirname + "/frontend", function (f, curr, prev) {
    // Fire server-side reload event 
    reloadServer.reload();
});

app.use(express.static('frontend/dist'));

app.use(function(req, res, next) {
    res.sendFile(__dirname+ "/frontend/dist/index.html");
})

     
app.listen(port);