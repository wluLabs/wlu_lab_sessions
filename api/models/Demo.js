/**
 * Demo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
  schema: true,
  
  attributes: {
	  
	id: {type: 'int', primaryKey: true, autoIncrement: true },
	gender: {type: 'string', required: 'true'},
    age : {type: 'int', required: 'true'},
    year : {type: 'int', required: 'true'},
    major: {type: 'int', required: 'true'},
    business_area : {type: 'int', required: 'true'},
    game_hours: {type: 'int', required: 'true'},
    work_ex_months: {type: 'int', required: 'true'},
    username: {
        type: 'string',
        required: 'true',
        unique: true // Yes unique one
    },

    toJSON: function () {

      return obj;
    }
  }



};

