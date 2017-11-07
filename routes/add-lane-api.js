var db = require("../models");
var methodOverride = require("method-override");

module.exports = function(app){

    // POST from ADDLANE
    app.post("/api/truckloads", function(req, res){
        db.truckloads.create(req.body).then(function(truckloads){
            })
            .then(function(truckLoadsJson){
                res.redirect("/")
            });
        });

    // Update Load Status
    app.post("/update/:id", function(req, res){
        const id = req.params.id;
        const statusInput = req.body.statusInput;
        db.truckloads.find({
            where: {id: id}
        }).then(req.body,{
            
        }).then(function(truckLoadsJson){
            res.redirect("/");
        });
    })

    // Delete Load
    app.post("/:id", function(req, res){
        db.truckloads.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(truckLoadsJson){
            res.redirect("/");
        });
    });

    // Complete Load => Move to Completed Loads
    app.post("/completed/:id", function(req, res){
        db.truckloads.update(req.params,
        {
            where: {
                id: req.params.id,
                
            }
        })
            .then(function(truckLoadsJson){
                res.redirect("/completed")
            });
        });
};