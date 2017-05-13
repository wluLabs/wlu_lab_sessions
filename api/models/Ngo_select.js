/**
 * Ngo_select.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
		id: {type: 'int', primaryKey: true, autoIncrement: true },
		select_type_name: {type: 'string',required: 'true'}  
  }
};

