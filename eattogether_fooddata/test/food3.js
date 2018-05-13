// food3.js
var FoodModel = require('../models/foodmodel');

var food41 = new FoodModel({

	food_no : 41,
	food_name : "닭발의지존",
	main_menu : "닭발",
	arr : "부산광역시 수영구 광안동 1059-5",
	tel : "051-865-8449",
	hours : "16:00-24:00",
	grade : 4.2,
	cate_id : 7,
	food_cate : "고기",
	food_price : 10000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/41닭발의 지존.jpg",
	latitude : 35.1581550,
	longitude : 129.0607900,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food41.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("41");
	}

});

var food42 = new FoodModel({

	food_no : 42,
	food_name : "둔내막국수",
	main_menu : "메밀막국수",
	arr : "부산광역시 수영구 수영동 447-18",
	tel : " 051-751-0097",
	hours : "11:30-20:00 일 휴무",
	grade : 4.5,
	cate_id : 5,
	food_cate : "면류",
	food_price : 7000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/42둔내막국수.jpg",
	latitude : 35.1685200,
	longitude : 129.1152460,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food42.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("42");
	}

});

var food43 = new FoodModel({

	food_no : 43,
	food_name : "수영돼지국밥",
	main_menu : "돼지국밥",
	arr : "부산광역시 수영구 광안1동 117-17",
	tel : "051-758-5046",
	hours : "8:00-23:30 명절 휴무",
	grade : 3.7,
	cate_id : 1,
	food_cate : "한식",
	food_price : 6000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/43수영돼지국밥.jpg",
	latitude : 35.1617500,
	longitude : 129.1144530,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food43.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("43");
	}

});

var food44 = new FoodModel({

	food_no : 44,
	food_name : "아구가기가막혀",
	main_menu : "생아구찜",
	arr : "부산광역시 수영구 광안동 1078-13",
	tel : "051-808-3989",
	hours : "10:00-22:00",
	grade : 3.8,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 28000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/44아구가귀가막혀.jpg",
	latitude : 35.1649300,
	longitude : 129.1139020,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food44.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("44");
	}

});

var food45 = new FoodModel({

	food_no : 45,
	food_name : "청기와양곱창",
	main_menu : "특양",
	arr : "부산광역시 수영구 광안3동 50-3",
	tel : "051-754-8819",
	hours : "16:00-4:00",
	grade : 4.3,
	cate_id : 7,
	food_cate : "고기",
	food_price : 20000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/45청기와양곱창.JPG",
	latitude : 35.1674180,
	longitude : 129.1170570,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food45.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("45");
	}

});

var food46 = new FoodModel({

	food_no : 46,
	food_name : "지심정",
	main_menu : "만두전골",
	arr : "부산광역시 수영구 광안2동 남천바다로 35",
	tel : "051-756-3040",
	hours : "18:00-23:00",
	grade : 3.5,
	cate_id : 1,
	food_cate : "한식",
	food_price : 30000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/46지심정.jpg",
	latitude : 35.1485800,
	longitude : 129.1142560,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food46.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("46");
	}

});

var food47 = new FoodModel({

	food_no : 47,
	food_name : "고옥",
	main_menu : "장어덮밥",
	arr : "부산광역시 수영구 남천동 12-8",
	tel : " 051-622-1638",
	hours : " 11:30~15:00, 17:00~21:00 월 휴무",
	grade : 3.8,
	cate_id : 4,
	food_cate : "일식",
	food_price : 25000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/47고옥.jpg",
	latitude : 35.1436080,
	longitude : 129.1097230,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food47.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("47");
	}

});

var food48 = new FoodModel({

	food_no : 48,
	food_name : "라벨라치타",
	main_menu : "티라미수",
	arr : "부산광역시 수영구 광안2동 광남로94번길 8",
	tel : " 051-711-0010",
	hours : "11:30-23:00",
	grade : 4.1,
	cate_id : 2,
	food_cate : "양식",
	food_price : 7000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/48라벨라치타.jpg",
	latitude : 35.1500880,
	longitude : 129.1148680,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food48.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("48");
	}

});

var food49 = new FoodModel({

	food_no : 49,
	food_name : "마이쿠",
	main_menu : "유린기",
	arr : "부산광역시 수영구 민락동 181-154",
	tel : "051-761-0888",
	hours : "11:30-22:00",
	grade : 4.5,
	cate_id : 3,
	food_cate : "중식",
	food_price : 27000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/49마이쿠.png",
	latitude : 35.1539710,
	longitude : 129.1245350,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food49.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("49");
	}

});

var food50 = new FoodModel({

	food_no : 50,
	food_name : "디에이블",
	main_menu : "시카고 피자",
	arr : "부산 수영구 민락수변로 29",
	tel : "051-754-5759 ",
	hours : "11:00 ~ 23:00",
	grade : 5.0,
	cate_id : 2,
	food_cate : "양식",
	food_price : 20000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/50디에이블.jpg",
	latitude : 35.1531830,
	longitude : 129.1246890,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food50.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("50");
	}

});

