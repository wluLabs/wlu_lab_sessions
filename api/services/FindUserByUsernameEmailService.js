module.exports = {
	find: function(req, res, username){
		console.log('username: ' + username);
		Uzer.query('select * from uzer where username=$1', [username], function(err, rawResult){ 
  	      if (!rawResult) {
  	    	  return res.json(401, {err: 'invalid username or password'});
  	      }
  	     if(rawResult){
  	    	 SendEmailToUserService.email(req, res, rawResult.rows[0].email);
  	     }
  	 });
	}
}