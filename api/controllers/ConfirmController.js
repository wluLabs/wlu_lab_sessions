/**
 * ConfirmController
 *
 * @description :: Server-side logic for managing confirms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
  study1: function(req, res){
	  res.view('confirm/study1');
  },
  final: function(req, res){
	  res.view('confirm/final');
  }
};

