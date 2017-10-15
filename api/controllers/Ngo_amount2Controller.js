/**
 * Ngo_amount2Controller
 *
 * @description :: Server-side logic for managing ngo_amount2s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	save: function(req, res){
		var amount = req.param('amount');
		var username = req.session.username;
		var keepCounts = req.param('keepCounts');
		var ngo_earnings = {
			    amount: amount,
			    amount_1_30: keepCounts['total1'],
			    amount_2_30: keepCounts['total2'],
			    amount_3_30: keepCounts['total3'],
			    amount_4_30: keepCounts['total4'],
			    amount_5_30: keepCounts['total5'],
			    amount_6_30: keepCounts['total6'],
			    count_1_30: keepCounts['counter1'],
			    count_2_30: keepCounts['counter2'],
			    count_3_30: keepCounts['counter3'],
			    count_4_30: keepCounts['counter4'],
			    count_5_30: keepCounts['counter5'],
			    count_6_30: keepCounts['counter6'],
			    username: username 
		}
		
		Ngo_amount2.create(ngo_earnings).exec(function (err, amount) {
	  	      if (err) {
		  	        return res.json(200, {error_message: 'Invalid parameter: ' + err});
		  	  }
	  	      if (amount) {
	  	        res.json(200, {user: amount, success_message:'Your Amount has been save to the db'});
	  	      }
		});
	},
	
	find: function(req, res){
		
		var username = req.session.username;
		
		Ngo_amount2.findOne({ username: username }).exec(function findOneCB(error, ngo_amount2){
			if (error) {
			    return res.json(200, {error_message: 'Unable to find an pr_amount object for username: ' + username});
			}
			if(ngo_amount2){
				res.json(200, {ngo_amount2: ngo_amount2});
			}
			  
		});
		
	}
		
	
};

