var db = require("../models");
var express = require("express");
var app = express();

var truckloads = heroku_1e1a3ef17e3ba90

//Routes 
module.exports = function(app){

    app.get("/", function(req, res) {
        db.heroku_1e1a3ef17e3ba90.findAll({}).then(function(data) {
          console.log(data);
          res.render("index", {heroku_1e1a3ef17e3ba90: data});
        });
    });
};
