/*
 * For more information on how policies work, see:
 * http://sailsjs.org/#/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

  '*': ['isAuthorized'], // Everything resctricted here
  	'UserController': {
    'create': true,
    'displayCreateUserPage': true,
    'checkUsernameAvailable': true,
    'createUser': true// We dont need authorization here, allowing public access
  },

  'AuthController': {
    '*': true // We dont need authorization here, allowing public access
  },
  'LoginController': {
	    '*': true // We dont need authorization here, allowing public access
  },
  'ConsentController': {
	    '*': true // We dont need authorization here, allowing public access
  },
  'SessionUserController': {
	    '*': true // We dont need authorization here, allowing public access
  }
  
  ,
  'PageController': {
	    'pickSession': true,
	    'showUserSession': true// We dont need authorization here, allowing public access
  },
  'WelcomeController': {
	    'home': true // We dont need authorization here, allowing public access
  },
  'SessionController':{
	  'findSessionsForUser': true
  }
};
