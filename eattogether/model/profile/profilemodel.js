//foodmodel.js
var mongoose = require('mongoose');
var db = require('../db');
var Schema = mongoose.Schema;

var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(db);

var ProfileSchema = new mongoose.Schema({
		token : String,
		profile_photo: String,
		gender: String,
		birth: String,
		comment: String,
		email: String,
		name: String,
		history :[{type:Number,default:0}],
		pick_food : [{type:Number, default: 0}],
		pick_together :[{type:Number, default: 0}]
	});


// ProfileSchema.virtual('myregdate')
// 	.get(function(){
// 		return formatDate(this.regdate);
// 	});

ProfileSchema.plugin(autoIncrement.plugin, { model: 'Profile', field: 'mem_no', startAt:1, incrementBy: 1});

ProfileSchema.set('toJSON', { virtual : true});

function formatDate(date){
	var y = date.getFullYear();
	var m = date.getMonth() + 1; //months는 0부터 시작해서 +1
	var d = date.getDate();
	// yyyy-MM-dd hh:mm:ss 형태
	var day = y+(m > 9 ? m : '0'+m) + (d > 9 ? d:'0'+d) ;
	return day;
}//

var Profile = db.model('Profile',ProfileSchema);
module.exports = Profile;