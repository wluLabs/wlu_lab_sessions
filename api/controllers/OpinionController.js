  /**
 * OpinionController
 *
 * @description :: Server-side logic for managing opinions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	save: function(req, res){
		username = req.session.username;
		//console.log('username' + username);
		question = req.param('question');
		value = req.param('value');
		message = 'username: ' + username + ' question: ' + question + ' choice:' + value;
		//console.log(message);
		Opinion.findOne({username: username, question: question}).exec(function findCB(error, opinion){
			if(error){
				message = 'username: ' + username + ' question: ' + question + ' choice:' + value;
				//console.log(message);
			}if(opinion){
				console.log('Found updating ....');
				Opinion.update({username: username, question: question},{username: username, question: question, value: value}).exec(function updateCB(error, opinion){
					if(error){
						message = 'username: ' + username + ' question: ' + question + ' choice:' + value;
						//console.log(message);
					}
					//console.log(opinion);
					return res.json(opinion);
				});
				
			}else{
				Opinion.create({username: username, question: question, value: value}).exec(function updateCB(error, opinion){
					//console.log('Not Found creating ....');
					if(error){
						message = 'username: ' + username + ' question: ' + question + ' choice:' + value;
						//console.log(message);
					}
					if(opinion){
						//console.log(opinion);
						return res.json(200, opinion);
					}
					
				});
			}
		});
	},
	update: function(req, res){
		username = req.session.username;
		question = req.param('question');
		value = req.param('value');
		
		Opinion.update({username: username, question: question, value: value}).exec(function updateCB(error, opinion){
			if(error){
				message = 'username: ' + username + ' question: ' + question + ' choice:' + value;
				//console.log(message);
			}
			return res.json(opinion);
		});
	},
	find: function(req, res){
		username = req.session.username;
		question = req.param('question');
		
		Opinion.find({username: username, question: question}).exec(function findCB(error, opinion){
			if(error){
				message = 'username: ' + username + ' question: ' + question + ' choice:' + value;
				//console.log(message);
			}
			return res.json(opinion);
		});
	}
};

