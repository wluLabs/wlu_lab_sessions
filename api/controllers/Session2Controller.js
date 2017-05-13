/**
 * Session2Controller
 *
 * @description :: Server-side logic for managing session2s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	  welcome: function(req, res){
		  res.view('session2/welcome');
	  },
	  practice_round: function(req, res){
		  res.view('session2/practice_round');
	  },
	  always_switch: function(req, res){
		  res.view('session2/always_switch');
	  },
	  always_stay: function(req, res){
		  res.view('session2/always_stay');
	  },
	  free_to_switch: function(req, res){
		  res.view('session2/free_to_switch');
	  },
	  pay_to_stay: function(req, res){
		  res.view('session2/pay_to_stay');
	  },
	  pay_to_switch: function(req, res){
		  res.view('session2/pay_to_switch');
	  },
	  pay_to_quit: function(req, res){
		  res.view('session2/pay_to_quit');
	  },
	  after_practice: function(req, res){
		  res.view('session2/after_practice');
	  },
	  my_earnings: function(req, res){
		  res.view('session2/my_earnings');
	  },
	  my_earnings2: function(req, res){
		  res.view('session2/my_earnings2');
	  },
	  ngo_earnings: function(req, res){
		  res.view('session2/ngo_earnings');
	  },
	  ngo_earnings2: function(req, res){
		  res.view('session2/ngo_earnings2');
	  },
	  after_earnings: function(req, res){
		  res.view('session2/after_earnings');
	  },
	  after_earnings2: function(req, res){
		  res.view('session2/after_earnings2');
	  },
	  after_ngo_earnings: function(req, res){
		  res.view('session2/after_ngo_earnings');
	  },
	  after_ngo_earnings2: function(req, res){
		  res.view('session2/after_ngo_earnings2');
	  },
	  exit_question: function(req, res){
		  res.view('session2/exit_question');
	  },
	  after_amount: function(req, res){
		  res.view('session2/after_amount');
	  }
};

