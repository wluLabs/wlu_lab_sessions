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
		console.log('ngo: ' + ngo);
		ngo_choice2 = null;
		if(ngo === '1'){
			ngo_choice2 = "aac";
		}else{
			ngo_choice2 = "ccac";
		}
		//console.log('ngo_choice2: ' + ngo_choice2);
		res.view("session2/switch_ngo/" + ngo_choice2);
	},
	
	getNgo_choice1: function(req, res){
		ngo = req.param('ngo_choice1');
		console.log('ngo: ' + ngo);
		ngo_choice2 = null;
		if(ngo === '1'){
			ngo_choice2 = "ccac";
		}else{
			ngo_choice2 = "aac";
		}
		//console.log('ngo_choice2: ' + ngo_choice2);
		res.view("session2/switch_ngo/" + ngo_choice2);
	},
	
	save: function (req, res){
		
		var username = req.session.username;
		var ngo_choice2 = req.param("ngo_choice2");
		//console.log('ngo_choice2: ' + ngo_choice2);
		
		Ngo_Choice2.findOne({username: username }).exec(function (err, record) {
			if(err){
				//console.log(err);
				res.json(200, {message_error: err});
			}
			if(record){
				console.log(" updated: " + JSON.stringify(record));
				console.log('id: ' + record.id);
				Ngo_Choice2.update({id:record.id},{ ngo: ngo_choice2 }).exec(function updateCB(err, updated) {
					if(err){
						console.log(err);
						res.json(200, {message_error: err});
					}
					if(updated){
						//console.log(" updated: " + JSON.stringify(updated));
						res.json(200, {ngo_choice2: updated});
					}					  
				});
			}else{
				Ngo_Choice2.create({username: username, ngo: ngo_choice2 }).exec(function (err, ngo) {
					if(err){
						//console.log(err);
						res.json(200, {message_error: err});
					}
					if(ngo){
						res.json(200, {ngo_choice2: ngo});
					}					  
				});
			}
				
		});	
		
		
	},
	find:  function (req, res){
		var username = req.session.username;
		Ngo_Choice2.findOne({username: username }).exec(function (err, choice2) {
			if(err){
				//console.log(err);
				res.json(200, {message_error: err});
			}
			if(choice2){
				Ngo.findOne({id: choice2.ngo }).exec(function (err, record) {
					if(err){
						//console.log(err);
						res.json(200, {message_error: err});
					}
					if(record){
						res.json(200, {ngo: record, choice2: choice2});
					}					  
				});
			}					  
		});
	}
};

