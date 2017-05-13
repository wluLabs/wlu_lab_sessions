/**
 * Allocate.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

		attributes: {
	  
			id: {type: 'int', primaryKey: true, autoIncrement: true, },
	
		    org: {
		      type: 'int',
		      required: 'true'
		    },
		    
		    myself: {
			      type: 'int',
			      required: 'true'
			},
		    
		    username: {
		        type: 'string',
		        required: 'true',
		        unique: true // Yes unique one
		    }	
		},
		beforeCreate : function (values, next) {
			
			if(values.org + values.myself === 15){
				next();
			}else{
				return next();
			}
			      
		}
		
};

