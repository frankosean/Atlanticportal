var db = require("../models");
var methodOverride = require("method-override");
//var heroku_1e1a3ef17e3ba90 = "heroku_1e1a3ef17e3ba90";

module.exports = function(app){

    app.post("/api/heroku_1e1a3ef17e3ba90", function(req, res){
        db.heroku_1e1a3ef17e3ba90.create(req.body).then(function(heroku_1e1a3ef17e3ba90){
            })
            .then(function(heroku_1e1a3ef17e3ba90Json){
                res.redirect("/")
            });
        });

    app.put("/:id", function(req, res){
        db.heroku_1e1a3ef17e3ba90.update({
            where: {
                id: req.params.id
            }
        }).then(function(heroku_1e1a3ef17e3ba90Json){
            res.redirect("/");
        });
    })

    app.post("/:id", function(req, res){
        db.heroku_1e1a3ef17e3ba90.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(heroku_1e1a3ef17e3ba90Json){
            res.redirect("/");
        });
    });
};