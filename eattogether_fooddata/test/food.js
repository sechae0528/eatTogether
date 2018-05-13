// food1.js
var FoodModel = require('../models/foodmodel');

var food1 = new FoodModel({

	food_no : 1,
	food_name : "옵스",
	main_menu : "슈크림빵",
	arr : "부산 해운대구 중1동 1394-82",
	tel : "1588-3069",
	hours : "8:00~23:00",
	grade : 3.9,
	cate_id : 6,
	food_cate : "디저트",
	food_price : 2300,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/1.옵스.jpg",
	latitude : 35.162790,
	longitude : 129.162837,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1

});

food1.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("1");
	}

});

var food2 = new FoodModel({

	food_no : 2,
	food_name : "금수복국",
	main_menu : "은복지리탕",
	arr : "부산시 해운대구 중1동 1394-65",
	tel : "051-742-3600",
	hours : "24시간",
	grade : 4.0,
	cate_id : 1,
	food_cate : "한식",
	food_price : 12000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/2.금수복국.jpg",
	latitude : 35.162374,
	longitude : 129.164484,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food2.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("2");
	}

});

var food3 = new FoodModel({
	food_no : 3,
	food_name : "해운대소문난암소갈비집",
	main_menu : "양념갈비",
	arr : "부산시 해운대구 중1동 1225-1",
	tel : "051-746-0033",
	hours : "11:30~22:00",
	grade : 3.5,
	cate_id : 7,
	food_cate : "고기",
	food_price : 42000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/3.해운대소문난암소갈비집.jpg",
	latitude : 35.1633360,
	longitude : 129.1666060,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food3.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("3");
	}

});

var food4 = new FoodModel({
	food_no : 4,
	food_name : "윤가네신토불이보쌈",
	main_menu : "보쌈",
	arr : "부산시 해운대구 중1동 1380-4",
	tel : "051-731-1441",
	hours : "11:00~24:00",
	grade : 4.6,
	cate_id : 1,
	food_cate : "한식",
	food_price : 28000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/4.윤가네신토불이보쌈.jpg",
	latitude : 35.1627250,
	longitude : 129.1621340,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food4.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("4");
	}

});

var food5 = new FoodModel({
	food_no : 5,
	food_name : "43년원조전통할매국밥",
	main_menu : "소고기국밥",
	arr : "부산시 해운대구 우1동 612-2",
	tel : "051-731-3363",
	hours : "24시간",
	grade : 4.5,
	cate_id : 1,
	food_cate : "한식",
	food_price : 5000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/5.43년원조전통할매국밥.jpg",
	latitude : 35.1631140,
	longitude : 129.1611900,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food5.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("5");
	}

});

var food6 = new FoodModel({
	food_no : 6,
	food_name : "밀면전문점",
	main_menu : "밀면",
	arr : "부산광역시 해운대구 중1동 1226-2",
	tel : "051-743-0392",
	hours : "11:00~21:00",
	grade : 4.3,
	cate_id : 5,
	food_cate : "면류",
	food_price : 5000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/6.밀면전문점.jpg",
	latitude : 35.1634340,
	longitude : 129.1656190,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food6.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("6");
	}

});

var food7 = new FoodModel({
	food_no : 7,
	food_name : "씨네드쉐프",
	main_menu : "런치",
	arr : "부산시 해운대구 우동 1495번지 신세계백화점 5층",
	tel : "051-745-2880",
	hours : "11:00~22:00",
	grade : 4.5,
	cate_id : 2,
	food_cate : "양식",
	food_price : 35000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/7.씨네드쉐프.jpg",
	latitude : 35.1687010,
	longitude : 129.1297390,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food7.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("7");
	}

});

var food8 = new FoodModel({
	food_no : 8,
	food_name : "하가원",
	main_menu : "콩국수",
	arr : "부산시 해운대구 좌동 891",
	tel : "051-702-5511",
	hours : "평일 10:00~22:00",
	grade : 4.0,
	cate_id : 5,
	food_cate : "면류",
	food_price : 5000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/8.하가원.jpg",
	latitude : 35.1734010,
	longitude : 129.1742800,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food8.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("8");
	}

});

var food9 = new FoodModel({
	food_no : 9,
	food_name : "헬로우 스시",
	main_menu : "런치",
	arr : "부산 해운대 우동 베네시티 상가 지하 1층",
	tel : "051-746-7466",
	hours : "평일 12:00~22:00",
	grade : 3.9,
	cate_id : 4,
	food_cate : "일식",
	food_price : 39000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/9.헬로우스시.jpg",
	latitude : 35.1581970,
	longitude : 129.1506910,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1

});

food9.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("9");
	}

});

var food10 = new FoodModel({

	food_no : 10,
	food_name : "언덕위의집",
	main_menu : "안심스테이크",
	arr : "부산광역시 해운대구 중2동 1509-7",
	tel : "051-743-2212",
	hours : "평일 09:00~04:00",
	grade : 3.7,
	cate_id : 2,
	food_cate : "양식",
	food_price : 36000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/10.언덕위의집.jpg",
	latitude : 35.1582260,
	longitude : 129.1755500,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food10.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("10");
	}

});

