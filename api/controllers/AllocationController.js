module.exports = {
  
  intro: function(req, res){
	  res.view('page/allocation/intro');
  },
  norml: function(req, res){
	  res.view('page/allocation/norml');
  },
  dfk: function(req, res){
	  res.view('page/allocation/dfk');
  }
  
};