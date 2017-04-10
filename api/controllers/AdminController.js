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
	}
	
};

