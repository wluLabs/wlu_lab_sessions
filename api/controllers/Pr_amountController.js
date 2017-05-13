/**
 * Pr_amountController
 *
 * @description :: Server-side logic for managing pr_amounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	save: function(req, res){
		var amount = req.param('amount');
		var username = req.session.username;
		
		Pr_amount.create({username: username, amount: amount}).exec(function (err, amount) {
	  	      if (err) {
		  	        return res.json(200, {error_message: 'Invalid parameter: ' + err});
		  	  }
	  	      if (amount) {
	  	        res.json(200, {user: amount, success_message:'Your Amount has been save to the db'});
	  	      }
		});
	}
};

