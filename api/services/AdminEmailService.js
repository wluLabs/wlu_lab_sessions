module.exports= {
	email: function(req, res, username, message){
		//var to_email = user.to_email;
		var message = message;
		message = message.replace("%20", " ");
		console.log(message);
		var email;
		console.log('attempting to find username: ' + username);
		Uzer.query('select * from uzer where username=$1', [username], function(err, rawResult){
			if(err){console.log('err: ' + err); }
			if(rawResult.rows.length > 0){
				//console.log(rawResult);
				sails.hooks.email.send(
				  "admin",
				  {
					  recipientName: rawResult.rows[0].username,
					  message: message
				  },
				  {
				    to: rawResult.rows[0].email,
				    subject: "WLU Session schedule"
				  },
				  function(err) {
					  console.log(err || "It worked for user: " + rawResult.rows[0].username);
				  }
				);
			}
		});
	}
}