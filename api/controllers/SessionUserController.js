/**
 * SessionUserController
 *
 * @description :: Server-side logic for managing sessionusers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
	create:  function (req, res){
		
		var session_id = req.param('session_id');
		var username = req.session.username;
		var user_id;
		Uzer.findOne({username: username }).exec(function (err, record) {
			if(err){
				console.log(err);
			}
			if(record){
				CreateSessionService.createUserSession(session_id, record.id, res);
			}					  
		});
	},
	
	find: function(req, res){
		var username = req.param('username');
		
		Uzer.findOne({username:username}).exec(function (err, record) {
			  
			  if(record){
				  SessionUser.findOne({user_id:record.id}).exec(function (err, record) {
					  if(!record){
						  console.log('a user session was already created for this user'); 
					  }
					  if(record){
						  res.json(200, record);
					  } 
				});
			  }
		});
	},
	findUsersBySession: function(req, res){
		//console.log(req);
		var session_id = req.param('session_id');
		console.log('session_id: ' + session_id);
		SessionUser.query('select * from uzer where id in (select user_id from sessionuser where session_id=$1) order by username', [session_id], function(err, rawResult){ 
			console.log('here: ' + session_id);
	  	      if (err) {
	  	    	  console.log(err);
	  	    	  return res.json(200, {err: err});
	  	      }
	  	     if(rawResult){
	  	    	 //console.log(rawResult);
	  	    	res.json(200, rawResult.rows);
	  	     }
		});
	}
};

