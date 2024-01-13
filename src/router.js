const router = require("express").Router();
const homeControllers = require("./controllers/homeController");
const cubeControllers = require("./controllers/cubeControllers");
const accessoryController = require("./controllers/accessoryController");

router.use(homeControllers);
router.use("/cubes", cubeControllers);
router.use("/accessories", accessoryController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
