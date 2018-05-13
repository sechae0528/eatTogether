//test3.js
var async = require('async');
router.get('/together_haeundae',function(req,res,next){
	async.waterfall([
		//firstFunction,
		secondFunction
		], function(err,result){
			if(err) return next(err);
			//console.log('result=',result);
			res.json({result:result});
		});
	});
function firstFunction(callback){
	router.post('/together_haeundae',function(req,res,next){
		var regdate = req.body.regdate;
		callback(null,regdate);
	})
}
function secondFunction(arg1,callback){

	arg1 = moment().format('YYYY-MM-DD')
	TogetherModel.find({
			$and : [
				{regdate : arg1} ,
				{$or : [ {trip_area : "해운대구"} , {trip_area : "수영구"} , {trip_area : "기장"}]}

			]}).sort('-complete').exec(function(err,docs){
		var arr = [];
		for(var i =0; i < docs.length ; i++){

			if(docs[i].trip_area == "해운대구"){
				docs[i].complete = docs[i].complete + 0.8;
			}
			else if(docs[i].trip_area == "수영구"){
				docs[i].complete = docs[i].complete + 0.6;
			}
			else if(docs[i].trip_area == "기장"){
				docs[i].complete = docs[i].complete + 0.5;
			}
		arr.push(docs[i].complete);
	}
	arr.sort(function(a,b){return b - a});
	console.log(arr);
	console.log('docs=',docs);
	var arr_docs = _.orderBy(docs, ['complete'], ['desc']);
	console.log('arr_docs=',arr_docs);
	res.render('together_list',{title:"맛집 리스트",docs:arr_docs});
	});
	 //find 검색조건 {}은 모든걸 찾겟다, date:-1는 역순
};
