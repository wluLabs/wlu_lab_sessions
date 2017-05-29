/**
 * BonusController
 *
 * @description :: Server-side logic for managing bonuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		var username = req.session.username;
		Bonus.create({username: username}).exec(function(err, bonus){
			if(err){
				console.log('no bonus created'); 
			}
			if(bonus){
				  res.json(200, {bonus: bonus});
			} 
		});
	},
	find: function(req, res){
		var username = req.session.username;
		Bonus.findOne({username: username}).exec(function(err, bonus){
			if(err){
				console.log('no session exists'); 
			}
			if(bonus){
				  res.json(200, {bonus: bonus});
			} 
		});
	}
	
};

