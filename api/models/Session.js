/**
 * Session.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  
	  id: {type: 'int', primaryKey: true, autoIncrement: true},
	  date: {type: 'datetime'},
	  time: {type: 'string'},
	  max: {type: 'int'  },
	  session_type: {type: 'int', defaultsTo: 1  },
	  
	  toJSON: function () {
		  var obj = this.toObject();
		  return obj;
	  }
  }
};

