var express = require('express');
var router = express.Router();
var Haiku = require('./../models/haikus');

/* GET haikus listing. */
router.get('/', function(req, res, next) {
  console.log("Finding random haiku");

  Haiku.count({}, function (err, count) {
    if (err) {
      console.log("An error getting the count before trying to find a haiku");
      console.log("err");
      return res.send({ success: false });
    }

    console.log("There are " + count + " haikus to choose from.");
    if (count == 0) {
      res.send({ first: ' ', second: ' ', third: ' '});
    } else {
      var random = Math.floor(Math.random() * count);

      Haiku.findOne().skip(random).exec(function(err, results) {
        // Probably not a great idea to return the entire result object
        res.send(JSON.stringify(results));
      });
    }

  });
});

router.post('/', function(req, res, next) {

  var data = { first: req.body.first, second: req.body.second, third: req.body.third };

  var newInstance = new Haiku(data);

  newInstance.save(function(err, other) {
    if (err) {
      console.log('Failed to Save!');
      return;
    }
    console.log('Saved!');
  });


  res.send({ success: true });
});

module.exports = router;
