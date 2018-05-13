// /test/food1.js
var FoodModel = require('../models/foodmodel');

var food61 = new FoodModel({
	food_no : 61,
	food_name : "강화삼계탕",
	main_menu : "녹다삼계탕",
	arr : "부산광역시 부산진구 부전동 142-11",
	tel : "051-808-3989",
	hours : "11:00-22:00 일 휴무",
	grade : 4.5,
	cate_id : 1,
	food_cate : "한식",
	food_price : 12000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/61강화삼계탕.PNG",
	latitude : 35.158155,
	longitude : 129.06079,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food61.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("61");
	}

});

var food62 = new FoodModel({
	food_no : 62,
	food_name : "모루식당",
	main_menu : "일본식 카레",
	arr : "부산광역시 부산진구 전포1동 680-20",
	hours : "화-목 12:00-수량소진시 break time 15:00-17:00 일월 휴무",
	grade : 4.6,
	cate_id : 4,
	food_cate : "일식",
	food_price : 11000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/62모루식당.PNG",
	latitude : 35.155989,
	longitude : 129.064007,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food62.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("62");
	}

});

var food63 = new FoodModel({
	food_no : 63,
	food_name : "가야포차선지국밥",
	main_menu : "선지국밥",
	arr : "부산 부산진구 전포동 181-1",
	tel : "051-894-6921",
	hours : "24시 영업",
	grade : 4,
	cate_id : 1,
	food_cate : "한식",
	food_price : 6500,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/63가야포차선지국밥.jpg",
	latitude : 35.160945,
	longitude : 129.065809,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food63.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("63");
	}

});

var food64 = new FoodModel({
	food_no : 64,
	food_name : "내아들밥상",
	main_menu : "한정식",
	arr : "부산광역시 부산진구 부전동 241-4",
	tel : "051-817-8877",
	hours : "24시 영업",
	grade : 4.2,
	cate_id : 1,
	food_cate : "한식",
	food_price : 7000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/64내아들밥상.PNG",
	latitude : 35.154163,
	longitude : 129.058729,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food64.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("64");
	}

});

var food65 = new FoodModel({
	food_no : 65,
	food_name : "원조할매집",
	main_menu : "낙지+밥",
	arr : "부산시 부산진구 범천1동 837-42",
	tel : "051-634-9618",
	hours : "9:00-21:00",
	grade : 3.9,
	cate_id : 1,
	food_cate : "한식",
	food_price : 6500,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/65원조할매집.PNG",
	latitude : 35.142202,
	longitude : 129.060161,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food65.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("65");
	}

});

var food66 = new FoodModel({
	food_no : 66,
	food_name : "원조개금밀면",
	main_menu : "밀면",
	arr : "부산광역시 부산진구 개금동 171-34",
	tel : "051-892-3466",
	hours : "10:00-19:40",
	grade : 3.8,
	cate_id : 5,
	food_cate : "면류",
	food_price : 5000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/66원조개금밀면.PNG",
	latitude : 35.152548,
	longitude : 129.025091,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food66.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("66");
	}

});

var food67 = new FoodModel({
	food_no : 67,
	food_name : "송정3대국밥",
	main_menu : "돼지국밥",
	arr : "부산광역시 부산진구 부전2동 서면로68번길 29",
	tel : "051-806-5722",
	hours : "24시 영업",
	grade : 3.8,
	cate_id : 1,
	food_cate : "한식",
	food_price : 6000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/67송정3대국밥.PNG",
	latitude : 35.155683,
	longitude : 129.058547,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food67.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("67");
	}

});

var food68 = new FoodModel({
	food_no : 68,
	food_name : "매떡",
	main_menu : "떡볶이",
	arr : "부산광역시 부산진구 범천1동 844-35",
	tel : "051-633-0166",
	hours : "9:00-21:00",
	grade : 3.1,
	cate_id : 1,
	food_cate : "한식",
	food_price : 3000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/68매떡.PNG",
	latitude : 35.144059,
	longitude : 129.060255,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food68.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("68");
	}

});

var food69 = new FoodModel({
	food_no : 69,
	food_name : "사미헌",
	main_menu : "물강비탕",
	arr : "부산광역시 부산진구 부전1동 474-26",
	tel : "051-819-6677",
	hours : "11:30-22:30",
	grade : 3.8,
	cate_id : 7,
	food_cate : "고기",
	food_price : 11000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/69사미헌.PNG",
	latitude : 35.160495,
	longitude : 129.055897,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food69.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("69");
	}

});

var food70 = new FoodModel({
	food_no : 70,
	food_name : "마산식당",
	main_menu : "돼지국밥",
	arr : "부산광역시 부산진구 범천1동 839-53",
	tel : "051-631-6906",
	hours : "24시 영업",
	grade : 3.9,
	cate_id : 1,
	food_cate : "한식",
	food_price : 6000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/70마산식당.PNG",
	latitude : 35.141522,
	longitude : 129.061945,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food70.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("70");
	}

});

