const express= require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('/public'));
app.use("/public",express.static('public'));
app.get("/",function(req,res){
    res.render("home");
});

app.listen(3000, function() {
    console.log("server started on port 3000");
  });