var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");

var app = express();
var port = 2000;



// Parse application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// tried to serve it up using static file path, but just used get request instead (not best practicie?)
app.get('/css/style.css', function(req, res){
  res.sendFile(__dirname + '/public/css/style.css');
});



app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Apple321",
  database: "atlantic_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// ======================================================

app.get("/", function(req, res){
    connection.query("SELECT * FROM truckloads", function(err, data){
        if (err) throw err;
        res.render("index", { truckloads: data });
    });
});

// POST BUTTON
// ======================================================

var k = 0

app.post("/", function(req, res) {
    connection.query("INSERT INTO truckloads (lane, pickupdate, pickupnumber, ponumber, additional_info) VALUES (?, ?, ?, ?, ?)", 
    [req.body.truckloads, req.body.pickupdate, req.body.pickupnumber, req.body.ponumber, req.body.additional_info], function(err, result) {
      if (err) {
        throw err;
      }
      res.redirect("/");
    });
  });

  app.delete("/:id", function(req, res) {
    connection.query("DELETE FROM truckloads WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        throw err;
      }
      res.redirect("/");
    });
  });

  app.put("/", function(req, res) {
      connection.query("UPDATE truckloads SET status = ? WHERE id = ?", [req.body.status, req.body.id], function(err, result) {
        if (err) {
          throw err;
        }
        res.redirect("/");
      });
    });
    
    app.listen(port);
console.log("listening on localhost:"+ port)