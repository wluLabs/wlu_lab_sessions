/**
 * UserdataController
 *
 * @description :: Server-side logic for managing userdatas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	find: function(req,res){
	
		var session_id = req.param('session_id');
		//console.log('session_id: ' +  session_id);
		Query.query(
			"select user_id from sessionuser where session_id=$1",[session_id], function(err, rawResult){ 
				if (err) {
					  //console.log(err);
					  return res.json(200, {err: err});
				}
				if(rawResult){
					res.json(200, {rows: rawResult.rows});
				}
		});
	},
	findUserDataById: function(req, res){
		var user_id = req.param('user_id');
		console.log('user_id: ' +  user_id);
		
		var query = "select " +
			"u.username, " +
			"n1.ngo, " +
			"n2.ngo , " +
			"pr.amount, " +
			"po.page1, po.page2, po.page3, po.page4," +
			"ngo.amount as nt, ngo.amount_1_30 as na1, ngo.amount_2_30 as na2, ngo.amount_3_30 as na3, ngo.amount_4_30 as na4, ngo.amount_5_30 as na5, ngo.amount_6_30 as na6," +
			"ngo.count_1_30 as nc1, ngo.count_2_30 as nc2, ngo.count_3_30 as nc3, ngo.count_4_30 as nc4, ngo.count_5_30 as nc5, ngo.count_6_30 as nc6, " +
			"ngo2.amount as n2t, ngo2.amount_1_30 as n2a1, ngo2.amount_2_30 as n2a2, ngo2.amount_3_30 as n2a3, ngo2.amount_4_30 as n2a4, ngo2.amount_5_30  as n2a5, ngo2.amount_6_30 as n2a6," +
			"ngo2.count_1_30 as n2c1, ngo2.count_2_30 as n2c2, ngo2.count_3_30 as n2c3, ngo2.count_4_30 as n2c4, ngo2.count_5_30 as n2c5, ngo2.count_6_30 as n2c6, " +
			"my.amount as mta, my.amount_1_30 as ma1, my.amount_2_30 as ma2, my.amount_3_30 as ma3, my.amount_4_30 as ma4, my.amount_5_30 as ma5, my.amount_6_30 as ma6, " +
			"my.count_1_30 as mc1, my.count_2_30 as mc2, my.count_3_30 as mc3, my.count_4_30 as mc4, my.count_5_30 as mc5, my.count_6_30 as mc6, " +
			"my2.amount as mt2a, my2.amount_1_30 as m2a1, my2.amount_2_30 as m2a2, my2.amount_3_30 as m2a3, my2.amount_4_30 as m2a4, my2.amount_5_30 as m2a5, my2.amount_6_30 as m2a6," +
			"my2.count_1_30 as m2c1, my2.count_2_30 as m2c2, my2.count_3_30 as m2c3, my2.count_4_30 as m2c4, my2.count_5_30 as m2c5, my2.count_6_30 as m2c6 " +
		"from " +
			"uzer u, " +  
			"ngo_choice1 n1, " +
			"ngo_choice2 n2, " +
			"pr_amount pr, " +
			"my_amount my,  " +
			"my2_amount my2, " +
			"ngo_amount ngo, " +
			"ngo_amount2 ngo2, " +
			"user_page_order p, " +
			"page_order po " +
		"where " +
			"u.id=$1 and " +
			"n1.username=u.username and " +
			"n2.username=u.username and " +
			"pr.username=u.username and " +
			"my.username=u.username and " +
			"my2.username=u.username and " +
			"ngo.username=u.username and " +
			"ngo2.username=u.username and " +
			"p.username=u.username and " +
			"cast(p.page_order as int) = po.id;";
		
		Query.query(
				query,[user_id], function(err, rawResult){ 
				if (err) {
					  //console.log(err);
					  return res.json(200, {err: err});
				}
				if(rawResult){
					res.json(200, {rows: rawResult.rows});
				}
		});
		
	},
	findUserOpinions: function(req, res){
		var username = req.param('username');
		Query.query(
			"select * from opinion where username=$1",[username], function(err, rawResult){ 
			if (err) {
				  //console.log(err);
				  return res.json(200, {err: err});
			}
			if(rawResult){
				res.json(200, {rows: rawResult.rows});
			}
		});
		
	}
};

