var db = require("../models");
var methodOverride = require("method-override");

module.exports = function(app){

    app.post("/api/truckloads", function(req, res){
        db.truckloads.create(req.body).then(function(truckloads){
            })
            .then(function(truckLoadsJson){
                res.redirect("/")
            });
        });

    app.put("/:id", function(req, res){
        db.truckloads.update({
            where: {
                id: req.params.id
            }
        }).then(function(truckLoadsJson){
            res.redirect("/");
        });
    })

    app.post("/:id", function(req, res){
        db.truckloads.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(truckLoadsJson){
            res.redirect("/");
        });
    });
};