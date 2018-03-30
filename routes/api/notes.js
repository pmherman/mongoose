var router = require("express").Router();
var db = require("../../models");

router.post("/notes/:id", function(req, res) {
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

router.get("/note/:id", function(req, res) {
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