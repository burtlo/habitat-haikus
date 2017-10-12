var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Haiku = mongoose.model('Haiku', new Schema({
  first  : String,
  second : String,
  third  : String
}));

module.exports = Haiku;
