/**
 * Ngo_Choice1Controller
 *
 * @description :: Server-side logic for managing ngo_choice1s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	save: function (req, res){
	
		var username = req.session.username;
		var ngo_choice1 = req.param("ngo");
		//console.log('ngo_choice2: ' + ngo_choice2);
		
		Ngo_Choice1.findOne({username: username }).exec(function (err, record) {
			if(err){
				//console.log(err);
				res.json(200, {message_error: err});
			}
			if(record){
				console.log(" updated: " + JSON.stringify(record));
				console.log('id: ' + record.id);
				Ngo_Choice1.update({id:record.id},{ ngo: ngo_choice1 }).exec(function updateCB(err, updated) {
					if(err){
						console.log(err);
						res.json(200, {message_error: err});
					}
					if(updated){
						//console.log(" updated: " + JSON.stringify(updated));
						res.json(200, {ngo_choice1: updated});
					}					  
				});
			}else{
				Ngo_Choice1.create({username: username, ngo: ngo_choice1 }).exec(function (err, ngo) {
					if(err){
						//console.log(err);
						res.json(200, {message_error: err});
					}
					if(ngo){
						res.json(200, {ngo_choice1: ngo});
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

