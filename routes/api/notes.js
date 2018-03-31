var router = require("express").Router();
var db = require("../../models");

router.post("/note/:id", function(req, res) {
    db.Note.create(req.body)
      .then(function(dbNote) {
        return db.Headline.findOneAndUpdate(req.params.id, { note: dbNote._id }, { new: true });
      })
      .then(function(dbHeadline) {
        res.json(dbHeadline);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

router.get("/save/:id", function(req, res) {
  console.log("id: " + req.params.id);
  db.Headline.findOne({ _id: req.params.id })
    .populate("note")
    .then(function(dbHeadline) {
      res.json(dbHeadline);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;