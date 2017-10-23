var db = require("../models");
var methodOverride = require("method-override");

// module.exports = function(app){
//     app.post("/api/truckloads/:id", function(req, res){
//         console.log(req.params.id  + " is deleted")
//         db.truckloads.destroy({
//             where: {
//                 id: req.params.id
//             }
//         }).then(function(truckLoadsJson){
//             res.redirect("/");
//         });
//     })
// }