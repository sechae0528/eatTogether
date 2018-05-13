// models/foodmodel.js
var mongoose = require('mongoose');

var db = require('./db');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var FoodSchema = new Schema({
	food_no : Number,
	food_name : String,
	main_menu : String,
	arr : String,
	tel : String,
	hours : String,
	grade : Number,
	cate_id : Number,
	food_cate : String,
	food_price : Number,
	food_photo : String,
	latitude : Number,
	logitude : Number,
	pick : {type:Number, default:0},
	trip_area : String,
	area_id : Number
});

var FoodModel = db.model('FoodModel', FoodSchema);

module.exports = FoodModel;
// module.exports = {FoodSchema: FoodSchema, FoodModel: FoodModel};