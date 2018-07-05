//package included
var express = require("express");
var app = express();

app.get("*", function(req,res){
    
    res.send("You are a star");     
});

app.get("/", function(req,res){
    //req n res are objects inside the functions
    //req has the info about the request made
    //res has the info of what we are going to respond with
    res.send("Hi there!!");
});
app.get("/bye", function(req,res){
    res.send("Goodbye!!");
});

app.get("/dog", function(req,res){
    console.log("Someone made request to /dog");
    res.send("Meow");     
});

app.get("*", function(req,res){
    
    res.send("You are a star");     
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
});
//the port number will come from cloud 9