// food2.js
var FoodModel = require('../models/foodmodel');

var food81 = new FoodModel({
	food_no : 81,
	food_name : "합천일류돼지국밥",
	main_menu : "돼지국밥",
	arr : "부산광역시 사상구 괘법동 565-6",
	tel : "051-317-2478",
	hours : "08:00-19:00",
	grade : 4.1,
	cate_id : 1,
	food_cate : "한식",
	food_price : 7000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/81.합천일류돼지국밥.jpg",
	latitude : 35.16199,
	longitude : 128.980315,
	pick : 0,
	trip_area : "사상구",
	area_id : 5
});

food81.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("81");
	}

});
var food82 = new FoodModel({
	food_no : 82,
	food_name : "최뼈다구해장국",
	main_menu : "최뼈다구해장국",
	arr : "부산광역시 사상구 괘법동 543-26",
	tel : "051-322-7577",
	hours : "24시간",
	grade : 3.9,
	cate_id : 1,
	food_cate : "한식",
	food_price : 6500,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/82.최뼈다구해장국.PNG",
	latitude : 35.162871,
	longitude : 128.986959,
	pick : 0,
	trip_area : "사상구",
	area_id : 5
});

food82.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("82");
	}

});
var food83 = new FoodModel({
	food_no : 83,
	food_name : "양산도집",
	main_menu : "민물장어구이",
	arr : "부산광역시 사상구 엄궁동 550",
	tel : "051-311-4098",
	hours : "11:30-21:30, 일요일 11:30-21:00",
	grade : 4.4,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 20000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/83.양산도집.jpg",
	latitude : 35.13079,
	longitude : 128.969095,
	pick : 0,
	trip_area : "사상구",
	area_id : 5
});

food83.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("83");
	}

});
var food84 = new FoodModel({
	food_no : 84,
	food_name : "카페섬",
	main_menu : "스트로베리와플",
	arr : "부산광역시 사상구 괘법동 546-1",
	tel : "051-314-1233",
	hours : "09:30-23:00",
	grade : 4,
	cate_id : 6,
	food_cate : "디저트",
	food_price : 13800,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/84.카페섬.jpg",
	latitude : 35.162946,
	longitude : 128.984591,
	pick : 0,
	trip_area : "사상구",
	area_id : 5
});

food84.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("84");
	}

});
var food85 = new FoodModel({
	food_no : 85,
	food_name : "궤법쭈꾸미",
	main_menu : "웰빙쭈꾸미",
	arr : "부산광역시 부산진구 부전동 142-11",
	tel : "051-323-1383",
	hours : "11:30-02:00",
	grade : 4,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 10000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/85.궤법쭈꾸미.png",
	latitude : 35.163859,
	longitude : 128.98453,
	pick : 0,
	trip_area : "사상구",
	area_id : 5
});

food85.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("85");
	}

});
var food86 = new FoodModel({
	food_no : 86,
	food_name : "아노미세",
	main_menu : "크로크무슈",
	arr : "부산광역시 사상구 주례동 74-4",
	tel : "070-4242-6552",
	hours : "평일 16:30-05:00, 주말 16:30-05:00",
	grade : 4.4,
	cate_id : 6,
	food_cate : "디저트",
	food_price : 6500,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/86.아노미세.PNG",
	latitude : 35.14966,
	longitude : 129.012297,
	pick : 0,
	trip_area : "사상구",
	area_id : 5
});

food86.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("86");
	}

});
var food87 = new FoodModel({
	food_no : 87,
	food_name : "이웃집",
	main_menu : "고래수육 소",
	arr : "부산광역시 사상구 괘법동 272-13",
	tel : "051-311-2683",
	hours : "매일 17:00-01:00, 일요일 휴무",
	grade : 4,
	cate_id : 1,
	food_cate : "한식",
	food_price : 40000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/87.이웃집.PNG",
	latitude : 35.164381,
	longitude : 128.984122,
	pick : 0,
	trip_area : "사상구",
	area_id : 5
});

food87.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("87");
	}

});
var food88 = new FoodModel({
	food_no : 88,
	food_name : "할매 재첩국",
	main_menu : "재첩국",
	arr : "부산광역시 부산진구 부전동 142-11",
	tel : "051-301-5321",
	hours : "07:00-21:00",
	grade : 4,
	cate_id : 1,
	food_cate : "한식",
	food_price : 5000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/88.할매 재첩국.PNG",
	latitude : 35.193392,
	longitude : 128.986177,
	pick : 0,
	trip_area : "사상구",
	area_id : 5
});

food88.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("88");
	}

});
var food89 = new FoodModel({
	food_no : 89,
	food_name : "사상꼬리집",
	main_menu : "통삼겹살",
	arr : "부산광역시 사상구 괘법동 522-9",
	tel : "051-323-3146",
	hours : "16:00-01:00",
	grade : 3.4,
	cate_id : 7,
	food_cate : "고기",
	food_price : 10000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/89.사상꼬리집.PNG",
	latitude : 35.193392,
	longitude : 128.986177,
	pick : 0,
	trip_area : "사상구",
	area_id : 5
});

food89.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("89");
	}

});
var food90 = new FoodModel({
	food_no : 90,
	food_name : "해물왕창칼국수",
	main_menu : "육전밀면",
	arr : "부산광역시 사상구 덕포동 416-14",
	tel : "051-939-2579",
	hours : "11:00-22:00",
	grade : 3.5,
	cate_id : 5,
	food_cate : "면류",
	food_price : 5000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/90.해물왕창칼국수.PNG",
	latitude : 35.172689,
	longitude : 128.983781,
	pick : 0,
	trip_area : "사상구",
	area_id : 5
});

