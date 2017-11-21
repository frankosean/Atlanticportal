// DEPENDENCIES 
var path = require('path');

//ROUTES 
module.exports = function(app){

    //Route back to Main Page
    app.get("/index", function(req,res){
        res.render("index");
    });

    //Route for Add Lane
    app.get("/addlane", function(req, res){
        res.render("addlane");
    });

    // Route Team Page
    app.get("/team", function(req, res){
        res.render("team");
    });

    // Route Complted Loads
    app.get("/completed", function(req, res){
        res.render("completed");
    });
};