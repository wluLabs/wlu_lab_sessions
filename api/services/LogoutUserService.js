module.exports = {
	logout: function(req, res){
		req.session.token = null;
		var logged_out = true;
		sails.log.info('logged out user' +  + ' accessing page: ' + req.path);
		return logged_out;
	}
}