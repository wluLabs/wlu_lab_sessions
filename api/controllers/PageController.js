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
	  var email = req.session.email;
	  console.log('getting email: ');
	  console.log('email: ' + email);
	  console.log('after getting email: ');
	  res.view('page/question/edit/question_edit');
  },
  answer_edit: function(req, res){
	  var questionnumber = req.query.questionnumber;
	  console.log('questionnumber' + questionnumber);
	  res.view('page/answer/edit/answer_edit');
  },
  test_partial: function(req, res){
	  var questionnumber = req.query.questionnumber;
	  console.log('questionnumber' + questionnumber);
	  res.view('test/test3');
  },
  pickSession: function(req, res){
	  var email = req.param('email');
	  //var questionnumber = req.query.email;
	  //console.log('email ' + questionnumber);
	  console.log('email ' + email);
	  req.session.email = email;
	  res.view('page/session/pickSession');
  },
  showUserSession: function(req, res){
	  
	  
	  
	  res.view('session/successful_signup');
  }
  
};