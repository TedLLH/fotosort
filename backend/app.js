const express = require('express');
const reload = require('reload');
const watch = require('watch');
const app = express();
const bodyParser = require("body-parser"); 
const Picasa = require('picasa');
const redis = require('redis');
require ('dotenv').config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const client = redis.createClient({
    host: 'localhost',
    port: 6379
})

client.on('error', function(err){
    console.log(err);
})

const picasa = new Picasa();

 

app.get('/getphoto',(req,res)=>{
    // client.get('photoslink', (err,data)=>{
    //     if(err){
    //         console.log('errr in geting photo links')
    //     }
    //     res.json({
    //         'links': JSON.parse(data)
    //     })
    // })
    client.get('code', (err,code)=>{
        if(err){
            console.log('Error in getting code');
        }

    var photosArray = [];
    const config = {
        clientId     : process.env.CLIENT_ID,
        redirectURI  : 'http://localhost:8080/oauth2callback',
        clientSecret : process.env.CLIENT_SECRET
    }
    picasa.getAccessToken(config, code, (error, accessToken, refreshToken) => {
        const optionsAlbums = {}
        picasa.getAlbums(accessToken, optionsAlbums,  (error, albums) => {
            albums.map((album)=>{
                var optionsPhotos = {
                    maxResults: 10,
                    albumId: album.id
                }
                picasa.getPhotos(accessToken, optionsPhotos, (error, photos) => {
                    if(photos){
                        res.json({
                            'links': photos.map((n)=>{return n.content.src}) ,
                        })
                    }
                })
            })
            
        })  
    })
    
    })
});

app.get('/oauth2callback', (req,res)=>{
    client.setex('code', 60*60, req.query.code, (err)=>{
        if(err){
            console.log('eRR in saving code');
        }
    })
    // var photosArray = [];
    // const config = {
    //     clientId     : process.env.CLIENT_ID,
    //     redirectURI  : 'http://localhost:8080/oauth2callback',
    //     clientSecret : process.env.CLIENT_SECRET
    // }
    // picasa.getAccessToken(config, req.query.code, (error, accessToken, refreshToken) => {
    //     const optionsAlbums = {}
    //     picasa.getAlbums(accessToken, optionsAlbums,  (error, albums) => {
    //         if(albums.length>0){
    //         albums.map((album)=>{
    //             var optionsPhotos = {
    //                 maxResults: 10,
    //                 albumId: album.id
    //             }
    //             picasa.getPhotos(accessToken, optionsPhotos, (error, photos) => {
    //                 if(photos){
    //                     photos.forEach((photo)=>{
    //                         photosArray.push(photo.content.src);
    //                         // console.log(photosArray)
    //                         client.setex('photoslink', 60*60, JSON.stringify(photosArray), (err)=>{
    //                             if(err){
    //                                 console.log('Error in saving the photolinks')
    //                             }
    //                         })
    //                     })
    //                 }
    //             })
    //         })
    //         }
    //     })  
    // })
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