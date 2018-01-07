

var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var formSchema = mongoose.Schema({
	first:{
		type: String
	},
	last:{
		type: String
	},
	email:{
		type: String
	},
	zip:{
		type: String
	}
});


module.exports = mongoose.model('Form', formSchema);