var food71 = new FoodModel({
	food_no : 71,
	food_name : "외식1번가부산본점",
	main_menu : "앙념갈비",
	arr : "부산광역시 부산진구 부암동 123-6",
	tel : "051-816-0007",
	hours : "11:30-22:30",
	grade : 3.9,
	cate_id : 7,
	food_cate : "고기",
	food_price : 21000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/71외식1번가부산본점.PNG",
	latitude : 35.161894,
	longitude : 129.050769,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food71.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("71");
	}

});

var food72 = new FoodModel({
	food_no : 72,
	food_name : "냉수탕가든",
	main_menu : "오리불고기",
	arr : "부산시 부산진구 범천1동 837-42",
	tel : "051-897-5252",
	hours : "10:00-22:00",
	grade : 3.8,
	cate_id : 1,
	food_cate : "한식",
	food_price : 30000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/72냉수탕가든.PNG",
	latitude : 35.144382,
	longitude : 129.028511,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food72.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("72");
	}

});

var food73 = new FoodModel({
	food_no : 73,
	food_name : "정동진해물탕",
	main_menu : "해물찜",
	arr : "부산 부산진구 부전동 406-14",
	tel : "051-809-8208",
	hours : "화-일 11:00~23:00 월 휴무",
	grade : 3.9,
	cate_id : 1,
	food_cate : "한식",
	food_price : 40000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/73정동진해물탕.PNG",
	latitude : 35.160433,
	longitude : 129.055359,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food73.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("73");
	}

});

var food74 = new FoodModel({
	food_no : 74,
	food_name : "서면우마이도",
	main_menu : "짜릿하게 매운 라멘",
	arr : "부산광역시 부산진구 부전동 256-7",
	tel : "051-817-8785",
	hours : "월-금 11:30-15:00, 16:30-22:00 토,일 휴무",
	grade : 4.3,
	cate_id : 5,
	food_cate : "면류",
	food_price : 8000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/74서면우마이도.PNG",
	latitude : 35.156585,
	longitude : 129.05856,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food74.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("74");
	}

});

var food75 = new FoodModel({
	food_no : 75,
	food_name : "농부핏자",
	main_menu : "프란조 디 콘타디노",
	arr : "부산광역시 부산진구 부전2동 신천대로50번길 72",
	tel : "051-818-8858",
	hours : "11:30-22:30",
	grade : 3.7,
	cate_id : 2,
	food_cate : "양식",
	food_price : 18000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/75농부핏자.PNG",
	latitude : 35.15389,
	longitude : 129.060239,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food75.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("75");
	}

});

var food76 = new FoodModel({
	food_no : 76,
	food_name : "컨트리맨즈",
	main_menu : "바비큐",
	arr : "부산시 부산진구 동천로 66",
	tel : "070-7313-4348",
	hours : "평일 11:00-23:00, 주말 11:30-24:00",
	grade : 3.9,
	cate_id : 2,
	food_cate : "양식",
	food_price : 18000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/76컨트리맨즈.PNG",
	latitude : 35.154646,
	longitude : 129.062611,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food76.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("76");
	}

});

var food77 = new FoodModel({
	food_no : 77,
	food_name : "어쭈",
	main_menu : "조개찜",
	arr : "부산시 부산진구 부전동 233-6",
	tel : "051-803-5244",
	hours : "11:30-01:00",
	grade : 3.8,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 75000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/77어쭈.PNG",
	latitude : 35.153105,
	longitude : 129.058113,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food77.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("77");
	}

});

var food78 = new FoodModel({
	food_no : 78,
	food_name : "블랙업커피",
	main_menu : "브루잉커피",
	arr : "부산시 부산진구 부전동 168-152",
	tel : "051-806-4952",
	hours : "10:00-23:00",
	grade : 4.6,
	cate_id : 6,
	food_cate : "디저트",
	food_price : 4500,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/78블랙업커피.PNG",
	latitude : 35.156058,
	longitude : 129.060001,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food78.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("78");
	}

});

var food79 = new FoodModel({
	food_no : 79,
	food_name : "도쿄맨션",
	main_menu : "모자이크초밥",
	arr : "부산시 부산진구 전포동 685-10",
	tel : "051-804-8516",
	hours : "11:30-23:00",
	grade : 4,
	cate_id : 4,
	food_cate : "일식",
	food_price : 18000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/79도쿄맨션.PNG",
	latitude : 35.155996,
	longitude : 129.064034,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food79.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("79");
	}

});

var food80 = new FoodModel({
	food_no : 80,
	food_name : "마마돈",
	main_menu : "사케동",
	arr : "부산시 부산진구 전포동 685-1",
	tel : "051-996-3355",
	hours : "11:00-22:00",
	grade : 3.2,
	cate_id : 4,
	food_cate : "일식",
	food_price : 10500,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/80마마돈.PNG",
	latitude : 35.155046,
	longitude : 129.064166,
	pick : 0,
	trip_area : "진구",
	area_id : 4
});

food80.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("80");
	}

});