var food11 = new FoodModel({
	food_no : 11,
	food_name : "면식가",
	main_menu : "모둠해물짬뽕",
	arr : "부산광역시 해운대구 중동 1489-4",
	tel : "051-747-4611",
	hours : "평일 11:30~21:30",
	grade : 4.0,
	cate_id : 3,
	food_cate : "중식",
	food_price : 6000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/11.면식가.jpg",
	latitude : 35.1584480,
	longitude : 129.1825210,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1

});

food11.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("11");
	}

});

var food12 = new FoodModel({
	food_no : 12,
	food_name : "상국이네 김밥",
	main_menu : "A세트",
	arr : "부산광역시 해운대구 중동 1394-42",
	tel : "051-742-9001",
	hours : "24시간",
	grade : 3.7,
	cate_id : 1,
	food_cate : "한식",
	food_price : 16000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/12.상국이네 김밥.png",
	latitude : 35.1622030,
	longitude : 129.1631360,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food12.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("12");
	}

});

var food13 = new FoodModel({
	food_no : 13,
	food_name : "선창횟집",
	main_menu : "생선회코스",
	arr : "부산광역시 해운대구 중1동 996-6",
	tel : "051-747-7470",
	hours : "평일 11:30~23:00",
	grade : 3.9,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 35000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/13.선창횟집.jpg",
	latitude : 35.1568920,
	longitude : 129.1738270,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food13.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("13");
	}

});

var food14 = new FoodModel({
	food_no : 14,
	food_name : "해오라비",
	main_menu : "핸드드립 아메리카노",
	arr : "부산시 해운대구 중동 1501-3",
	tel : "051-742-1253",
	hours : "평일 13:00 ~ 24:00",
	grade : 4.0,
	cate_id : 6,
	food_cate : "디저트",
	food_price : 6000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/14.해오라비.jpg",
	latitude : 35.1567810,
	longitude : 129.1791050,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food14.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("14");
	}

});

var food15 = new FoodModel({
	food_no : 15,
	food_name : "형제전통돼지국밥",
	main_menu : "돼지국밥",
	arr : "부산광역시 해운대구 중동 1394-238",
	tel : "051-746-8726",
	hours : "평일 06:00~24:00",
	grade : 4.1,
	cate_id : 1,
	food_cate : "한식",
	food_price : 5000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/15.형제전통돼지국밥.jpg",
	latitude : 35.1621500,
	longitude : 129.1927260,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food15.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("15");
	}

});

var food16 = new FoodModel({
	food_no : 16,
	food_name : "이름난기장산곰장어",
	main_menu : "곰장어",
	arr : "부산 해운대구 중동 1394-41",
	tel : "051-742-8201",
	hours : "평일 15:00~02:00 ",
	grade : 4.0,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 6000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/16.이름난기장산곰장어.png",
	latitude : 35.1911970,
	longitude : 129.1618880,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food16.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("16");
	}

});

var food17 = new FoodModel({
	food_no : 17,
	food_name : "해운대미포끝집",
	main_menu : "장어구이",
	arr : "부산 해운대구 중1동 994-3",
	tel : "051-746-5511",
	hours : "평일 11:00~02:00 ",
	grade : 4.6,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 40000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/17.해운대미포끝집.jpg",
	latitude : 35.1565310,
	longitude : 129.1747160,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food17.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("17");
	}

});

var food18 = new FoodModel({
	food_no : 18,
	food_name : "마린잠수함",
	main_menu : "황제찜",
	arr : "부산광역시 해운대구 우1동 1436 마린시티 카이저빌 2층",
	tel : "051-744-0199",
	hours : "평일 12:00~21:00 ",
	grade : 4.2,
	cate_id : 8,
	food_cate : "해산물",
	food_price : 70000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/18.마린잠수함.jpg",
	latitude : 35.1549750,
	longitude : 129.1461910,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food18.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("18");
	}

});

var food19 = new FoodModel({

	food_no : 19,
	food_name : "핑거스앤쳇다이닝펍",
	main_menu : "대구와 감자튀김",
	arr : "부산광역시 해운대구 우1동 747-7 더베이101 1층",
	tel : "051-726-8822",
	hours : "평일 10:00~24:00 ",
	grade : 4.0,
	cate_id : 2,
	food_cate : "양식",
	food_price : 15000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/19.핑거스앤쳇다이닝펍.JPG",
	latitude : 35.1566360,
	longitude : 129.1521390,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food19.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("19");
	}

});

var food20 = new FoodModel({
	food_no : 20,
	food_name : "해성막창",
	main_menu : "소막창",
	arr : "부산광역시 해운대구 우동 645-2",
	tel : "051-731-3113",
	hours : "평일 18:00~04:00 ",
	grade : 4.4,
	cate_id : 1,
	food_cate : "한식",
	food_price : 8000,
	food_photo : "https://s3.ap-northeast-2.amazonaws.com/eattogether/20.해성막창.jpg",
	latitude : 35.160091,
	longitude : 129.157689,
	pick : 0,
	trip_area : "해운대구",
	area_id : 1
});

food20.save(function(err){
	if(err) {
		console.log(err);
	} else{
		console.log("20");
	}

});