var mongoose = require('mongoose');
var compartioSchema = require('./app/server/model/compartio.js');

mongoose.connect('mongodb://app:LdcnjlSplmaedl930yysApp@compartio.grayhats.es:27017/compartio');

var Compartio = mongoose.model('compartio', compartioSchema);

var compartio = new Compartio({ giver: '53ea6025615a5ce1300dd593', status: 'ofrecido', location:{city: '53c1233a6f3dc51c19b15f4f'} });

compartio.save(function (err) {
  if (err) console.log('caca');
  console.log('insertado');
});
