var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var db = require('../db');

var CommentSchema = new Schema({
	name : String,
	comment : String,
	date : {type : Date, default : Date.now}
});

var Comment = db.model('Comment', CommentSchema);

module.exports = {CommentSchema : CommentSchema, Comment : Comment};