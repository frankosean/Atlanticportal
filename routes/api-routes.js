var db = require("../models");

//Routes 
module.exports = function(app){

    app.get("/api/truckloads/", function(req, res){ 
        db.truckloads.findAll({ })
        .then(function(truckloads){
            res.json(truckloads);
        });
    });

    // app.post("/api/truckloads", function(req, res){
    //     console.log(req.body);
    //     db.truckloads.create({
    //         lane: req.body.lane,
    //         pickUpDate: req.body.pickUpDate,
    //         pickUpNumber:req.body.pickUpNumber,
    //         poNumber: req.body.poNumber,
    //         additionalInfo: req.body.additionalInfo
    //         })
    //         .then(function(truckloads){
    //             res.json(truckloads);
    //     });
    // });

    // app.delete("/api/posts/:id", function(req, res){
    //     db.truckloads.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     });
    // });

    // app.put("api/truckloads", function(){
    //     db.truckloads.update(req.body,
    //         {
    //             where: {
    //                 id: req.params.id
    //             }
    //         })
    //         .then(function(truckloads){
    //             res.json(truckloads);
    //     });
    // });
};
