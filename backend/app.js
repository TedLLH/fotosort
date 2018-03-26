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

const GoogleStrategy = require('passport-google-oauth20').Strategy;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json({limit: "50mb"}))

//serve images in the public folder
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

//Google Strategy auth
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
    // callbackURL: 'http://localhost:8080/auth/google/callback'
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
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/frontpage');
});
               

app.get('/', (req,res)=>{
    if(req.user){
        res.redirect('/frontpage')
    } else if (!req.user){
        res.sendFile(__dirname + "/index.html")
    }
})

app.get('/photo', authRequired, (req,res, next)=>{
    next();
})

app.get('/album', authRequired, (req,res, next)=>{
    next();
})

app.get('/username',(req,res)=>{
    console.log("this is from username backend route "+req.user.displayName)
    return res.json({
        'user':req.user.displayName,
        'image': req.user.image
    })
})

app.get('/frontpage', (req,res)=>{
    res.sendFile(__dirname+ '/frontpage.html')
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
            res.json({
                'album': albumtosave
            })
        })
    })
})

app.post('/getPhoto', authRequired, (req,res)=>{
    var photosArray = [];

    var dataArray = [];

    var clarifaiUrl = [];

    let albumID = req.body;

    client.get(req.user.id+"_accessT", (err,token)=>{
        albumID.forEach((id)=>{
            const options = {
                maxResults: 10,
                albumId: id
            }
            picasa.getPhotos(token, options, (error,photos)=>{
                if(photos != undefined){
                    photosArray.push(photos.map((b)=>{return b.content.src}))
                    photos.forEach((b)=>{
                        clarifaiUrl.push({url: b.content.src})
                    })
                    if(photosArray.length == albumID.length){
                        console.log('Clarifai time'+ clarifaiUrl[0].url)
                        clarifai.models.predict(Clarifai.GENERAL_MODEL, clarifaiUrl)
                                        .then((response)=>{
                                            var id = 1;
                                            response.outputs.forEach((data)=>{
                                                let obj = {
                                                    'id': id,
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
                                                id ++
                                                if(dataArray.length == clarifaiUrl.length){
                                                    res.json({
                                                        'links': dataArray
                                                    })
                                                }
                                            })
                                        },(err)=>{
                                            console.log('just suck')
                                        })
                    }
                }
            })
        })
    })
})

app.post('/photo/:id', (req,res)=>{
    let id = req.params
    console.log(id);
})


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

app.get('/albumDB', (req,res)=>{
    client.get(req.user.id, (err,data)=>{
        User.findAll().then((users)=>{
            res.json({users}
            )
        })
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

app.get('/logout', (req,res)=>{
    req.logout();
    res.redirect('/')
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

app.use(express.static('frontend/dist/app'));

app.use(function(req, res, next) {
    res.sendFile(__dirname+ "/frontend/dist/app/index.html");
})

     
app.listen(8080);
