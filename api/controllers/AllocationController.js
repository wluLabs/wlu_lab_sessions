module.exports = {
  
  intro: function(req, res){
	  res.view('allocation/intro');
  },
  norml: function(req, res){
	  res.view('allocation/norml');
  },
  dfk: function(req, res){
	  res.view('allocation/dfk');
  }
  
};