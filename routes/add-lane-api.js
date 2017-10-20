var db = require("../models");

module.exports = function(app){

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