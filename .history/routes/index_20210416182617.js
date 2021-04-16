let express = require('express');
let router = express.Router();

let controllers = require("../controllers/index");
/* GET home page. */
router.get('/', function(req, res, next) {
  controllers.displayHome(res);
});

router.get("/home", function (req, res, next) {
  controllers.displayHome(res);
});
router.get("/home", function (req, res, next) {
  controllers.displayHome(res);
});

/* GET About page. */
router.get("/about", function (req, res, next) {
  controllers.displayAbout(res);
});

/* GET Projects page. */
router.get("/projects", function (req, res, next) {
  controllers.displayProjects(res);
});

/* GET Services page. */
router.get("/services", function (req, res, next) {
  controllers.displayServices(res);
});

/* GET Contact page. */
router.get("/contact", function (req, res, next) {
  controllers.displayContact(res);
});

router.get("/login", function (req, res, next) {
  controllers.displayContact(res);
});

module.exports = router;
