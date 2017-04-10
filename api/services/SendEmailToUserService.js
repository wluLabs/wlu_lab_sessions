module.exports = {
	email: function(req, res, to_email){
		console.log('to_email: ' + to_email);
		to_email = to_email;
		var session_date = req.param('session_date');
		var session_time = req.param('session_time');
		sails.hooks.email.send(
		  "session",
		  {
			to_email: to_email,
		    session_time: session_time,
		    session_date: session_date
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
}