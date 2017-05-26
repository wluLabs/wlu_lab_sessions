/**
 * SessionUserController
 *
 * @description :: Server-side logic for managing sessionusers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
	create:  function (req, res){
		
		var session_id = req.param('session_id');
		var username = req.param('username');
		//console.log('username: ' + username);
		//console.log('req.session.username: ' + req.session.username);
		if(typeof username === 'undefined'){
			username = req.session.username;
			//console.log('req.session.username: ' + req.session.username);
		}
		//console.log(' after if username: ' + username);
		var user_id;
		if(username){
			//console.log('attempting to create a usersession!! ' );
			Uzer.findOne({username: username }).exec(function (err, record) {
				if(err){
					console.log(err);
				}
				if(record){
					CreateSessionService.createUserSession(session_id, record.id, res);
				}					  
			});
		}
		
	},
	
	find: function(req, res){
		var username = req.param('username');
		//console.log('username: ' + username);
		if(req.session.username){
			username = req.session.username;
			//console.log('req.session.username: ' + req.session.username);
		}
		
		
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
		//console.log('session_id: ' + session_id);
		SessionUser.query(
				'select u.*, n.ngo as ngo1, n2.ngo as ngo2 from uzer u, sessionuser su, ngo_choice1 n, ngo_choice2 n2 where ' +
				'su.user_id=u.id and session_id=$1 and u.username=n.username and u.username=n2.username',
				[session_id], function(err, rawResult){ 
			//console.log('here: ' + session_id); 
	  	      if (err) {
	  	    	  //   console.log(err);
	  	    	  return res.json(200, {err: err});
	  	      }
	  	     if(rawResult){
	  	    	//console.log(rawResult);
	  	    	res.json(200, rawResult.rows);
	  	     }
		});
	},
	count: function(req, res){
		var session_id = req.param('session_id');
		//console.log('session_id: ' + session_id);
		SessionUser.query(
				'select count(*) from sessionuser where session_id=$1',
				[session_id], function(err, rawResult){ 
			//console.log('here: ' + session_id);
	  	      if (err) {
	  	    	  console.log(err);
	  	    	  return res.json(200, {err: err});
	  	      }
	  	     if(rawResult){
	  	    	res.json(200, rawResult.rows);
	  	     }
		});
	},
	update_ngo: function(req, res){
		var username = req.param('username');
		var ngo = req.param('ngo');
		
		SessionUser.query(
				'update ngo_choice2 set ngo=$1 where username=$2',
				[ngo, username], function(err, rawResult){ 
	  	      if (err) {
	  	    	  console.log(err);
	  	    	  return res.json(200, {err: err});
	  	      }
	  	     if(rawResult){
	  	    	res.json(200, {success_message: 'successfully updated ngo'});
	  	     }
		});
		
	},
	
	findSessionType: function(req, res){
		var username = req.param('username');
		//console.log('username: ' + username);
		if(req.session.username){
			username = req.session.username;
			//console.log('req.session.username: ' + req.session.username);
		}
		
		Uzer.findOne({username:username}).exec(function (err, record) {
			 // console.log('user: ' + JSON.stringify(record));
			  if(record){
				  SessionUser.findOne({user_id:record.id}).exec(function (err, sessionuser) {
					  if(!sessionuser){
						  console.log('no user session exists for this user'); 
					  }
					  if(sessionuser){
						  //console.log(' sessionuser user: ' + JSON.stringify(sessionuser));
						  Session.findOne({id: sessionuser.session_id}).exec(function (err, session) {
							  if(!session){
								  console.log('no sessionuser exists'); 
							  }
							  if(session){
								  SessionType.findOne({id: session.session_type}).exec(function (err, sessiontype) {
									  if(!sessiontype){
										  console.log('no session exists'); 
									  }
									  if(sessiontype){
										  res.json(200, sessiontype);
									  } 
								});
							  } 
						});
					  } 
				});
			  }
		});
	}
};

