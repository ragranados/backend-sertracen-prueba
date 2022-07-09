var express = require('express');
var router = express.Router();
var documentoR = require("../routes/documento.router");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/documento", documentoR);

module.exports = router;
