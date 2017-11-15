const express = require('express');
const reload = require('reload');
const watch = require('watch');
const app = express();
const bodyParser = require("body-parser");  

app.post('/user/login',(req,res)=>{
    console.log(req );
    // res.json({"key":"Hello World!"});
});

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