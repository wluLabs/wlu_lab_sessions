/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
		remove: function(req, res){
			var id = req.param('id');
			console.log('id ' + id);
			if(id){
				Session.destroy({id:id}).exec(function destroyCB(error){
					if (error) {
					    return res.serverError(error);
					  }
					  console.log('created session object' );
					  res.json(200, {message:'session was removed'});
				});
			}else{
				res.json(200, {message:'id is null'});
			}
		},
		create: function(req, res){
			var date = req.param('date');
			console.log('Date ' + date);
			var newDate = new Date(date);
			var time = req.param('time');
			console.log('time ' + time);
			console.log('newDate ' + newDate);
			
			if(newDate && time){
				Session.findOne( {date:newDate,time: time}).exec(function findOneCB(error, session){
					if (error) {
					    return res.serverError(error);
					  }
					console.log('session ' + session);
					  if (!session) {
						  console.log('session non found ----- creating' );
						  CreateSessionService.createSession(newDate, time, res);
					  }else{
						  res.json(200, {message:'This session already exists!'});
					  }
				});
				
			}else{
				this.schedule();
			}
			
			
		},
		schedule: function (req, res){
			return res.view('session/schedule');
		},
		find: function (req, res){
			Session.query('select * from session s order by s.date',function (err, rows){
				  if (err) {
				    return res.serverError(err);
				  }
				  //sails.log(rows);
				  return res.json(rows);
			});
		},
		findSessionsForUser: function (req, res){
			Session.query('select * from session where id not in (select session_id from sessionuser  group by session_id having count(session_id )>24) order by date',function (err, rows){
				  if (err) {
				    return res.serverError(err);
				  }
				  //sails.log(rows);
				  return res.json(rows);
			});
		}
		
};

