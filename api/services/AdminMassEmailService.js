module.exports= {
	email: function(req, res, username_list, message){
		var usernames = username_list;
		var sentUsernames= [];
		for(i = 0; i < usernames.length; i++){
			//var user = AdminEmailService.find(req, res, usernames[i], message);
			sentUsernames[i] = AdminEmailService.email(req, res, usernames[i], message);
		}
	}
}