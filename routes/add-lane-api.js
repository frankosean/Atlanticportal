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

    // app.post("/api/truckloads", function(req, res){
    //     db.truckloads.create(req.body).then(function(truckloads){
    //         console.log(req.body);
    //         db.truckloads.create({
    //             lane: req.body.lane,
    //             pickUpDate: req.body.pickUpDate,
    //             pickUpNumber:req.body.pickUpNumber,
    //             poNumber: req.body.poNumber,
    //             additionalInfo: req.body.additionalInfo
    //         })
    //         .then(function(req, res){
    //             res.json(truckloads);
    //         });
    //     });
    // });

    app.delete("/api/truckloads/:id", function(req, res){
        db.truckloads.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(truckloads){
            res.json(truckloads);
        });
    });
};