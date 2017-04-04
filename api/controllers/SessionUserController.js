/**
 * SessionUserController
 *
 * @description :: Server-side logic for managing sessionusers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
		create:  function (req, res){
			
			var session_id = req.param('session_id');
			var email = req.session.email;
			console.log('email ' + email);
			var user_id;
			console.log('here');
			User.findOne({email: email }).exec(function (err, record) {
				if(err){
					console.log(err);
				}
				if(record){
					console.log(record.id);
					CreateSessionService.createUserSession(session_id, record.id, res);
				}					  
			});
		},
		
		find: function(req, res){
			
			var email = req.param('email');
			
			User.findOne({email:email}).exec(function (err, record) {
				  if(record){
					  console.log(record); 
				  }
				  if(record){
					  SessionUser.findOne({user_id:record.id}).exec(function (err, record) {
						  if(record){
							  //console.log('a user session was already created for this user'); 
						  }
						  if(record){
							  res.json(200, record);
						  }
							  
					});
				  }
					  
			});
			
			
			
		}
		
		
	
};