food90.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("90");
	}

});
var food91 = new FoodModel({
	food_no : 91,
	food_name : "원조짚불곰장어기장외가집",
	main_menu : "짚불곰장어(1인분)",
	arr : "부산광역시 기장군 기장읍 시랑리 550",
	tel : "051-721-7098",
	hours : "10:00-21:30",
	grade : 3.5,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 24000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/91.원조짚불곰장어기장외가집.PNG",
	latitude : 35.184807,
	longitude : 129.212105,
	pick : 0,
	trip_area : "기장군",
	area_id : 6
});

food91.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("91");
	}

});
var food92 = new FoodModel({
	food_no : 92,
	food_name : "흙시루",
	main_menu : "흙시루 밥상",
	arr : "부산광역시 기장군 기장읍 교리 47",
	tel : "051-722-1377",
	hours : "11:30-22:00",
	grade : 3.7,
	cate_id : 1,
	food_cate : "고기",
	food_price : 15000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/92.흙시루.PNG",
	latitude : 35.256893,
	longitude : 129.21648,
	pick : 0,
	trip_area : "기장군",
	area_id : 6
});

food92.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("92");
	}

});
var food93 = new FoodModel({
	food_no : 93,
	food_name : "무진장횟집",
	main_menu : "붕장어(아나고)",
	arr : "부산광역시 부산진구 부전동 142-11",
	tel : "051-721-2956",
	hours : "11:00-21:30",
	grade : 4.1,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 45000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/93.무진장횟집.PNG",
	latitude : 35.216991,
	longitude : 129.22612,
	pick : 0,
	trip_area : "기장군",
	area_id : 6
});

food93.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("93");
	}

});
var food94 = new FoodModel({
	food_no : 94,
	food_name : "웨이브온커피",
	main_menu : "아메리카노",
	arr : "부산광역시 기장군 장안읍 월내리 553",
	tel : "051-727-1660",
	hours : "11:00-24:00",
	grade : 4.5,
	cate_id : 6,
	food_cate : "디저트",
	food_price : 5500,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/94.웨이브온커피.PNG",
	latitude : 35.322246,
	longitude : 129.26957,
	pick : 0,
	trip_area : "기장군",
	area_id : 6
});

food94.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("94");
	}

});
var food95 = new FoodModel({
	food_no : 95,
	food_name : "장씨해녀집",
	main_menu : "세트1(조개찜+해산물+막회)",
	arr : "부산광역시 기장군 기장읍 연화리 148-1",
	tel : "051-721-2425",
	hours : "10:00-21:00",
	grade : 4.5,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 40000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/95.장씨해녀집.PNG",
	latitude : 35.218067,
	longitude : 129.227391,
	pick : 0,
	trip_area : "기장군",
	area_id : 6
});

food95.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("95");
	}

});
var food96 = new FoodModel({
	food_no : 96,
	food_name : "풍원장",
	main_menu : "보쌈정식",
	arr : "부산광역시 기장군 기장읍 시랑리 108-6",
	tel : "051-721-7718",
	hours : "11:00-21:00",
	grade : 4.5,
	cate_id : 1,
	food_cate : "한식",
	food_price : 15000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/96.풍원장.PNG",
	latitude : 35.197531,
	longitude : 129.223122,
	pick : 0,
	trip_area : "기장군",
	area_id : 6
});

food96.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("96");
	}

});
var food97 = new FoodModel({
	food_no : 97,
	food_name : "금관한우",
	main_menu : "금관한우정식",
	arr : "부산광역시 기장군 기장읍 내리 346-5",
	tel : "051-988-8000",
	hours : "11:00-22:00",
	grade : 3.5,
	cate_id : 1,
	food_cate : "한식",
	food_price : 15000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/97.금관한우.PNG",
	latitude : 35.20867,
	longitude : 129.20662,
	pick : 0,
	trip_area : "기장군",
	area_id : 6
});

food97.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("97");
	}

});
var food98 = new FoodModel({
	food_no : 98,
	food_name : "카페로쏘",
	main_menu : "아메리카노(hot)",
	arr : "부산광역시 기장군 기장읍 죽성리 411",
	tel : "051-721-6788",
	hours : "11:00-22:00",
	grade : 3.9,
	cate_id : 6,
	food_cate : "디저트",
	food_price : 4500,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/98.카페로쏘.PNG",
	latitude : 35.232724,
	longitude : 129.244094,
	pick : 0,
	trip_area : "기장군",
	area_id : 6
});

food98.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("98");
	}

});
var food99 = new FoodModel({
	food_no : 99,
	food_name : "구르메집",
	main_menu : "꼬꼬뱅화이타(사전주문)",
	arr : "부산광역시 기장군 일광면 학리 270",
	tel : "051-721-1231",
	hours : "12:00-21:00",
	grade : 3.4,
	cate_id : 2,
	food_cate : "양식",
	food_price : 35000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/99.구르메집.PNG",
	latitude : 35.258905,
	longitude : 129.243061,
	pick : 0,
	trip_area : "기장군",
	area_id : 6
});

food99.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("99");
	}

});
var food100 = new FoodModel({
	food_no : 100,
	food_name : "호타루",
	main_menu : "호타루라멘",
	arr : "부산광역시 기장군 기장읍 동암해안길 7",
	tel : "051-724-1288",
	hours : "12:00-21:00, 월요일휴무",
	grade : 4.4,
	cate_id : 2,
	food_cate : "일식",
	food_price : 7000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/100.호타루.PNG",
	latitude : 35.195242,
	longitude : 129.221994,
	pick : 0,
	trip_area : "기장군",
	area_id : 6
});

food100.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("100");
	}

});