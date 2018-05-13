// food2.js
var FoodModel = require('../models/foodmodel');

var food21 = new FoodModel({

	food_no : 21,
	food_name : "뚱보집",
	main_menu : "보쌈",
	arr : "부산광역시 중구 중앙동1가 21",
	tel : "051-246-7466",
	hours : "11:00-22:30 넷째주 일 휴무",
	grade : 4.1,
	cate_id : 7,
	food_cate : "고기",
	food_price : 12000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/21뚱보집.jpg",
	latitude : 35.100721,
	longitude : 129.035914,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food21.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("21");
	}

});

var food22 = new FoodModel({

	food_no : 22,
	food_name : "할매 가야밀면",
	main_menu : "물밀면",
	arr : "부산시 중구 남포동2가 17-1",
	tel : "051-246-3314",
	hours : "10:31-21:30",
	grade : 3.8,
	cate_id : 5,
	food_cate : "면류",
	food_price : 5000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/22할매가야밀면.jpg",
	latitude : 35.098932,
	longitude : 129.031245,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food22.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("22");
	}

});

var food23 = new FoodModel({

	food_no : 23,
	food_name : "백화양곱창",
	main_menu : "양곱창",
	arr : "부산시 중구 남포동6가 32",
	tel : "051-245-0105",
	hours : "09:00-22:00 첫째 셋째 일 휴무",
	grade : 2.9,
	cate_id : 7,
	food_cate : "고기",
	food_price : 25000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/23백화양곱창.jpg",
	latitude : 35.096937,
	longitude : 129.027023,
	pick : 0,
	trip_area : "중구",
	area_id : 2


});

food23.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("23");
	}

});

var food24 = new FoodModel({

	food_no : 24,
	food_name : "원조부산족발",
	main_menu : "족발",
	arr : "부산시 중구 부평동1가 35-5",
	tel : "051-235-5359",
	hours : "09:00-22:00",
	grade : 3.4,
	cate_id : 7,
	food_cate : "고기",
	food_price : 30000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/24원조부산족발.jpg",
	latitude : 35.099617,
	longitude : 129.027083,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food24.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("24");
	}

});

var food25 = new FoodModel({


	food_no : 25,
	food_name : "부산명물횟집",
	main_menu : "광어회",
	arr : "부산광역시 중구 남포동4가 38",
	tel : "051-245-5359",
	hours : "09:00-22:00",
	grade : 4.1,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 85000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/25부산명물횟집.jpg",
	latitude : 35.0971280,
	longitude : 129.0312370,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food25.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("25");
	}

});

var food26 = new FoodModel({

	food_no : 26,
	food_name : "카마타케 제면소",
	main_menu : "에비텐우동",
	arr : "부산광역시 중구 남포동3가 2-3",
	tel : "051-248-0859",
	hours : "11:30-22:00",
	grade : 3.9,
	cate_id : 5,
	food_cate : "면류",
	food_price : 8000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/26카마타케제면소.jpg",
	latitude : 35.0989910,
	longitude : 129.0285910,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food26.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("26");
	}

});

var food27 = new FoodModel({

	food_no : 27,
	food_name : "18번완당집",
	main_menu : "완당",
	arr : "부산시 중구 남포동3가 1 B1F",
	tel : "051-245-0018",
	hours : "10:30-22:00",
	grade : 2.0,
	cate_id : 1,
	food_cate : "한식",
	food_price : 6500,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/27 18번완당집.jpg",
	latitude : 35.0989480,
	longitude : 129.0292210,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food27.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("27");
	}

});

var food28 = new FoodModel({

	food_no : 28,
	food_name : "서울깍두기",
	main_menu : "설렁탕",
	arr : "부산시 중구 남포동2가 11",
	tel : "051-245-3950",
	hours : "07:00-21:30",
	grade : 4.7,
	cate_id : 1,
	food_cate : "한식",
	food_price : 10000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/28서울깍두기.jpg",
	latitude : 35.0985310,
	longitude : 129.0324240,
	pick : 0,
	trip_area : "중구",
	area_id : 2


});

food28.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("28");
	}

});

var food29 = new FoodModel({

	food_no : 29,
	food_name : "동화반점",
	main_menu : "짜장면",
	arr : "부산시 중구 보수동2가 73-8",
	tel : "051-253-6661",
	hours : "11:00-21:00",
	grade : 5.0,
	cate_id : 3,
	food_cate : "중식",
	food_price : 4500,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/29동화반점.jpg",
	latitude : 35.1057930,
	longitude : 129.0234680,
	pick : 0,
	trip_area : "중구",
	area_id : 2


});

food29.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("29");
	}

});

var food30 = new FoodModel({

	food_no : 30,
	food_name : "하이도죠",
	main_menu : "일본식덮밥",
	arr : "부산광역시 중구 광복동1가 30-3",
	tel : "051-248-8825",
	hours : "11:00-22:00",
	grade : 2.6,
	cate_id : 4,
	food_cate : "일식",
	food_price : 9000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/30하이도죠.jpg",
	latitude : 35.0989570,
	longitude : 129.0349100,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food30.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("30");
	}

});

