/**
 * My_amountController
 *
 * @description :: Server-side logic for managing my_amounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	save: function(req, res){
		//console.log('my_amount');
		var amount = req.param('amount');
		var keepCounts = req.param('keepCounts');
		var username = req.session.username;
		var my_earnings = {
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
		
		My_amount.create(my_earnings).exec(function (err, amount) {
	  	      if (err) {
		  	        return res.json(200, {error_message: 'Invalid parameter: ' + err});
		  	  }
	  	      if (amount) {
	  	        res.json(200, {user: amount, success_message:'Your Amount has been save to the db'});
	  	      }
		});
	}
	
};

