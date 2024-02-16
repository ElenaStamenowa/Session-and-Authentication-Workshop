const router = require("express").Router();
const homeControllers = require("./controllers/homeController");
const cubeControllers = require("./controllers/cubeControllers");
const accessoryController = require("./controllers/accessoryController");
const userController = require("./controllers/userController");
const { isAuth } = require("./middlewares/authMiddleware");

router.use(homeControllers);
router.use("/cubes", cubeControllers);
router.use("/accessories", isAuth, accessoryController);
router.use("/users", userController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;