
/**
 * Lab2Controller
 *
 * @description :: Server-side logic for managing lab2s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
		  study1: function(req, res){
			  res.view('lab2/page1');
		  },
		  final: function(req, res){
			  res.view('lab2/page2');
		  }
			
		};

