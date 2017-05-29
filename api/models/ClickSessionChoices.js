/**
 * ClickSessionChoices.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	
		id: {type: 'int', primaryKey: true, autoIncrement: true },
		my_session: {
		      type: 'int',
		      required: 'true'
		    }, 
		ngo_session: {
		      type: 'int',
		      required: 'true'
		},
	    
	    username: {
	        type: 'string',
	        required: 'true',
	        unique: true // Yes unique one
		}
	}
};

