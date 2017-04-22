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
	  key_counter: function(req, res){
		  res.view('session2/key_counter');
	  }
};

