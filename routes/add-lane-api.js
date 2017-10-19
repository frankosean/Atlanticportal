var db = require("../models");

module.exports = function(app){
    app.get('/api/truckloads', function(req, res){
        db.truckloads.findAll({
            include: [db.truckloads]
        }).then(function(truckloads){
            res.json(truckloads);
        });
    });

    app.get("/api/truckloads/:id", function(req, res){
        db.truckloads.findOne({
            where: {
                id: req.params.id
            },
            include: [db.truckloads]
        }).then(function(truckloads){
            res.json(truckloads);
        });
    });

    app.post("/api/truckloads", function(req, res){
        db.truckloads.create(req.body).then(function(truckloads){
            res.json(truckloads);
        });
    });

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