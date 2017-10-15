module.exports = {
  login: function (req, res) {
	  
  	var username = req.param('username');
  	var password = req.param('password');
  	//console.log(password);

	if (!username || !password) {
	  return res.json(401, {err: 'username and password required'});
	}

    Uzer.findOne({username: username}, function (err, user) {
      if (!user) {
    	  console.log('Looking up user by email: ' + username);
    	  // this is added so users can use email as username to login as a convenience
    	  Uzer.findOne({email: username}, function (err, user) {
    	      if (!user) {
    	    	  return res.json(401, {err: 'invalid username or password'});
    	      }
    	     if(user){
    	    	 console.log('User found comparing passwords!');
    	    	 console.log('found user by email: ');
    	    	 //console.log(user);
    	    	 //console.log(user.username);
    	    	 req.session.username = user.username;
    	    	 ComparePasswordService.comparePassword(req, res, user, password);
    	     }
    	 });
     }
     if(user){
    	 console.log('found user by username: ' + username);
    	 req.session.username = user.username;
    	 ComparePasswordService.comparePassword(req, res, user, password);
     }
    });
  },
  // Only used to automaticall log a user in once he/she creates an account
  login_user_from_create: function (req, res) {
  	var username = req.param('username');
  	var password = req.param('password');

	if (!username || !password) {
	  return res.json(200, {error_message: 'autologin failed'});
	}

    Uzer.findOne({username: username}, function (err, user) {
      if (!user) {
    	  //console.log();
        return res.json(401, {err: 'invalid username or password'});
      }

      Uzer.comparePassword(password, user, function (err, valid) {
        if (err) {
          return res.json(403, {err: 'forbidden'});
        }

        if (!valid) {
          return res.json(401, {error_message: 'invalid password'});
        } else {
        	var token = jwToken.issue({id : user.id });
        	req.session.token = token;
        	req.session.username = user.username; 
        	
        	res.json(200, {success_message: 'you are automatically logged in'});
        }
      });
    });
  },
  logout: function (req, res) {
	  req.session.token = null;
	  res.view('homepage');
  }
  
};