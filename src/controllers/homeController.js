const router = require("express").Router();
const cubeService = require("../service/cubeService");

router.get("/", async (req, res) => {
  const { search, from, to} = req.query;
  const cubes = await cubeService.getAll(search, from, to);
  //console.log(req.query);
  
  res.render("index", { cubes, search, from, to });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
