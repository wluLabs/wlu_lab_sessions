module.exports = {
  login: function (req, res) {
	  	var email = req.param('email');
	  	//console.log(email);
	  	var password = req.param('password');
	  	//console.log(password);

		if (!email || !password) {
		  return res.json(401, {err: 'email and password required'});
		}

	    User.findOne({email: email}, function (err, user) {
	      if (!user) {
	        return res.json(401, {err: 'invalid email or password'});
	      }

	      User.comparePassword(password, user, function (err, valid) {
	        if (err) {
	          return res.json(403, {err: 'forbidden'});
	        }

	        if (!valid) {
	          return res.json(401, {err: 'invalid email or password'});
	        } else {
	        	var token = jwToken.issue({id : user.id });
	        	req.session.token = token;
	        	req.session.email = email;
	        	console.log(req.path);
	        	
	        	var page_view = req.session.requesting_page;
	        	page_view = page_view.substring(1);
	        	console.log('requesting_page: ' + page_view);
	        	res.view(page_view);
	        }
	      });
	    });
	
  },
  logout: function (req, res) {
	  req.session.token = null;
	  res.view('homepage');
  }
  
};