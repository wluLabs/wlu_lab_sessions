/**
 * Amount_tracker.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	id: {type: 'int', primaryKey: true, autoIncrement: true, },
    page_1: { type: 'boolean', defaultsTo: true},
    page_2: { type: 'boolean', defaultsTo: true },
    page_3: { type: 'boolean', defaultsTo: true},
    page_4: { type: 'boolean', defaultsTo: true},
    username: { type: 'string', required: 'true', unique: true }	
  }
};

