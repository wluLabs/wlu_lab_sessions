/**
 * CountQuestionsController
 *
 * @description :: Server-side logic for managing countquestions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	count: function(req, res){
		Quiz.count().exec(function countCB(error, found){
			//console.log('found: ' + found);
			return res.json(found);
		});
	}
};

