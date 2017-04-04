/**
 * OpinionController
 *
 * @description :: Server-side logic for managing opinions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	save: function(req, res){
		email = req.session.email;
		question = req.param('question');
		value = req.param('value');
		
		Opinion.create({email: email, question: question, value: value}).exec(function createCB(error, opinion){
			if(error){
				message = 'email: ' + email + ' question: ' + question + ' choice:' + value;
				console.log(message);
			}
			return res.json(opinion);
		});
	},
	update: function(req, res){
		email = req.session.email;
		question = req.param('question');
		value = req.param('value');
		
		Opinion.update({email: email, question: question, value: value}).exec(function updateCB(error, opinion){
			if(error){
				message = 'email: ' + email + ' question: ' + question + ' choice:' + value;
				console.log(message);
			}
			return res.json(opinion);
		});
	},
	find: function(req, res){
		email = req.session.email;
		question = req.param('question');
		
		Opinion.find({email: email, question: question}).exec(function findCB(error, opinion){
			if(error){
				message = 'email: ' + email + ' question: ' + question + ' choice:' + value;
				console.log(message);
			}
			return res.json(opinion);
		});
	}
};

