/**
 * EmailerController
 *
 * @description :: Server-side logic for managing emailers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 


module.exports = {
		
		testMail: function(req, res){
			var to_email = 'wlu.funston.greg@gmail.com';
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
		sessionMail: function(req, res){
			var to_email = req.param('to_email');
			console.log(to_email);
			to_email = 'funston.greg@gmail.com';
			var session_date = req.param('session_date');
			console.log(session_date);
			var session_time = req.param('session_time');
			console.log(session_time);
			sails.hooks.email.send(
					  "session",
					  {
					    email: to_email,
						sessionTime: session_time,
					    sessionDate: session_date
					  },
					  {
					    to: to_email,
					    subject: "WLU Session schedule"
					  },
					  function(err) {console.log(err || "It worked!");
					  		res.json(200, {message: 'Your email was successfully sent'});
					  }
			);
			
				
			
		}
		
	
};

