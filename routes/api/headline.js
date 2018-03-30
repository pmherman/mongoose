var router = require("express").Router();
var db = require("../../models");

router.post("/save/:id", function(req, res) {
	db.Headline.findById(req.params.id, function(err, data) {
		if (data.saved) {
			db.Headline.findByIdAndUpdate(req.params.id, {$set: {saved: false, status: "Save This Article"}}, {new: true}, function(err, data) {
				res.redirect("/");
			});
		}
		else {
			db.Headline.findByIdAndUpdate(req.params.id, {$set: {saved: true, status: "Unsave This Article"}}, {new: true}, function(err, data) {
				res.redirect("/saved");
			});
		}
	});
});

router.get("/api", function(req, res) {
    db.Headline.find({}), function(err, data) {
        res.json(data);
        console.log("test");
    }
})

module.exports = router;
