module.exports = {
	find: function(req, res, username){
		console.log('username: ' + username);
		Uzer.findOne({username: username}, function (err, user) {
  	      if (!user) {
  	    	  return res.json(401, {err: 'invalid username or password'});
  	      }
  	     if(user){
  	    	 return user;
  	     }
  	 });
	}
}