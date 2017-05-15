module.exports = {
  createAccount: function (req, res) {
	  res.view('page/createAccount');
  },
  login:function (req, res) {
	  res.view('page/login');
  },
  question: function(req, res){
	  res.view('page/question/query/question_display');
  },
  question_edit: function(req, res){
	  var username = req.session.username;
	  res.view('page/question/edit/question_edit');
  },
  answer_edit: function(req, res){
	  var questionnumber = req.query.questionnumber;
	  //console.log('questionnumber' + questionnumber);
	  res.view('page/answer/edit/answer_edit');
  },
  test_partial: function(req, res){
	  var questionnumber = req.query.questionnumber;
	  //console.log('questionnumber' + questionnumber);
	  res.view('test/test3');
  },
  pickSession: function(req, res){
	  res.view('page/pickSession');
  },
  showUserSession: function(req, res){
	  res.view('session/successful_signup');
  },
  intro: function(req, res){
	  res.view('allocation/intro');
  },
  ccac: function(req, res){
	  res.view('allocation/ccac');
  },
  aac: function(req, res){
	  res.view('allocation/aac');
  }
  
};