// DEPENDENCIES 
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS 
var app = express();
var PORT = process.env.PORT || 2020;

// Requiring our models for syncing
var db = require("./models");

// Parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// HANDLEBARS 
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes")(app);
require("./routes/add-lane-api.js")(app);

//CSS 
app.get("/css/style.css", function(req, res){
    res.sendFile(__dirname + "/public/css/style.css");
})


//  SEQUELIZE SYNC 
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});