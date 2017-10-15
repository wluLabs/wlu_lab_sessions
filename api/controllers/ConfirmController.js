/**
 * ConfirmController
 *
 * @description :: Server-side logic for managing confirms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
//  study1: function(req, res){
//	  res.view('confirm/study1');
//  },
  end1: function(req, res){
	var logged_out = LogoutUserService.logout(req, res);
  	if(logged_out === true){
  		req.session.token = null;
		res.view('confirm/end1');
  	}else{
  		res.view('confirm/end1');
  	}
  },
  end2: function(req, res){
	var logged_out = LogoutUserService.logout(req, res);
  	if(logged_out === true){
  		req.session.token = null;
		res.view('confirm/end2');
  	}else{
  		res.view('confirm/end2');
  	}
  }
};

