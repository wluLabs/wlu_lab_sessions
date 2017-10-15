/**
 * User_page_orderController
 *
 * @description :: Server-side logic for managing user_page_orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
	save: function(req, res){
		var page_order = req.param('page_order');
		//console.log(page_order);
		var username = req.session.username;
		var user_page_order = {
				page_order: page_order,
			    username: username 
		}
		
		User_page_order.findOne({username: username}).exec(function (err, page_order){
			if(page_order){
				res.json(200, {user_page_order: page_order, success_message:'Your user_page_order was returned'});
			}else{
				User_page_order.create(user_page_order).exec(function (err, user_page_order) {
			  	      if (err) {
				  	        return res.json(200, {error_message: 'Invalid parameter: ' + err});
				  	  }
			  	      if (user_page_order) {
			  	        res.json(200, {user_page_order: user_page_order, success_message:'Your user_page_order has been save to the db'});
			  	      }
				});
				
			}
		});
	},
	find: function(req, res){
		
		var username = req.session.username;
		
		//console.log(my_earnings);
		User_page_order.query ("select * from user_page_order u, page_order p where u.username=$1 and cast(u.page_order AS int)=p.id",[username], function (err, rawResult) {
	  	      if (err) {
		  	        return res.json(200, {error_message: 'Invalid parameter: ' + err});
		  	  }
	  	      if (rawResult) {
	  	    	res.json(200, rawResult.rows);;
	  	      }
		});
	}
	
};

