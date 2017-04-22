module.exports = {
  
  intro: function(req, res){
	  res.view('allocation/intro');
  },
  norml: function(req, res){
	  res.view('allocation/norml');
  },
  dfk: function(req, res){
	  res.view('allocation/dfk');
  },
  allocation1: function(req, res){
	  res.view('allocation/allocation1');
  },
  
  allocation2: function(req, res){
	  res.view('allocation/allocation2');
  },
  
  quiz_edit: function(req, res){
	  res.view('allocation/quiz_edit');
  },
  
  allocation4: function(req, res){
	  res.view('allocation/allocation4');
  },
	  
  table: function(req, res){
	  res.view('allocation/table');
  },
  game1: function(req, res){
	  res.view('allocation/game1');
  },
  game2: function(req, res){
	  res.view('allocation/game2');
  },
  allocate: function(req, res){
	  res.view('allocation/allocate');
  }
  
};