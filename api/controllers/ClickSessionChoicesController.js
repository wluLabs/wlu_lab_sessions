/**
 * ClickSessionChoicesController
 *
 * @description :: Server-side logic for managing clicksessionchoices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
	create: function (req, res){
	
		my_session = Math.floor(Math.random() * 2);
		ngo_session = Math.floor(Math.random() * 2);
	
		var username = req.session.username;
		
		console.log('my_session: ' + my_session);
		console.log('ngo_session ' + ngo_session);

		ClickSessionChoices.create({username: username, my_session: my_session, ngo_session: ngo_session  }).exec(function (err, sessionChoices) {
			if(err){
				console.log(err);
				res.json(200, {message_error: err});
			}
			if(sessionChoices){
				res.json(200, {sessionChoices: sessionChoices});
			}					  
		});
	},
	find:  function (req, res){
		var username = req.session.username;
		ClickSessionChoices.findOne({username: username }).exec(function (err, sessionChoices) {
			if(err){
				//console.log(err);
				res.json(200, {message_error: err});
			}
			if(sessionChoices){
				res.json(200, {sessionChoices: sessionChoices});
			}					  
		});
	}
	
};

