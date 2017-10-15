/**
 * Allocate2Controller
 *
 * @description :: Server-side logic for managing allocate2s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		
		var myself = req.param('myself');
		var donate = req.param('donate');
		var username = req.session.username;
		
		var donate_num = parseInt(donate); 
		var keep_num = parseInt(myself);
		
		var value = donate_num + keep_num;
		console.log(value);
		
		//donate = 20;
		if(value === 15){
			Allocate2.create({myself:myself, org: donate, username: username }).exec(function findOneCB(error, allocate){
				if (error) {
				    return res.json(200, {error_message: 'Unable to create an Allocate2 object'});
				  }
				  res.json(200, allocate);
			});
			
		}else{
			res.json(200, {error_message: 'The parameter values do not add to 15'});
		}
	},	
	find: function(req, res){
		
		var username = req.session.username;
		
		Allocate2.query(
			"select a.*, n.ngo from allocate2 a, ngo_choice4 n where n.username=$1 and a.username=$1;"
				,[username]
				, function(err, rawResult){ 
				if (err) {
					  //console.log(err);
					  return res.json(200, {err: err});
				}
				if(rawResult){
					res.json(200, {allocate: rawResult.rows[0]});
				}
		});	
	}
};

