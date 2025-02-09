const express = require('express')
const app = express();

app.use(function(req, res, next){
    console.log("middleware working")
    next();
});

app.set("view engine", "ejs");
app.use(express.static('./public'));

app.get('/', function (req, res,){
    res.render("index");
})

app.get('/Game', function (req, res,){
    res.render("Game");
})

app.listen(3000);