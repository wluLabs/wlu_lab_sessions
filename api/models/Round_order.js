/**
 * Round_order.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  
	  id: {type: 'int', primaryKey: true, autoIncrement: true },
	    username: {
	        type: 'string',
	        required: 'true',
	        unique: true // Yes unique one
	    },
	    order1: {
	      type: 'string',
	      required: 'true'
	    },
	    order2: {
	      type: 'string',
	      required: 'true'
	    },
	    order2: {
	      type: 'string',
	      required: 'true'
	    },
	    order4: {
	      type: 'string',
	      required: 'true'
	    }
  	}
};

