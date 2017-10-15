/**
 * CreateSessionService
 *
 * @description :: Server-side logic for managing demoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
		createSession: function (newDate, time, res){
			
			Session.create( {date:newDate,time: time, max: '24'}).exec(function createCB(error, session){
				if (error) {
				    return res.serverError(error);
				  }
				  
				  if (session) {
					  console.log('created session object' );
					  return res.json(200, {session: session});
				  }
			});
			
		},
		
		createUserSession: function (session_id,user_id, res){
			SessionUser.count({session_id:session_id}).exec(function countCB(error, count) {
				  //console.log('There are ' + count + ' sessionusers found"');
				  //console.log('trying to create a user session with user: ' + user_id + 'and session ' + session_id);
				  //console.log(typeof count);
				  if(typeof count === 'number' && count < 24 ){  
					  //console.log('inside if');
					  SessionUser.findOne({session_id: session_id, user_id:user_id}).exec(function (err, session_user)  {
						  if(err){
							  console.log(err); 
						  }
						 
						  if(session_user){
							  console.log('a user session was already created for this user'); 
							  res.json(200, {session:session_user});
						  }
						  else if(!session_user){
			
							  SessionUser.query('INSERT INTO SessionUser  (user_id , session_id) values($1, $2)' ,
									  [user_id, session_id ] ,function (err, record) {
											  if(err){
												  console.log(err);
												  res.json(200, {message: ' we were unable to create your session'});
											  }
											  res.json(200, {session:record});
											  console.log('session user created: ' + record);
							  });
						  }else{
							  console.log('unable to create a user session');
						  }
					  }); 
				  }
			});
		}
};