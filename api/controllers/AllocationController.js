module.exports = {
  
  intro: function(req, res){
	  res.view('allocation/intro');
  },
  exit: function(req, res){
	  res.view('allocation/exit');
  },
  ccac: function(req, res){
	  res.view('allocation/ccac');
  },
  aac: function(req, res){
	  res.view('allocation/aac');
  },
  ccac2: function(req, res){
	  res.view('allocation/ccac2');
  },
  aac2: function(req, res){
	  res.view('allocation/aac2');
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