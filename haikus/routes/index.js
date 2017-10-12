var express = require('express');
var router = express.Router();
var syllable = require('syllable');

var Haiku = require('./../models/haikus');


router.get('/', function(req, res, next) {
  console.log("Loading Index Page");
  res.render('index', {});
});

router.post('/syllables/count', function(req, res, next) {
  var result = { count: syllable(req.body.words) };
  console.log("Calculated word count for " + req.body.words + " is " + result.count);
  res.send(JSON.stringify(result));
});


module.exports = router;
