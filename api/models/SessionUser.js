/**
 * SessionUser.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
		
		attributes: {
			  id: {type: 'int', primaryKey: true, autoIncrement: true },
			  user_id: {model:'user'},
			  session_id: {model:'session'}
		}
		

  
};

