/**
 * SessionTypeController
 *
 * @description :: Server-side logic for managing sessiontypes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function(req, res){
		var session_type = req.param("session_type");
		SessionType.findOne({id: session_type}).exec(function (err, sessiontype) {
			  if(!sessiontype){
				  console.log('no session exists'); 
			  }
			  if(sessiontype){
				  res.json(200, sessiontype);
			  } 
		});
	}
	
};

