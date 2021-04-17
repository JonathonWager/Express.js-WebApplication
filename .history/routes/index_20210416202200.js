//Jonathon Wager 100698641
  //Aaron Leblanc 100700122
  //4/16/2021
  //index.js
//
let express = require('express');
let router = express.Router();

//getting the controller index
let controllers = require("../controllers/index");

router.get('/', function(req, res, next) {
  controllers.displayHome(res);
});

router.get("/home", function (req, res, next) {
  controllers.displayHome(res);
});
router.get("/home", function (req, res, next) {
  controllers.displayHome(res);
});

router.get("/about", function (req, res, next) {
  controllers.displayAbout(res);
});

router.get("/projects", function (req, res, next) {
  controllers.displayProjects(res);
});

router.get("/services", function (req, res, next) {
  controllers.displayServices(res);
});


router.get("/contact", function (req, res, next) {
  controllers.displayContact(res);
});

router.get("/login", function (req, res, next) {
  controllers.displayLogin(res);
});

router.get("/register", function (req, res, next) {
  controllers.displayRegister(res);
});

router.get("/busCon", function (req, res, next) {
  controllers.displayBusCon(res);
});

module.exports = router;
