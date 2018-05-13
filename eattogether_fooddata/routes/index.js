var express = require('express');
var router = express.Router();


/* GET home page. */
var db = require('../models/db');
require('../models/foodmodel');
var FoodModel = db.model('FoodModel');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/food_list',function(req,res,next){
// 	FoodModel.find(),function(err,docs){
// 		if(err) console.log('err=', err); //return next(err);

// 		res.json({docs:docs});
// 			}
// 		}
// 		//console.log('list docs =' , docs);
// 		// res.render('food_list',{title:"맛집 리스트",docs:docs});

// 	}); //find 검색조건 {}은 모든걸 찾겟다, date:-1는 역순
// };


router.post('/food_list/pick', function(req, res, nest){ //맛집 찜하기
	console.log('req.body=', req.body);
	var mem_no = req.body.mem_no;
	var food_no = req.body.food_no;
	ProfileModel.findOne({mem_no:mem_no}, function(err,user){
		if(err) res.json({"succee" : 0});
		console.log('user=', user);
		if(user.pick_food.indexOf(food_no) == -1)
		{
		ProfileModel.findOneAndUpdate({mem_no:mem_no},{$push:{pick_food : food_no}}, {new : true}, function(err, docs){
				if(err) console.log('err=', err);
				console.log('update=', docs);

		var arr = [];
		async.eachSeries(docs.pick_food, function(item, callback){
			console.log('eachSeries' + item);
		FoodModel.findOne({food_no:item}, function(err, doc){
			console.log("doc=", doc);
		var obj = {
			"food_no" : doc.food_no,
			"food_name": doc.food_name,
			"arr": doc.arr
					};
			arr.push(obj);
			callback();
						});
			}, function(err){
			if(err) {
				console.log('A file failed to process');
				res.json({"success":0});
			} else {
				console.log('All files have been processed successfully');
				console.log('arr=', arr);
				res.json({"success":1, "foods":arr});
					}
					});
			});
				} else {
					res.json({"success":0, "message":"음식 중복"});
			}
		});
	});

router.post('/food_list/pick/remove',function(req,res,next)// 찜한 맛집 삭제
{
   console.log('req.body=',req.body);
   var mem_no = req.body.mem_no;
   var food_no = req.body.food_no;
   ProfileModel.findOneAndUpdate({mem_no:mem_no},{$pull:{pick_food: food_no}},{new: true},function(err,docs)
   {
      if(err) console.log('err=', err);
      console.log('update=',docs);
      var arr=[];
      async.eachSeries(docs.pick_food, function(item, callback)
              {//맛집 no만 나옴
                 console.log('eachSeries' + item);
                 FoodModel.findOne({food_no:item}, function(err, doc)
                 {
                    console.log("doc=", doc);
                    var obj = {
                       "food_no" : doc.food_no,
                       "food_name": doc.food_name,
                       "arr": doc.arr
                    };
                    arr.push(obj);
                    callback();
                 });
              }, function(err) {
                 if( err )
                 {
                    console.log('A file failed to process');
                    res.json({"success_code":0});
                 } else
                 {
                    console.log('All files have been processed successfully');
                    console.log('arr=', arr);
                    res.json({"success_code":1, "shops": arr});
                 }
              });
   });
});



router.get('/food_list/pick/:mem_no',function(req,res,next) //찜맛집 리스트 조회
{
   console.log('req.params=',req.params);
   var mem_no = req.params.mem_no;
   ProfileModel.findOne({mem_no:mem_no},function(err,user)
   {
      if(err) res.json({"success_code" : 0});
      console.log('user=',user);
      var arr=[];
      async.eachSeries(user.pick_food, function(item, callback)
         {//맛집 no만 나옴
            console.log('eachSeries' + item);
            FoodModel.findOne({food_no:item}, function(err, doc)
            {
               console.log("doc=", doc);
               var obj = {
                  "food_no" : doc.food_no,
                  "food_name": doc.food_name,
                  "arr": doc.arr
               };
               arr.push(obj);
               callback();
            });
         }, function(err) {
            if( err )
            {
               console.log('A file failed to process');
               res.json({"success":0});
            } else
            {
               console.log('All files have been processed successfully');
               console.log('arr=', arr);
               res.json({"success":1, "result": arr});
            }
         });
   });
});

router.get('/food_list', function(req, res, next){
  FoodModel.find({}).sort('-grade').exec(function(err, docs){
    if(err) console.log('err=', err);
    res.json({"success":1, result:docs});
  })
});


// router.get('/food_list/1',function(req,res,next){
//   FoodModel.find({trip_area : "진구"}).sort('-grade').exec(function(err,docs){
//     if(err) console.log('err=', err); //return next(err);
//     if(docs){
//       FoodModel.find({food_cate : "일식"}, function(err,docs){
//         if(err) console.log('err=', err); //return next(err);
//         console.log('docs=', docs);
//     res.json({docs:docs});
//       })
//     }
//   });
// });

// router.get('/food_list/1',function(req,res,next){
//   FoodModel.find({trip_area : "진구"}).sort('-grade').exec(function(err,docs){
//     if(err) console.log('err=', err); //return next(err);
//     if(docs){
//       FoodModel.find({food_cate : "일식"}, function(err,docs){
//         if(err) console.log('err=', err); //return next(err);
//         console.log('docs=', docs);
//     res.json({docs:docs});
//       })
//     }
//   });
// });



router.post('/food_list', function(req, res, next){ // 맛집 지역별, 음식별 검색,조회
  console.log('req.body=', req.body);
  var food_cate = req.body.food_cate;
  var trip_area = req.body.trip_area;

  if(trip_area && food_cate == null) {
    FoodModel.find({trip_area:trip_area}).sort('-grade').exec(function(err, docs){
    	console.log("docs=", docs);
      res.json({"success":1,"result":docs});
    });
  } else {
    FoodModel.find({trip_area:trip_area, food_cate:{ "$in" : food_cate}}).sort('-grade').exec(function(err, docs){
      res.json({"success":1,"result":docs});
    });

  }

});
module.exports = router;




// router.get('/haeundae',function(req,res,next){

//    //var nowdate = new Date(day);
//    TogetherModel.find({reg_date},function(err,docs){
//       if(err) return next(err);
//       if(docs){
//          TogetherModel.find({$or : [ {trip_area : "해운대구"} , {trip_area : "수영구"} , {trip_area : "기장"}]}),function(err,docs){
//                   var arr = [];
//                   for(var i =0; i < docs.length ; i++){

//                      if(docs[i].trip_area == "해운대구"){
//                         docs[i].complete = docs[i].complete + 0.8;
//                      }
//                      else if(docs[i].trip_area == "수영구"){
//                         docs[i].complete = docs[i].complete + 0.6;
//                      }
//                      else if(docs[i].trip_area == "기장"){
//                         docs[i].complete = docs[i].complete + 0.5;
//                      }
//                   arr.push(docs[i].complete);
//                }
//                arr.sort(function(a,b){return b - a});
//                console.log(arr);
//                console.log('docs=',docs);
//                var arr_docs = _.orderBy(docs, ['complete'], ['desc']);
//                console.log('arr_docs=',arr_docs);
//                res.render('together_list',{title:"맛집 리스트",docs:arr_docs});
//                }
//             }
//       else{
//          res.json({docs:docs});

//          }

//       //res.json({docs:docs});

//    }); //find 검색조건 {}은 모든걸 찾겟다, date:-1는 역순
