// DEPENDENCIES 
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

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
app.use(express.static('files'));


// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes")(app);
require("./routes/add-lane-api.js")(app);

//CSS 
app.get("/css/style.css", function(req, res){
    res.sendFile(__dirname + "/public/css/style.css");
});
app.get("/img/Atlantic-logo.png", function(req, res){
  res.sendFile(__dirname + "/public/img/atlantic_pkg.jpg");
});
app.get("/img/Atlantic-logo.png", function(req, res){
  res.sendFile(__dirname + "/public/img/Atlantic-logo.jpg");
});


//  SEQUELIZE SYNC 
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
