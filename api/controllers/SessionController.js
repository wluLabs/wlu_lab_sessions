/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
		findById: function(req, res){
			var id = req.param('id');
			//console.log('id ' + id);
			if(id){
				Session.findOne({id:id}).exec(function findOneCB(error, session){
					if (error) {
						return res.json(200, {error_message:'your find session by id failed'});
					  }
					  res.json(200, session);
				});
			}else{
				res.json(200, {message:'id is null'});
			}
		},
		remove: function(req, res){
			//res.json(200, {message:'delete session was inactivated until verified session with users cannot be mistakenly deleted'});
			var id = req.param('id');
			
			if(id ){
				SessionUser.query(
						'select count(*) from sessionuser where session_id=$1',
						[id], function(err, rawResult){ 
			  	      if (err) {
			  	    	  //console.log(err);
			  	    	  return res.json(200, {err: err});
			  	      }
			  	     if(rawResult){
			  	    	//res.json(200, rawResult.rows);
			  	    	 var count = new Number(rawResult.rows[0].count);
			  	    	console.log(count);
			  	    	 if(count == 0){
			  	    		//console.log('inside if'); 
			  	    		Session.destroy({id:id}).exec(function destroyCB(error){
								if (error) {
									return res.json(200, {error_message:'your delete session failed'});
								  }
								  //console.log('removed session object' );
								  res.json(200, {message:'session was removed'});
							});
			  	    	 }
			  	     }
				});
				
			}else{
				res.json(200, {message:'id is null'});
			}
		},
		create: function(req, res){
			var date = req.param('date');
			//console.log('Date ' + date);
			var time = req.param('time');
			var date_time;
			if(time === '1:30'){
				date_time = '13:30';
			}else if(time === '2:30'){
				date_time = '14:30';
			}else{
				date_time = time;
			}
			var newDate = new Date(date + " " + date_time);
			//console.log('time ' + time);
			//console.log('newDate ' + newDate);
			
			if(newDate && time){
				Session.findOne( {date:newDate,time: time}).exec(function findOneCB(error, session){
					if (error) {
						return res.json(200, {error_message:'your create session attempt failed'});
					  }
					//console.log('session ' + session);
					  if (!session) {
						  //console.log('session not found ----- creating' );
						  CreateSessionService.createSession(newDate, time, res);
					  }else{
						  res.json(200, {message:'This session already exists!'});
					  }
				});
				
			}else{
				this.schedule();
			}
			
			
		},
		update: function(req, res){
			var date = req.param('date');
			//console.log('Date ' + date);
			var time = req.param('time');
			//console.log('time ' + time);
			var date_time;
			if(time === '1:30'){
				date_time = '13:30';
			}else if(time === '2:30'){
				date_time = '14:30';
			}else{
				date_time = time;
			}
			var newDate = new Date(date);
			session_id = req.session.session_id;
			//console.log('session_id ' + session_id);
			//console.log('time ' + time);
			//console.log('date ' + date);
			//console.log('new date ' + newDate );
			if(newDate && time){
				Session.update({id: session_id},{date:newDate,time: time}).exec(function updateCB(error, session){
					if (error) {
						return res.json(200, {error_message:'your update session attempt failed'});
					}
					if(session) {
						res.json(200, {session:session});
					} 
				});
			}
		},
		schedule: function (req, res){
			return res.view('session/schedule');
		},
		find: function (req, res){
			Session.query('select s.* from session s order by s.date',function (err, rows){
				  if (err) {
					  return res.json(200, {error_message:'your find sessions search failed'});
				  }
				  if(rows){
					  return res.json(rows);
				  }
				  
			});
		},
		findSessionsForUser: function (req, res){
			Session.query(	'select * from session where id not in (select session_id from sessionuser ' +
							' group by session_id having count(session_id )>23) and date > current_date  order by date'
							,function (err, rows){
				  if (err) {
					  return res.json(200, {error_message:'your find sessions for user failed'});
				  }if(rows){
					  return res.json(rows);
				  }
				  
				  
			});
		},
		view: function (req, res){
			res.view('admin/view');
		},
		update_session_type: function(req, res){
			var id = req.param('session_id');
			var session_type = req.param('session_type');
			Session.query('update session set session_type=$1 where id=$2',[session_type, id],function (err, rows){
				  if (err) {
					  
					  return res.json(200, {error_message:'your update session_type failed'});
				  }if(rows){
					  return res.json(200, {success_message:'you update session_type'});
				  }	  
			});
		}	
};

