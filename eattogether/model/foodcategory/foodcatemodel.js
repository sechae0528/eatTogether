var mongoose = require('mongoose');
var db = require('../db');
var Schema = mongoose.Schema;


var FoodCateSchema = new mongoose.Schema({
				food_cate : String,
				cate_id : Number
				});


var Foodcate = db.model('Foodcate',FoodCateSchema);
module.exports = Foodcate;
