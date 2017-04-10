module.exports = {
	comparePassword: function(req, res, user, password){
		
		Uzer.comparePassword(password, user, function (err, valid) {
	        if (err) {
	          return res.json(403, {err: 'forbidden'});
	        }
	
	        if (!valid) {
	          return res.json(401, {err: 'invalid password'});
	        } else {
	        	
	        	var token = jwToken.issue({id : user.id });
	        	req.session.token = token;
	        	// username is added to the session
	        	// this is used to track the user thoughout the application using a unique 
	        	// username
	        	req.session.username = user.username;
	        	var page_view = req.session.requesting_page;
	        	res.redirect(page_view);
	        }
		});
	}
}