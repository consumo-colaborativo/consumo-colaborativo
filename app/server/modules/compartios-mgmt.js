var mongoose 		= require('mongoose');
var compartioSchema = require('./app/server/model/compartio.js');
var dbSettings 		= require('./db-settings');

mongoose.connect(dbSettings.uri);

var compartios = mongoose.model('compartio', compartioSchema);

/*
	@Descripción: Esta función nos da los compartios que hay con status ofrecido en una ciudad dada
	@Devuelve: un objeto con los compartios si hay compartios en la ciudad y un null si no los hay

	Le pasamos un callback al que después podremos llamar desde ul controlador o el router

	NO ESTA PROBADA

*/
exports.findCompartiosByCity = function (city, callback)
{
	compartios.find({ location : {city : city} }, function(e, o){
		if (e) console.log('An error has ocurred in findCompartiosByCity');
		else if (o){
					callback(o);
		}	else{
					callback(null);
		}
	});
}