/**
 * ClickSessionChoicesController
 *
 * @description :: Server-side logic for managing clicksessionchoices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
	create: function (req, res){
	
		my_session = Math.floor(Math.random() * 2) + 1;
		ngo_session = Math.floor(Math.random() * 2) + 1;
		
		my_allocation_choice = Math.floor(Math.random() * 10) + 1;
		my2_allocation_choice = Math.floor(Math.random() * 10) + 1;
		ngo_allocation_choice = Math.floor(Math.random() * 10) + 1;
		ngo2_allocation_choice = Math.floor(Math.random() * 10) + 1;
	
		var username = req.session.username;
		
		console.log('my_session: ' + my_session);
		console.log('ngo_session ' + ngo_session);

		ClickSessionChoices.create({
				username: username,
				my_session: my_session, 
				ngo_session: ngo_session, 
				my_allocation_choice: my_allocation_choice, 
				ngo_allocation_choice: my_allocation_choice,
				my2_allocation_choice: my2_allocation_choice, 
				ngo2_allocation_choice: my2_allocation_choice 
			}).exec(function (err, sessionChoices) {
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

