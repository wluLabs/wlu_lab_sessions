/**
 * Opinion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  	id: {type: 'int', primaryKey: true, autoIncrement: true}, 
	  	username: {type: 'string', required: true },
	    question:{ type: 'int', required: true},
	    value: { type: 'int', required: true}
  }
};

