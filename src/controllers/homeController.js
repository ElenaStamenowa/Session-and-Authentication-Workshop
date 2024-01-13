const router = require("express").Router();
const cubeService = require("../service/cubeService");

router.get("/", (req, res) => {
  const cubes = cubeService.getAll();
  //console.log(req.query);
  const { search, from, to} = req.query;
  res.render("index", { cubes, search, from, to });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
