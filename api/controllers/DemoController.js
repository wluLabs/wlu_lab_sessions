/**
 * DemoController
 *
 * @description :: Server-side logic for managing demoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
		info: function(req, res){
			res.view('demo/demo_info');
		},
		one: function(req, res){
			res.view('demo/demo_one');
		},
		two: function(req, res){
			res.view('demo/demo_two');
		},
		three: function(req, res){
			res.view('demo/demo_three');
		},
		foura: function(req, res){
			res.view('demo/demo_foura');
		},
		fourb: function(req, res){
			res.view('demo/demo_fourb');
		},
		five: function(req, res){
			res.view('demo/demo_five');
		},
		six: function(req, res){
			res.view('demo/demo_six');
		},
		confirm: function(req, res){
			res.view('demo/confirm');
		},
		create: function(req,res){
			
			var gender = req.param('gender');
			var age = req.param('age');
			var year = req.param('year');
			var majors = req.param('majors');
			var business_area = req.param('bus_areas');
			var game_hours = req.param('game_hours');
			var work_ex = req.param('work_ex');
			var username = req.session.username;
			
			if(typeof business_area === 'undefined'){
				business_area = 'n/a'
			}
			
			var info = {
				gender: gender ,
			    age : age,
			    year : year,
			    major: majors,
			    business_area : business_area,
			    game_hours: game_hours,
			    work_ex_months: work_ex,
			    username: username
		    };
			
	    	Demo.findOne({username:username}).exec(function (err, demo) {
		  	      if (err) {
		  	        return res.json(200, {error_message: 'Invalid parameter: ' + err});
		  	      }
		  	      
		  	      if (demo) {
		  	    	Demo.update({username: username},info).exec(function (err, demo) {
				  	      if (err) {
				  	        return res.json(200, {error_message: 'Invalid parameter: ' + err});
				  	      }
				  	      
				  	      if (demo) {
				  	    	//var logged_out = LogoutUserService.logout(req, res);
				  	    	//if(logged_out === true){
				  	    	res.json(200, {demo: demo, success_message:'Your info was saved'});
				  	    	//}
				  	      }
			  		});
		  	      }else{
		  			
		  			Demo.create(info).exec(function (err, demo) {
			  	      if (err) {
			  	        return res.json(200, {error_message: 'Invalid parameter: ' + err});
			  	      }
			  	      
			  	      if (demo) {
			  	    	//var logged_out = LogoutUserService.logout(req, res);
			  	    	//if(logged_out === true){
			  	    	res.json(200, {demo: demo, success_message:'Your info was saved'});
			  	    	//}
			  	      }
		  			});
		  	    	  
		  	      }
		  	});
			

		}
	
};

