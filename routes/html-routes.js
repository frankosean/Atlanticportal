// DEPENDENCIES 
var path = require('path');

//ROUTES 
module.exports = function(app){

    //Route for Main Page
    // app.get("/", function(req, res){
    //     res.render("index");
    // });

    //Route back to Main Page
    app.get("/index", function(req,res){
        res.render("index");
    });

    //Route for Add Lane
    app.get("/addlane", function(req, res){
        res.render("addlane");
    });

    //Route for Api
    app.get("/api/truckloads", function(req, res){
        res.render("index");
    }) 

}