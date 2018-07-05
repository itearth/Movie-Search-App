var express = require("express");
var app = express();

//in order to use public directory
app.use(express.static("public"));
//to view ejs file directly
app.set("view engine", "ejs");

//route
app.get("/", function(req,res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req,res){
    
    var thing = req.params.thing;
    //including html file
    res.render("love",{thingVar:thing});
});

app.get("/posts", function(req,res){
    var posts=[
        {title: "Post 1",author: "Susy"},
        {title: "World",author: "Mahi"},
        {title: "IIPS",author: "Shivu"}
        ];
        res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Server started");
});