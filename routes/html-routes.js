// DEPENDENCIES 
var path = require('path');

//ROUTES 
module.exports = function(app){

    //Route for Main Page
    app.get("/index", function(req, res){
        res.render("index");
        
    });
    //Route for Api/Json View
    app.get("/addlane", function(req, res){
        res.render("addlane");
    });
}