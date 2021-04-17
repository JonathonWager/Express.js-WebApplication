//Jonathon Wager 100698641
  //Aaron Leblanc 100700122
  //4/16/2021
  //index.js
//
let express = require('express');
let router = express.Router();

//getting the controller index
let controllers = require("../controllers/index");

//call displayHome control
router.get('/', function(req, res, next) {
  controllers.displayHome(res);
});
//call displayHome control
router.get("/home", function (req, res, next) {
  controllers.displayHome(res);
});
//call displayHome control
router.get("/home", function (req, res, next) {
  controllers.displayHome(res);
});
//call displayAbout control
router.get("/about", function (req, res, next) {
  controllers.displayAbout(res);
});
//call displayProjects control
router.get("/projects", function (req, res, next) {
  controllers.displayProjects(res);
});
//call displayServices control
router.get("/services", function (req, res, next) {
  controllers.displayServices(res);
});
//call displayContact control
router.get("/contact", function (req, res, next) {
  controllers.displayContact(res);
});
//call displayLogin control
router.get("/login", function (req, res, next) {
  controllers.displayLogin(res);
});
//call displayRegister control
router.get("/register", function (req, res, next) {
  controllers.displayRegister(res);
});
//call displayBusCon control
router.get("/busCon", function (req, res, next) {
  controllers.displayBusCon(res);
});

module.exports = router;
