var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
var friends=["Shivani", "Mahima", "Shreya", "Subbu", "Kamakshi"];

app.get("/", function(req,res){
    //template created
    res.render("home");
});

app.post("/addFriend", function(req,res){
    //contain all of the data from request body
    var newfriend=req.body.newFriend;
    friends.push(newfriend);
    res.redirect("/friends");
});

app.get("/friends", function(req,res){
    //template created
    
    res.render("friends", {friends: friends});
});



app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Server started!!");
});