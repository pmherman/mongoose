var router = require("express").Router();
var db = require("../../models");

router.get("/", function(req, res) {
    db.Headline.find({"saved": false}, function(error, data) {
      var hbsObject = {
        headline: data
      };
      console.log(hbsObject);
      res.render("home", hbsObject);
    });
  });
  router.get("/saved", function(req, res) {
    db.Headline.find({"saved": true}, function(error, data) {
      var hbsObject = {
        headline: data
      };
      console.log(hbsObject);
      res.render("saved", hbsObject);
    });
  });

module.exports = router;

