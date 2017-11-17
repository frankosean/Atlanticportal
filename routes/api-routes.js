var db = require("../models");
var express = require("express");
var app = express();


//Routes 
module.exports = function(app){

    app.get("/", function(req, res) {
        db.truckloads.findAll({
            where:{
                isComplete: 0
            }
        }).then(function(data) {
          console.log(data);
          res.render("index", {truckloads: data});
        });
    });

    app.get("/delivered", function(req, res){
        db.truckloads.findAll({
            where:{
                isComplete: 1,
            }
        }).then(function(data){
            console.log(data);
            res.render("delivered", {truckloads: data});
        });
    });
};

