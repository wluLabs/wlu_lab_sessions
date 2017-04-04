/**
 * isAuthorized
 *
 * @description :: Policy to check if user is authorized with JSON web token
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
 */

module.exports = function (req, res, next) {
  var token;
  console.log('isAuthorized');
  if (req.headers && req.headers.authorization) {
	  //console.log(req.headers.authorization);
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
	  //console.log(req.session.token);
    token = req.session.token;
    // We delete the token from param to not mess with blueprints
    delete req.query.token;
  } else {
	  //console.log('request path: ' + req.path);
	  req.session.requesting_page = req.path;
    return res.view('page/login');
  }

  jwToken.verify(token, function (err, token) {
    if (err) return res.json(401, {err: 'Invalid Token!'});
    req.token = token; // This is the decrypted token or the payload you provided
    next();
  });
};