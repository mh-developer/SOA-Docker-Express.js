var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/home");
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "Docker Express" });
});

router.post("/hello", function (req, res, next) {
  res.json({
    title: "Odziv post requesta",
    statusCode: 200,
  });
});

module.exports = router;
