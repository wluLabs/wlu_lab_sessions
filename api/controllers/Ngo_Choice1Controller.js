/**
 * Ngo_Choice1Controller
 *
 * @description :: Server-side logic for managing ngo_choice1s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:  function (req, res){
		
		var ngo = req.param('ngo');
		var username = req.session.username;
		var user_id;
		Ngo_Choice1.create({username: username, ngo: ngo }).exec(function (err, record) {
			if(err){
				//console.log(err);
				res.json(200, {message_error: err});
			}
			if(record){
				res.json(200, {ngo: record});
			}					  
		});
	},
	find:  function (req, res){
		var username = req.session.username;
		var user_id;
		Ngo_Choice1.findOne({username: username }).exec(function (err, record) {
			if(err){
				//console.log(err);
				res.json(200, {message_error: err});
			}
			if(record){
				Ngo.findOne({id: record.ngo }).exec(function (err, record) {
					if(err){
						//console.log(err);
						res.json(200, {message_error: err});
					}
					if(record){
						res.json(200, {ngo: record});
					}					  
				});
			}					  
		});
	}
	
};

