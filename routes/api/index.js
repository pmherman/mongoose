var router = require("express").Router();
var notesRoutes = require("./notes");
var headlineRoutes = require("./headline");

router.use("/notes", notesRoutes);
router.use("/headline", headlineRoutes);

module.exports = router;

