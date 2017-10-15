/**
 * NgoController
 *
 * @description :: Server-side logic for managing ngoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find:  function (req, res){
		var username = req.session.username;
		Ngo.find().exec(function (err, ngos) {
			if(err){
				//console.log(err);
				res.json(200, {message_error: err});
			}
			if(ngos){
				res.json(200, {ngos: ngos});
			}					  
		});
	}
	
};

