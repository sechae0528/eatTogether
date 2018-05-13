// foodtest2.js
var FoodModel = require('../models/foodmodel');


FoodModel.find({"food_cate":"한식"}, function(err, docs){
	if(err) console.log('err=', err);
	console.log('docs=', docs);
	// var arr = [];
	// for(var i = 0; i <docs.length; i++){
	// 	var food_cate = docs[i].food_cate;
	// 	console.log('food_cate=', food_cate);
	// 	for(var j = 0; j < food_cate.length; j++){
	// 		var data = food_cate[j];
	// 		//console.log('data=', data);
			// if(data.body == '한식'){
			// 	arr.push({boody:data.body, title:data.title});
			// }
	// 	}//for in
	// }//for out
	// console.log('arr=', arr);
	process.exit();
});