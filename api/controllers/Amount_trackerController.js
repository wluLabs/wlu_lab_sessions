/**
 * Amount_trackerController
 *
 * @description :: Server-side logic for managing amount_trackers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		
	create: function(req, res){
		var username = req.session.username;
		
		Amount_tracker.create({username:username}).exec(function createCB(error, tracker){
			if (error) {
			    return res.json(200, {error_message: "there is an error creating the amount tracker object for this user"});
			  }
			  res.json(200, tracker);
		});
	
	},
	update:function(req, res){
		var username = req.session.username;
		var page;
		Amount_tracker.findOne({username:username}).exec(function findOneCB(error, tracker){
			if (error) {
			    return res.json(200, {error_message: "unable to find an amount tracker object for this user"});
			}
			//console.log(JSON.stringify(tracker));
			if(tracker){
				if(tracker.page_1 === true){
					tracker.page_1 = false;
					page = 1;
				}else if(tracker.page_2 === true){
					tracker.page_2 = false;
					page = 2;
				}else if(tracker.page_3 === true){
					tracker.page_3 = false;
					page = 3;
				}else{
					tracker.page_4 = false;
					page = 4;
				}
				//console.log("page " + page);
				//console.log(" after if else" + JSON.stringify(tracker));
				Amount_tracker.update({id: tracker.id},{
						page_1: tracker.page_1, 
						page_2: tracker.page_2,
						page_3: tracker.page_3,
						page_4: tracker.page_4
					}).exec(function updateCB(error, updated){
					if (error) {
						return res.json(200, {error_message: "there is an error retrieving the amount tracker object for this user"});
					}
					if(updated){
						//console.log(" updated: " + JSON.stringify(updated));
						res.json(200, {page: page});
					}
				});
			}
		});
	}
};

