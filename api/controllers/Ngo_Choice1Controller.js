/**
 * Ngo_Choice1Controller
 *
 * @description :: Server-side logic for managing ngo_choice1s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:  function (req, res){
		
		var ngo = req.param('ngo');
		var ngo2 = req.param('ngo');
		var username = req.session.username;
		var user_id;
		Ngo_Choice1.create({username: username, ngo: ngo }).exec(function (err, record) {
			if(err){
				//console.log(err);
				res.json(200, {message_error: err});
			}
			if(record){
				Ngo_Choice2.create({username: username, ngo: ngo2 }).exec(function (err, record2) {
					if(err){
						//console.log(err);
						res.json(200, {message_error: err});
					}
					if(record2){
						res.json(200, {ngo: record2});
					}					  
				});
			}					  
		});
	},
	find:  function (req, res){
		var username = req.session.username;
		Ngo_Choice1.findOne({username: username }).exec(function (err, choice1) {
			if(err){
				//console.log(err);
				res.json(200, {message_error: err});
			}
			if(choice1){
				Ngo.findOne({id: choice1.ngo }).exec(function (err, record) {
					if(err){
						//console.log(err);
						res.json(200, {message_error: err});
					}
					if(record){
						res.json(200, {ngo: record, choice1: choice1});
					}					  
				});
			}					  
		});
	}
	
};

