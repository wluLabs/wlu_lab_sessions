/**
 * Page_order.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	
	id: {type: 'int', primaryKey: true, autoIncrement: true },
    page1: {
      type: 'string',
      required: 'true'
    },
    
    page2: {
        type: 'string',
        required: 'true'
    },
    
    page3: {
        type: 'string',
        required: 'true'
      },
      
      page4: {
          type: 'string',
          required: 'true'
      }
  }
};

