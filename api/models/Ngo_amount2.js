/**
 * Ngo_amount2.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  id: {type: 'int', primaryKey: true, autoIncrement: true, },
	    amount: { type: 'float', required: 'true' },
	    amount_1_30: { type: 'float', required: 'true' },
	    amount_2_30: { type: 'float', required: 'true' },
	    amount_3_30: { type: 'float', required: 'true' },
	    amount_4_30: { type: 'float', required: 'true' },
	    amount_5_30: { type: 'float', required: 'true' },
	    amount_6_30: { type: 'float', required: 'true' },
	    count_1_30: { type: 'int', required: 'true' },
	    count_2_30: { type: 'int', required: 'true' },
	    count_3_30: { type: 'int', required: 'true' },
	    count_4_30: { type: 'int', required: 'true' },
	    count_5_30: { type: 'int', required: 'true' },
	    count_6_30: { type: 'int', required: 'true' },
	    username: { type: 'string', required: 'true', unique: true }	
  }
};

