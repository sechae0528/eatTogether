// test1.js
var moment = require('moment');

var date = formatDate(new Date());
console.log('date=', date);
var date1 = new Date(date);
console.log('date=', date);

var date2 = new Date("2017-08-18");

var aaa = date1.getTime() == date2.getTime();
console.log("aaa=", aaa);


function formatDate(date){
	var y = date.getFullYear();
	var m = date.getMonth() + 1; //months는 0부터 시작해서 +1
	var d = date.getDate();
	// yyyy-MM-dd hh:mm:ss 형태
	var day = y+'-'+(m > 9 ? m : '0'+m) + '-' + (d > 9 ? d:'0'+d) ;
	return new Date(day);
}//