/**
 * AllocateController
 *
 * @description :: Server-side logic for managing allocates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
		create: function(req, res){
			
			var myself = req.param('myself');
			var donate = req.param('donate');
			var username = req.session.username;
			
			var donate_num = parseInt(donate); 
			var keep_num = parseInt(myself);
			
			//var keepIsNum = $.isNumeric(keep_num);
			//var donateIsNum = $.isNumeric(donate_num);
			
			var value = donate_num + keep_num;
			console.log(value);
			
			//donate = 20;
			if(value === 15){
				Allocate.create({myself:myself, org: donate, username: username }).exec(function findOneCB(error, allocate){
					if (error) {
					    return res.json(200, {error_message: 'Unable to create an Allocate object'});
					  }
					  res.json(200, allocate);
				});
				
			}else{
				res.json(200, {error_message: 'The parameter values do not add to 15'});
			}
		},
		demo: function(req, res){
			return res.view('demo/info');
		}
	
};

