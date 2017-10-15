/**
 * UserClickController
 *
 * @description :: Server-side logic for managing userclicks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
	find: function(req, res){
		var username = req.query.username;
		var page = req.query.page;
		
		UserClick.findOne({username: username, page: page}).exec(function (err, userclick){
			//console.log('userclick: ' + userclick.toJSON);
			if (userclick) {
				//console.log('userclick: ' + userclick);
				var clicks = Number.parseInt(userclick.clicks) + 1;
				UserClick.update({username: username, page: page}, {clicks: clicks}).exec(function (err, userclick) {
			  	      if (err) {
			  	        return res.json(200, {error_message: ' update Invalid parameter: ' + err});
			  	      }
			  	      if (userclick) {
			  	        res.json(200, userclick);
			  	      }
			  	 });
			
				    
			}else{
				
				UserClick.create({username: username, page: page, clicks: '1'}).exec(function (err, userclick) {
			  	      if (err) {
			  	        return res.json(200, {error_message: ' create Invalid parameter: ' + err});
			  	      }
			  	      if (userclick) {
			  	        res.json(200, userclick);
			  	      }
			  	 });
				
			}
		});
	}
	
};

