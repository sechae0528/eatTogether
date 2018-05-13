var mongoose = require('mongoose');
var db = require('../db');
var Schema = mongoose.Schema;


var AreaSchema = new mongoose.Schema({
				trip_area : String,
				area_id : Number
				});


var Area = db.model('Area',AreaSchema);
module.exports = Area;
