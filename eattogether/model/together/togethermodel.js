//foodmodel.js
var mongoose = require('mongoose');
var db = require('../db');
var Schema = mongoose.Schema;

var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(db);

var CommentSchema = require('./comment').CommentSchema;

var TogetherSchema = new mongoose.Schema({

		mem_no : Number,
		mem_name : String,
		food_cate : {type :String , default : 'null'},
		people : Number,
		together_comment : String,
		period : String,
		comments: [CommentSchema],
		reg_date : {type : Date, default : Date.now},
		trip_date :{type : String },
		trip_area : String,
		complete : {type : Number, default :0},
		score : {type : Number, default : 0},
		pick : [{type : Number, default :0}],
		together_photo : String
	});


TogetherSchema.virtual('myregdate')
	.get(function(){
		return formatDate(this.reg_date);
	});

TogetherSchema.plugin(autoIncrement.plugin, { model: 'Together', field: 'together_no', startAt:1, incrementBy: 1});

TogetherSchema.set('toJSON', { virtual : true});

function formatDate(date){
	var y = date.getFullYear();
	var m = date.getMonth() + 1; //months는 0부터 시작해서 +1
	var d = date.getDate();
	// yyyy-MM-dd hh:mm:ss 형태
	var day = y+(m > 9 ? m : '0'+m) + (d > 9 ? d:'0'+d) ;
	return day;
}//

var Together = db.model('Together',TogetherSchema);
module.exports = Together;