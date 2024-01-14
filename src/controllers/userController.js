const router = require("express").Router();
const userService = require("../service/userService");

router.get("/register", (req, res) => {
  res.render("user/register");
});

router.post("/register", async (req, res) => {
  // console.log({ inputData: req.body });
  const { username, password, repeatPassword } = req.body;

  await userService.register({ username, password, repeatPassword });

  res.redirect("/users/login");
});

router.get("/login", (req, res) => {
  res.render("user/login");
});

router.post("/login", async (req, res) => {
  //find the user
  const { username, password } = req.body;
  //console.log(username, " ", password);

  const user = await userService.login(username, password);
  //compare passwords

  res.redirect("/");
});

module.exports = router;
