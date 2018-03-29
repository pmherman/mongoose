var router = require("express").Router();
var db = require("./models");

router.findOne = function(req, res) {
    db.Note.findOne({ _id: req.params.id })
    .populate("note")
    .then(function(dbNote) {
        res.json(dbNote);
    })
    .catch(function(err) {
        res.json(err);
    });
};

router.create = function(req, res) {
    db.Note.create(req.body)
    .then(function(dbNote) {
      return db.Headline.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    })
    .then(function(dbHeadline) {
      res.json(dbHeadline);
    })
    .catch(function(err) {
      res.json(err);
    });
};

router.delete = function(req, res) {
    db.Note.delete({ _id: req.params.id })
    .then(function(dbNote) {
        res.json(dbNote);
    })
    .catch(function(err) {
        res.json(err);
    });
}

module.exports = router;