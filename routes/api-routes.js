var db = require("../models/addTruckload.js");
var express = require("express");
var app = express();

//Routes 
module.exports = function(app){

    app.get("/", function(req, res) {
        console.log("something");
        db.truckloads.all(function(data) {
          var loads = {
            truckloads: data
          };
          console.log(truckloads);
          res.render("index", loads);
        });
      });

    app.get("/api/truckloads", function(req, res) {
        db.truckloads.all({})
        .then(function(truckloads) {
          res.render('index',loads);
        });
      });

    // app.post("/api/truckloads", function(req, res){
    //     console.log(req.body);
    //     db.truckloads.create({
    //         lane: req.body.lane,
    //         pickUpDate: req.body.pickUpDate,
    //         pickUpNumber: req.body.pickUpNumber,
    //         poNumber: req.body.poNumber,
    //         additionalInfo: req.body.additionalInfo
    //         })
    //         .then(function(truckloads){
    //             res.json(truckloads);
    //     });
    // });

    app.delete("/api/posts/:id", function(req, res){
        db.truckloads.destroy({
            where: {
                id: req.params.id
            }
        });
    });

    app.put("api/truckloads", function(req, res){
        db.truckloads.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
            .then(function(truckloads){
                res.json(truckloads);
        });
    });
};
