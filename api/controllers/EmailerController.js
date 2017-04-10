/**
 * EmailerController
 *
 * @description :: Server-side logic for managing emailers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 


module.exports = {
		
	testMail: function(req, res){
		var to_email = 'funston.greg@gmail.com, mensatech@gmail.com';
		sails.hooks.email.send(
		  "testEmail",
		  {
		    recipientName: "Joe",
		    senderName: "Sue"
		  },
		  {
		    to: to_email,
		    subject: "Hi there"
		  },
		  function(err) {console.log(err || "It worked!");}
		);
	},
	user_send_mail: function(req, res){
		var username = req.param('username');
		var to_email = FindUserByUsernameEmailService.find(req, res, username);
	}
};