var food51 = new FoodModel({

	food_no : 51,
	food_name : "이상재본가밀면",
	main_menu : "물밀면",
	arr : "부산광역시 수영구 남천2동 7-7",
	tel : "129.1118000,",
	hours : "11:00-22:00",
	grade : 3.6,
	cate_id : 5,
	food_cate : "면류",
	food_price : 4000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/51이상재본가밀면.png",
	latitude : 35.1458830,
	longitude : 129.1118000,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food51.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("51");
	}

});

var food52 = new FoodModel({

	food_no : 52,
	food_name : "송원일식",
	main_menu : "생선회",
	arr : "부산 수영구 남천동로9번길 41",
	tel : "051-626-6100",
	hours : "12:00 ~ 22:00 명절 휴무",
	grade : 3.5,
	cate_id : 4,
	food_cate : "일식",
	food_price : 60000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/52송원일식.png",
	latitude : 35.1446360,
	longitude : 129.1108120,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food52.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("52");
	}

});

var food53 = new FoodModel({

	food_no : 53,
	food_name : "할매재첩국",
	main_menu : "재첩정식",
	arr : "부산 수영구 광남로120번길 8",
	tel : "00:00 ~ 24:00",
	hours : "00:00 ~ 24:00",
	grade : 3.0,
	cate_id : 1,
	food_cate : "한식",
	food_price : 8000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/53할매재첩국.png",
	latitude : 35.1518670,
	longitude : 129.1163870,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food53.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("53");
	}

});

var food54 = new FoodModel({

	food_no : 54,
	food_name : "바빈스커피",
	main_menu : "초코뺑",
	arr : "부산 수영구 광안해변로279번길 1",
	tel : "051-755-0672",
	hours : "10:00-24:00",
	grade : 4.0,
	cate_id : 6,
	food_cate : "디저트",
	food_price : 5500,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/54바빈스커피.png",
	latitude : 35.1561340,
	longitude : 129.1243100,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food54.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("54");
	}

});

var food55 = new FoodModel({

	food_no : 55,
	food_name : "대률훠궈",
	main_menu : "양고기 훠궈",
	arr : "부산 수영구 민락동 181-36",
	tel : "051-752-4849",
	hours : "17:00-02:00",
	grade : 4.1,
	cate_id : "중식",
	food_cate : "3",
	food_price : 18000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/55대률훠궈.png",
	latitude : 35.1561950,
	longitude : 129.1248500,
	pick : 0,
	trip_area : "수영구",
	area_id : 3


});

food55.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("55");
	}

});
var food56 = new FoodModel({

	food_no : 56,
	food_name : "류귀영눈꽃팥빙수",
	main_menu : "눈꽃팥빙수",
	arr : "수영구 망미동 827-13",
	tel : "051-341-4241",
	hours : "11:00-21:00 일 휴무",
	grade : 4.0,
	cate_id : 6,
	food_cate : "디저트",
	food_price : 3000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/56류귀영눈꽃팥빙수.jpeg",
	latitude : 35.1738110,
	longitude : 129.1003440,
	pick : 0,
	trip_area : "수영구",
	area_id : 3


});

food56.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("56");
	}

});
var food57 = new FoodModel({

	food_no : 57,
	food_name : "호우111",
	main_menu : "양꼬치",
	arr : "부산 수영구 무학로49번길 111 ",
	tel : "051-761-0111",
	hours : "17:00-02:00",
	grade : 5.0,
	cate_id : 7,
	food_cate : "고기",
	food_price : 11000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/57호우111.png",
	latitude : 35.1659320,
	longitude : 129.1176100,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food57.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("57");
	}

});
var food58 = new FoodModel({

	food_no : 58,
	food_name : "대독장",
	main_menu : "김치찌개정식",
	arr : "부산광역시 수영구 광안3동 망미번영로38번길 107",
	tel : "051-753-6466",
	hours : "09:30-22:00",
	grade : 4.0,
	cate_id : 1,
	food_cate : "한식",
	food_price : 6500,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/58대독장.jpg",
	latitude : 35.1561950,
	longitude : 129.1248500,
	pick : 0,
	trip_area : "수영구",
	area_id : 3
});

food58.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("58");
	}

});
var food59 = new FoodModel({

	food_no : 59,
	food_name : "깡통집",
	main_menu : "소금구이(깍두기삼겹/목살)",
	arr : "부산광역시 수영구 광안1동 125-13",
	tel : "051-757-6509",
	hours : "11:00-22:00 일 휴무",
	grade : 4.5,
	cate_id : 7,
	food_cate : "고기",
	food_price : 8000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/59깡통집.png",
	latitude : 35.1612900,
	longitude : 129.1177490,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food59.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("59");
	}

});
var food60 = new FoodModel({

	food_no : 60,
	food_name : "동해바다",
	main_menu : "해물찜",
	arr : "부산광역시 수영구 대연3동 유엔로 208",
	tel : "051-624-7789",
	hours : "11:30-21:45",
	grade : 3.4,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 40000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/60동해바다.png",
	latitude : 35.1298980,
	longitude : 129.0990960,
	pick : 0,
	trip_area : "수영구",
	area_id : 3

});

food60.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("60");
	}

});