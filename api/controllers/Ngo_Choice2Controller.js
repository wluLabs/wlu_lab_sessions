/**
 * Ngo_Choice2Controller
 *
 * @description :: Server-side logic for managing ngo_choice2s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
	findNgo_choice1: function(req, res){
		
		var username = req.session.username;
		
		Ngo_Choice1.findOne({username: username }).exec(function (err, record) {
			if(err){
				//console.log(err);
				res.json(200, {message_error: err});
			}
			if(record){
				res.json(200, {ngo_choice1: record});
			}					  
		});
	},
	
	getNgo_choice1_alt: function(req, res){
		ngo = req.param('ngo_choice1');
		//console.log('ngo: ' + ngo);
		ngo_choice2 = null;
		if(ngo === 1){
			ngo_choice2 = "aac";
		}else{
			ngo_choice2 = "ccac";
		}
		res.view("session2/switch_ngo/" + ngo_choice2);
	},
	
	save: function (req, res){
		
		var username = req.session.username;
		var ngo_choice2 = req.param("ngo_choice2");
		//console.log('ngo_choice2: ' + ngo_choice2);
		
		Ngo_Choice2.create({username: username, ngo: ngo_choice2 }).exec(function (err, ngo) {
			if(err){
				//console.log(err);
				res.json(200, {message_error: err});
			}
			if(ngo){
				res.json(200, {ngo_choice2: ngo});
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

