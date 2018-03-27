//---------------Dependencies---------------//
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cheerio = require("cheerio");

//---------------Require all models---------------//
var db = require("./models");
var PORT = 3000;

//---------------Require scripts---------------//
var scraperScript = require("./scripts/scripts");

//---------------Initialize Express---------------//
var app = express();

//---------------Configure middleware---------------//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//---------------Connect to the Mongo DB---------------//
mongoose.connect("mongodb://localhost/mongoScraper");

//---------------Routes---------------//
app.get("/scrape", scraperScript);

//---------------Start the server---------------//
app.listen(PORT, function() {
    console.log("🌎 App running on port " + PORT + "! 🌎");
  });