var food31 = new FoodModel({

	food_no : 31,
	food_name : "거인통닭",
	main_menu : "후라이드",
	arr : "부산광역시 중구 부평동2가 11-2",
	tel : "051-246-6079",
	hours : "12:00-22:00",
	grade : 3.3,
	cate_id : 7,
	food_cate : "고기",
	food_price : 17000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/31거인통닭.JPG",
	latitude : 35.1023410,
	longitude : 129.0261150,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food31.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("31");
	}

});

var food32 = new FoodModel({


	food_no : 32,
	food_name : "팬아시아",
	main_menu : "푸팟퐁가리",
	arr : "부산광역시 중구 광복동3가 1-3",
	tel : "051-254-0070",
	hours : "11:30-21:30",
	grade : 5.0,
	cate_id : 2,
	food_cate : "양식",
	food_price : 22000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/32팬아시아.jpg",
	latitude : 35.1013960,
	longitude : 129.0311240,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food32.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("32");
	}

});

var food33 = new FoodModel({

	food_no : 33,
	food_name : "돈돈 남포점",
	main_menu : "큐브스테이크정식",
	arr : "부산광역시 중구 광복동1가 31-2",
	tel : "051-247-3355",
	hours : "11:00-22:00",
	grade : 4.4,
	cate_id : 7,
	food_cate : "고기",
	food_price : 12000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/33돈돈 남포점.jpg",
	latitude : 35.0987960,
	longitude : 129.0349420,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food33.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("33");
	}

});

var food34 = new FoodModel({

	food_no : 34,
	food_name : "삼송초밥",
	main_menu : "생선회코스",
	arr : "부산광역시 중구 창선동1가 13-1",
	tel : "051-245-7870",
	hours : "09:30-21:30 일 휴무",
	grade : 4.0,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 40000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/34삼송초밥.jpg",
	latitude : 35.0996860,
	longitude : 129.0298790,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food34.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("34");
	}

});

var food35 = new FoodModel({

	food_no : 35,
	food_name : "이재모피자",
	main_menu : "이재모 크러스트피자",
	arr : "부산시 중구 신창동1가 2-1",
	tel : "051-255-9494",
	hours : "11:00-22:00 일 휴무",
	grade : 4.0,
	cate_id : 2,
	food_cate : "양식",
	food_price : 19000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/35이재모피자.jpg",
	latitude : 35.1021050,
	longitude : 129.0305990,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food35.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("35");
	}

});

var food36 = new FoodModel({


	food_no : 36,
	food_name : "구워삶기",
	main_menu : "매콤불고기 소(2~3인용)",
	arr : "부산광역시 중구 남포동2가 21-1",
	tel : "051-254-1093",
	hours : "12:00-01:00",
	grade : 4.0,
	cate_id : 7,
	food_cate : "고기",
	food_price : 18000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/36구워삶기.jpg",
	latitude : 35.0986120,
	longitude : 129.0312790,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food36.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("36");
	}

});

var food37 = new FoodModel({

	food_no : 37,
	food_name : "원산면옥",
	main_menu : "평양냉면",
	arr : "부산광역시 중구 창선동1가 37",
	tel : "051-245-2310",
	hours : "11:00-21:30",
	grade : 3.0,
	cate_id : 5,
	food_cate : "면류",
	food_price : 10000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/37원산면옥.jpg",
	latitude : 35.0995160,
	longitude : 129.0303210,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food37.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("37");
	}

});

var food38 = new FoodModel({

	food_no : 38,
	food_name : "김피라",
	main_menu : "떠먹는 퐁듀 떡볶이",
	arr : "부산광역시 중구 남포동2가 36-7",
	tel : "051-243-1311",
	hours : "11:00-22:00",
	grade : 4.0,
	cate_id : 1,
	food_cate : "한식",
	food_price : 8800,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/38김피라.jpg",
	latitude : 35.0980750,
	longitude : 129.0325320,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food38.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("38");
	}

});

var food39 = new FoodModel({

	food_no : 39,
	food_name : "본참치",
	main_menu : "스페셜참치회",
	arr : "부산광역시 중구 중앙동4가 30-9",
	tel : "051-463-3737",
	hours : "11:30-22:30 일 휴무",
	grade : 4.0,
	cate_id : 4,
	food_cate : "일식",
	food_price : 38000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/39본참치.jpg",
	latitude : 35.1045360,
	longitude : 129.0357260,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food39.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("39");
	}

});

var food40 = new FoodModel({

	food_no : 40,
	food_name : "무라커피키친",
	main_menu : "시즌메뉴",
	arr : "부산광역시 중구 보수동1가 49-2",
	tel : "070-8227-9849",
	hours : "11:00-23:00",
	grade : 3.5,
	cate_id : 6,
	food_cate : "디저트",
	food_price : 22000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/40무라커피키친.jpg",
	latitude : 35.1059650,
	longitude : 129.0247480,
	pick : 0,
	trip_area : "중구",
	area_id : 2

});

food40.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("40");
	}

});