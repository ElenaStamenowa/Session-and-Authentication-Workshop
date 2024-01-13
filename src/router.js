const router = require("express").Router();
const homeControllers = require("./controllers/homeController");
const cubeControllers = require("./controllers/cubeControllers");

router.use(homeControllers);
router.use("/cubes", cubeControllers);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
