const router = require("express").Router();
const { register, login } = require("./auth.controller");

router.get("/", (req, res) => {
  res.status(200);
  res.send({ message: "auth route" });
});

router.post("/register", register);
router.post("/login", login);

module.exports = router;
