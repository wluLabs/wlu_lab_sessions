/**
 * ScenarioController
 *
 * @description :: Server-side logic for managing scenarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
	quiz1: function (req, res){
		res.view('scenario/quiz1');
	},
	quiz2: function (req, res){
		res.view('scenario/quiz2');
	}
	
};

