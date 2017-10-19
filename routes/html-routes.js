// DEPENDENCIES 
var path = require('path');

//ROUTES 
module.exports = function(app){

    //Route for Main Page
    app.get("/", function(req, res){
        res.render("index");
        
    });
    //Route for Api/Json View
    app.get("/api/truckloads", function(app){
        res.render("addlane");
    });

    app.post("/", function(req, res){
        db.Post.create(req.body).then(function(truckloads){
            res.json(truckloads);
        });
    });
}