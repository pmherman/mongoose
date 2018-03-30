var router = require("router").Router();
var fetchRoutes = require("./fetch");
var notesRoutes = require("./notes");
var headlineRoutes = require("./headline");

router.use("/fetch", fetchRoutes);
router.use("/notes", notesRoute);
router.use("/headline", headlineRoutes);

module.exports = router;

