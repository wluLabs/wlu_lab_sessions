/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
//  create: function (req, res) {
//	  //console.log(req);
//    if (req.query.password !== req.query.confirmPassword) {
//      return res.json(401, {err: 'Password doesn\'t match, What a shame!'});
//    }
//    var user={};
//    console.log(req.query.password);
//    user.password=req.query.password;
//    user.email=req.query.email;
//    User.create(user).exec(function (err, user) {
//      if (err) {
//        return res.json(err.status, {err: err});
//      }
//      // If user created successfuly we return user and token as response
//      if (user) {
//        // NOTE: payload is { id: user.id}
//        res.json(200, {user: user, token: jwToken.issue({id: user.id})});
//      }
//    });
//  },
  createUser: function (req, res) {
	  var email = req.param('email');
	  var password = req.param('password');
	  var confirm_password = req.param('confirm_password');
	  var username = req.param('username');
	  var user={};
	  user.password=password;
	  user.email=email;
	  user.username = username;
	  console.log('confirm_password ' + confirm_password);
	  console.log('email ' + email);
	  console.log('username ' + username);
	  
	  	if (!confirm_password ) {
	      return res.json(200, {error_message: 'Password doesn\'t match, What a shame!'});
	    }else if (!password ) {
	      return res.json(200, {error_message: 'Password doesn\'t match, What a shame!'});
	    }else if (!email ) {
	      return res.json(200, {error_message: 'you must supply an email'});
	    }else if (password !== confirm_password) {
	      return res.json(200, {error_message: 'Password doesn\'t match, What a shame!'});
	    }else{
	    	Uzer.create(user).exec(function (err, user) {
	  	      if (err) {
	  	        return res.json(200, {error_message: 'Invalid parameter: ' + err});
	  	      }
	  	      // If user created successfuly we return user and token as response
	  	      if (user) {
	  	        // NOTE: payload is { id: user.id}
	  	        res.json(200, {user: user, success_message:'Your Account has been created'});
	  	      }
	  	    });
	    }
	    
  },
  displayCreateUserPage: function(req, res){
	  res.view('user/generate');
  },
  checkUsernameAvailable: function(req, res){
	  var username = req.param('username');
	  if(username){
		  Uzer.findOne({username: username}).exec(function (err, record) {
			  if(record){
				  res.json(200, {message: 'This username is not available!'});
			  }else{
				  res.json(200, {message: 'This username is currently available.'});
			  }
		  });
	  }else{
		  res.json(200, {message: 'Please select  username!!'});
	  }
	 
  }
  
};