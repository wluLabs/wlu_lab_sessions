/**
 * isAuthorized
 *
 * @description :: Policy to check if user is authorized with JSON web token
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
 */

var adminList = [
  'funston.greg@gmail.com',
  'laguo@wlu.ca',
  'lberger2@wlu.ca',
  'bradleyruffle@gmail.com'
];

module.exports = function (req, res, next) {
  var token;
  //sails.log.info('isAuthorized');
  if (req.headers && req.headers.authorization) {
	  //sails.log.info(req.headers.authorization);
    var parts = req.headers.authorization.split(' ');
    if (parts.length == 2) {
      var scheme = parts[0],
        credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    } else {
      return res.json(401, {err: 'Format is Authorization: Bearer [token]'});
    }
  } else if (req.session.token) {
	  //sails.log.info(req.session.token);
    token = req.session.token;
    // We delete the token from param to not mess with blueprints
    delete req.query.token;
  } else {
	  //sails.log.info('request path: ' + req.path);
	  req.session.requesting_page = req.path;
    return res.view('page/login');
  }

  jwToken.verify(token, function (err, token) {
	req.token = token; // This is the decrypted token or the payload you provided
	//sails.log.info(adminList);
	//sails.log.info('username' + req.session.username);
	//sails.log.info('test if username is admin' + adminList.includes(req.session.username));
    if (err) return res.view('page/login');
    //sails.log.info('checking token');
    if(req.options.controller === 'admin' &&
    		adminList.includes(req.session.username)
    ){
    	sails.log.info('controller is admin');
    	sails.log.info('logged user in as admin ' + req.session.username);
    	next();
    }else if(req.options.controller === 'admin' &&
    		!adminList.includes(req.session.username)){
    	sails.log.info('controller is admin');
    	sails.log.info('logged user rejected as admin ' + req.session.username);
    	res.view('403');
    }
    else{
    	sails.log.info('logged in as regular user ' + req.session.username + ' for page ' + req.path);
    	next();
    }
  });
};