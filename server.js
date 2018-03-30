//---------------Dependencies---------------//
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var methodOverride = require('method-override'); 

//---------------Require all models---------------//
var db = require("./models");
var PORT = 3000;

//---------------Require scripts---------------//
var scraperScript = require("./scripts/scrape");

//---------------View Route---------------//
var view = require("./routes/view");

//---------------API Route---------------//
var headlineAPI = require("./routes/api/headline");

//---------------Initialize Express---------------//
var app = express();

//---------------Configure middleware---------------//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

//---------------Require Handlebars---------------//
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main", partialsDir: path.join(__dirname, "/views/layouts/partials") }));
app.set("view engine", "handlebars");

//---------------Connect to the Mongo DB---------------//
mongoose.connect("mongodb://localhost/mongoScraper");

//---------------Main Routes---------------//
app.get("/scrape", scraperScript);
app.use("/", view)

//---------------Headline Routes---------------//
app.use("/", headlineAPI);

//---------------Start the server---------------//
app.listen(PORT, function() {
    console.log("🌎  App running on port " + PORT + "! 🌎");
    console.log("Local Host: http://localhost:3000");
  });