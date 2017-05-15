/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
	home: function(req, res){
		res.view('admin/home');
	},
	session_email_admin: function(req, res){
		res.view('admin/session_email_admin');
	},
	schedule_session: function(req, res){
		res.view('admin/schedule_session');
	},
	view_session_data: function(req, res){
		res.view('admin/view_session_data');
	},
	select_session_admin_emailer: function(req, res){
		res.view('admin/select_session_admin_emailer');
	},
	email: function(req, res){
		var users = req.param('users');
		var message = req.param('message');;
		AdminMassEmailService.email(req, res, users, message);
	},
	session_admin_emailer: function(req, res){
		var session_id = req.param('session_id');
		//console.log('session_id: ' + session_id);
		req.session.session_id = session_id;
		res.view('admin/session_admin_emailer');
	},
	view_session: function(req, res){
		var session_id = req.param('session_id');
		req.session.session_id = session_id;
		res.view('admin/view_session');
	},
	user_lookup: function(req, res){
		var session_id = req.param('session_id');
		req.session.session_id = session_id;
		res.view('admin/user_lookup');
	},
	findUserByEmail: function(req, res){
	  
		var email = req.param('email');
		SessionUser.query(
			"select * from uzer u where email like '%" + email + "%' order by email asc", function(err, rawResult){ 
			if (err) {
				  //console.log(err);
				  return res.json(200, {err: err});
			}
			if(rawResult){
				res.json(200, rawResult.rows);
			}
		});
	},
	show_user_data: function(req, res){
		var session_id = req.param('session_id');
		req.session.session_id = session_id;
		res.view('admin/show_user_data');
	},
	select_user_data_session: function (req, res){
		res.view('admin/select_user_data_session');
	}
	
};

