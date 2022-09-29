var express = require('express');
var router = express.Router();

/* GET contactus listing. */
router.get('/', function(req, res, next) {
  res.render('contactus');
});
module.exports = router;
