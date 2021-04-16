let express = require('express');
let router = express.Router();

let controllers = require("../controllers/index");
/* GET home page. */
router.get('/', function(req, res, next) {
  controllers.displayHome(res);
});

module.exports = router;
