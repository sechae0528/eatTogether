//together.js

var express = require('express');
var router = express.Router();
var multer = require('multer');
var _ = require('lodash');
var moment = require('moment');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var async = require('async');
// var each = require('async-each-series');

var s3 = new aws.S3();


var TogetherModel = require('../model/together/togethermodel');
var ProfileModel = require('../model/profile/profilemodel');



var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'eattogether',
    acl:'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});

    },
    key: function (req, file, cb) {
      // cb(null, Date.now().toString())
      var origin = file.originalname; //abc.jpg
      var index = origin.lastIndexOf('.'); //3
      var prefix = origin.substring(0,+index); //abc
      // var suffix = origin.substring(index); //.jpg
      var uploadedName = prefix + Date.now();
      cb(null,uploadedName);
    },
  	limits : { fileSize: 10 * 1024 * 1024 }

})
});

router.get('/togetherform', function(req,res,next){
	res.render('writeform', { title : '모집글작성'});
});

// router.post('/togetherform',upload.single('picture'),function(req,res,next){
router.post('/togetherform',upload.single('together_photo'),function(req,res,next){
	//console.log('req.body=', req.body);
	//console.log('location=', newpath);

		var period = req.body.period;
		var food_cate = req.body.food_cate;
		var trip_area = req.body.trip_area;
		var people =req.body.people;
		var together_comment = req.body.together_comment;
		var pick = req.body.pick;
		var complete = req.body.complete;
		var together_photo = req.file.together_photo;
		var score = req.body.score;
		var trip_date = req.body.trip_date;
		var newpath = req.file.location;
		//var mem_no = req.session.mem_no; //원래는 이걸로 써야됨, 지금은 테스트라 num = 1로
		var mem_no = req.body.mem_no; //테스트용
		console.log(mem_no);

		ProfileModel.findOne({mem_no : mem_no},function(err,doc){
			if(err){
				console.log('err=', err);
			}
			console.log("doc=",doc);
			if(doc == null) {
				return res.json({"result":"doc is null"});
			}

		var data = {
			period : period,
			food_cate : food_cate,
			trip_area : trip_area,
			people : people,
			together_comment : together_comment,
			pick : pick,
			complete : complete,
			score : score,
			mem_name : doc.name,
			mem_no : mem_no,
			trip_date : trip_date,
			together_photo : newpath
		}

		var together = new TogetherModel(data);


		together.save({new:true}, function(err,result){
			if(err) return next(err);
			//console.log("wirte doc",result);
			//res.redirect('/together_list');
			res.json({"sucess" : 1 , "message code " : "ok", result:result});
			//console.log(doc);
		});
	})



});

router.post('/update',upload.single('together_photo'),function(req,res,next){

		//var mem_no = req.body.mem_no;
		var together_no = req.body.together_no;
		var period = req.body.period;
		var food_cate = req.body.food_cate;
		var trip_area = req.body.trip_area;
		var people =req.body.people;
		var together_comment = req.body.together_comment;
		var pick = req.body.pick;
		var complete = req.body.complete;
		var together_photo = req.file.location;
		var score = req.body.score;
		var trip_date = req.body.trip_date;
		var newpath = req.file.location;


		if(together_photo == null){
		var data = {
			period : period,
			food_cate : food_cate,
			trip_area : trip_area,
			people : people,
			together_comment : together_comment
			};
		}
		else{
			var data = {
				period : period,
				food_cate : food_cate,
				trip_area : trip_area,
				people : people,
				together_comment : together_comment,
				together_photo : newpath
				};
		}
		TogetherModel.update({together_no:together_no}, data , function(err,result) {
			if(err) return next(err);

			res.json({"success": 1, result: result});
		})
});

router.get('/read/:together_no',function(req,res,next){
	var together_no = req.params.together_no;

	TogetherModel.findOne({together_no:together_no},function(err,doc){
		console.log('doc=',doc);
		res.json({"success" : 1, result:doc});
	})
}); //모집글 상세조회

router.get('/read/:together_no/:mem_no',function(req,res,next){

	var together_no = req.params.together_no;
	var mem_no = req.params.mem_no;
	console.log(mem_no);

	TogetherModel.findOne({mem_no:mem_no,together_no:together_no},function(err,doc){
		console.log('doc=',doc);
		res.json({"success" : 1, result:doc});
	})
}); //내가 쓴글 상세보기


router.post('/remove',function(req,res,next){
	//var num = req.body.num;
	var together_no = req.body.together_no;

	TogetherModel.remove({together_no:together_no},function(err,doc){
		console.log('doc=',doc);
		if(err) return next(err);
		else{
			res.json({"success" : 1, "message": "모집글이 삭제 되었습니다."});

		}

	});
});
router.post('/history',function(req,res,next){
	//console.log(mem_no);
	var mem_no = req.body.mem_no;
	var together_no = req.body.together_no;
	ProfileModel.findOne({mem_no:mem_no},function(err,doc){
		if(err) res.json({"success" : 0});

	if(doc.history.indexOf(together_no) == -1)
	{
		ProfileModel.findOneAndUpdate({mem_no:mem_no},{$push:{history : together_no}},{new : true},function(err,doc){
			if(err) console.log('err=',err);

		var arr = [];
		async.eachSeries(doc.history,function(item,callback){
			TogetherModel.findOne({together_no : item},
			function(err,doc){
				console.log(doc);

				var obj = {
						  "together_no" : doc.together_no,
						  "trip_area": doc.trip_area,
						  "period" : doc.period,
					  	  "people" : doc.people,
					  	  "together_photo" : doc.together_photo,
					  	  "food_cate" : doc.food_cate,
					  	  "together_comment" : doc.together_comment


				};

				arr.push(obj);
				callback();
			});
		},function(err){
			if(err){
				res.json({"success" : 0});
			}
			else {
				res.json({"success" : 1, "result" : arr});
			}
		});

		});
	}
	else {
		res.json({"success" : 0 , "message":"모집글 중복"});
	}
	});

});

router.get('/history/:mem_no',function(req,res,next)
{
   console.log('req.params=',req.params); //콜솔창에 찍히고
   var mem_no = req.params.mem_no;
   ProfileModel.findOne({mem_no:mem_no},function(err,doc)
   {
   		console.log(doc);
      if(err) res.json({"success" : 0});
      var arr=[];
      async.eachSeries(doc.history, function(item, callback)
		{

            console.log('eachSeries = ' + item);
            TogetherModel.findOne({together_no:item}, function(err, doc)
		{

               var obj = {
                    "together_no" : doc.together_no,
               		"trip_area": doc.trip_area,
  				    "period" : doc.period,
                   	"people" : doc.people,
                   	"together_photo" : doc.together_photo,
                    "food_cate" : doc.food_cate,
                   	"together_comment" : doc.together_comment
               };
               arr.push(obj);
               callback();
            });
         }, function(err) {
            if(err){
            	res.json({"sucess" : 0});
            }

            // if(doc.history.indexOf() == -1)
            // {

            //    res.json({"success":1 , "message" : "히스토리가 없습니다."});
            // }
            else
            {

               res.json({"success":1, "result": arr});
            }
         });
   });
});

router.post('/history/remove',function(req,res,next){
	var mem_no = req.body.mem_no;
	var together_no = req.body.together_no;
	ProfileModel.findOne({mem_no:mem_no},function(err,doc){
		if(err) res.json({"sucee" : 0});


	ProfileModel.findOneAndUpdate({mem_no:mem_no},{$pull:{history : together_no}},{new : true},function(err,doc){
			if(err) console.log('err=',err);
		var arr = [];
		async.eachSeries(doc.history,function(item,callback){
			TogetherModel.findOne({together_no : item},function(err,doc){
				var obj = {
						 	  "together_no" : doc.together_no,
						 	  "trip_area": doc.trip_area,
						 	  "period" : doc.period,
						   	  "people" : doc.people,
						   	  "together_photo" : doc.together_photo,
						   	  "food_cate" : doc.food_cate,
						   	  "together_comment" : doc.together_comment
				};
				arr.push(obj);
				callback();
			});
		},function(err){
			if(err){
				res.json({"success" : 0 });
			}

			if(arr.indexOf() == -1){
				res.json({"sucess" : 1 , "message" : "히스토리가 삭제되었습니다."});

			}
			else {
				res.json({"success" : 1, "result" : arr});
			}
		});

		});


	});

});


// router.get('/:mem_no',function(req,res,done){
// var mem_no = req.params.mem_no;
// var docs_arr = [];
// async.waterfall([
// 	TogetherFunction1,
// 	TogetherFunction2

// 	],
// 	function(err,result){
// 		if(err) return err;
// 		var arr_docs = _.orderBy(result, ['reg_date'], ['desc']);
// 		res.json({"success": 1, result: arr_docs});
// 	});//waterfall

// 	function TogetherFunction1(callback){
// 		TogetherModel.find({}).sort('-period').exec(function(err,docs){
// 			if(err) {
// 				return next(err);
// 			// console.log('reuslt',result);
// 			}
// 			callback(null,docs);

// 		}); //find 검색조건 {}은 모든걸 찾겟다, date:-1는 역순
// 	}
// 	function TogetherFunction2(arg,callback){
// 		each(arg, function(el,next){
// 			async.parallel({
// 				'together_no' : function(callback){
// 					callback(null,el.together_no);
// 				},
// 				'period' : function(callback){
// 					callback(null,el.period);
// 				},
// 				'trip_area' : function(callback){
// 					callback(null,el.trip_area);
// 				},
// 				'people' : function(callback){
// 					callback(null,el.people);
// 				},
// 				'mem_no' : function(callback){
// 					callback(null,el.mem_no);
// 				},
// 				'together_photo' : function(callback){
// 					callback(null,el.together_photo);
// 				},
// 				'score' : function(callback){
// 					callback(null,el.score);
// 				},
// 				'reg_date' : function(callback){
// 					callback(null,el.reg_date);
// 				},
// 				'comments' : function(callback){
// 					callback(null,el.comments);
// 				},
// 				'food_cate' : function(callback){
// 					callback(null,el.food_cate);
// 				},
// 				'complete' : function(callback){
// 					callback(null,el.complete);
// 				},

// 				'pick' : function(callback){
// 					// console.log('pick',el.pick);
// 					let f=0;
// 					each(el.pick,function(a,next){
// 						console.log('el.pick',el.pick);
// 						// console.log(mem_no);
// 						console.log("a=",a)
// 						if(mem_no == a){
// 							el.complete = 1;
// 							console.log('el.complete=' ,el.complete);
// 						}
// 						next();
// 					}, function(err){
// 						console.log(err);
// 						callback(null,el.complete);
// 					});
// 				}

// 			}//pick
// 			,function(err,results){
// 				if(err) return console.log(err);
// 				console.log('results', results);
// 				docs_arr.push(results);
// 			});//async
// 			next();
// 		},function(err){
// 			console.log(err);
// 			console.log('docs_arr:',docs_arr);
// 			callback(null,docs_arr);
// 		})//each
// 	}
// });
router.get('/:mem_no', function(req, res, next){
    var mem_no = req.params.mem_no;
    async.parallel({
      together_list : function(callback){
        // find food_list
        TogetherModel.find({}).sort('-reg_date').exec(function(err, docs){
          if(err) {
            console.log(err);
          } else {
            callback(null, docs);
          }

        });
      },
      pick : function(callback){

        TogetherModel.find({}, function(err, docs){
                  if(err) {
                    console.log('err=', err);

                  } else {
                    var pickArr = [];
                    for(var i=0; i<docs.length; i++){
                      for(var j=0; j<docs[i].pick.length; j++){
                        if(docs[i].pick[j] == mem_no){
                          pickArr.push(docs[i].together_no);
                        }

                      }
                    }
                    callback(null, pickArr);
                  }
                });

      }
    },
    function(err, results){
          if(err){
            console.log('err=', err);
          } else {
              var data = {
                success: 1,
                result:results.together_list,
                pick:results.pick
              }
              res.json(data);
          }
    });
});





router.post('/pick', function(req, res, next){ //맛집 찜하기
   console.log('req.body=', req.body);
   var mem_no = req.body.mem_no;
   var together_no = req.body.together_no;

    async.parallel({
      Profilemodel : function(callback){
          ProfileModel.findOne({mem_no:mem_no}, function(err,user){
            if(err) res.json({"success" : 0});
              console.log('user=', user);
            if(user.pick_together.indexOf(together_no) == -1)
            {
            ProfileModel.findOneAndUpdate({mem_no:mem_no},{$push:{pick_together : together_no}},{new : true}, function(err, docs){

				if(err) console.log('err=', err);
                console.log('update=', docs);


            var arr = [];
            async.eachSeries(docs.pick_together, function(item, callback){
              console.log('eachSeries' + item);
            TogetherModel.findOne({together_no:item}, function(err, doc){
              console.log("doc=", doc);
            var obj = {
              "together_no" : doc.together_no,
              "trip_area": doc.trip_area,
              "period" : doc.period,
              "people" : doc.people,
              "together_photo" : doc.together_photo,
              "food_cate" : doc.food_cate,
              "together_comment" : doc.together_comment
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
                callback(null, arr);
                  }
                  });
              });
                } else {
                  const FOOD = 'NO_FOOD';
                  callback(null, FOOD)
              }

          });
      },
      Togethermodel : function(callback){
        var data = {
          pick : mem_no
        }

     TogetherModel.findOne({together_no:together_no}, function(err, doc1){
        if(err) res.json({success : 0});
        console.log('doc1=', doc1);
        if(doc1.pick.indexOf(mem_no) == -1)
        {
         TogetherModel.findOneAndUpdate({together_no:together_no},{$push:data}, function(err, doc2){
            if(err){
              res.json({success:0});
              console.log('err=', err);
            } else {
            console.log('update=', doc2);
            callback(null, "done");
            }
          });
        } else {
          //res.json({"success":0, "message":"멤버 중복"});
            const MEM = 'NO_MEM'
           callback(null, MEM);
        }
      });
    }
    },
    function(err, results){
      // results.ProfileModel = arr , results.FoodModel = 'done'
      console.log(results);
      if(results.Profilemodel=== 'NO_FOOD') {
        return res.json({success:0})
      }
      if(results.Togethermodel === 'NO_MEM') {
        return res.json({success:4})
      }
      res.json({success:1 , result : results.Profilemodel});
    });




});


router.get('/pick/:mem_no',function(req,res,next)
{

   console.log('req.params=',req.params); //콜솔창에 찍히고
   var mem_no = req.params.mem_no;
   ProfileModel.findOne({mem_no:mem_no},function(err,doc)
   {
      if(err) res.json({"success_code" : 0});
      var arr=[];
      async.eachSeries(doc.pick_together, function(item, callback)
         {
            console.log('eachSeries = ' + item);
            TogetherModel.findOne({together_no:item}, function(err, doc)

            {

            	console.log("mem_no=",mem_no);
            	console.log("doc=",doc);
               var obj = {
                  	  "together_no" : doc.together_no,
                  	  "trip_area": doc.trip_area,
                  	  "period" : doc.period,
                      "people" : doc.people,
                  	  "together_photo" : doc.together_photo,
                   	  "food_cate" : doc.food_cate,
                   	  "together_comment" : doc.together_comment
               };
               arr.push(obj);
               callback();
            });
         }, function(err) {
            if(err)
            {
				res.json({"success":0});
            }
          else
            {

            res.json({"success":1, "result": arr});

            }

         });
   });
});


router.post('/pick/remove',function(req,res,next)

{
	var mem_no = req.body.mem_no;
	var together_no = req.body.together_no;

	async.parallel({
		ProfileModelDelete : function(callback){
			// console.log('req.body=',req.body); //콜솔창에 찍히고
			ProfileModel.findOneAndUpdate({mem_no:mem_no},{$pull:{pick_together: together_no}},{new: true},function(err,doc)
			{
			   if(err) console.log('err=', err);
			   //console.log('update=',doc);
			   var arr=[];
			   async.eachSeries(doc.pick_together, function(item, callback)
			           {//no만 나옴
			              TogetherModel.findOne({together_no:item}, function(err,doc)
			              {
			                 console.log("together doc=", doc);
			                 var obj = {
			                    	  "together_no" : doc.together_no,
			                    	  "trip_area": doc.trip_area,
			                    	  "period" : doc.period,
			                      	  "people" : doc.people,
			                      	  "together_photo" : doc.together_photo,
			                      	  "food_cate" : doc.food_cate,
			                      	  "together_comment" : doc.together_comment
			                 };
			                 arr.push(obj);
			                 callback();
			              });
			           }, function(err) {
			              if( err )
			              {
			                 return res.json({"success":0});
			              } else
			              {
			              	 callback(null,arr);

			              }
			           });
			});

		},
		TogetherPickDelete : function(callback){
			TogetherModel.findOneAndUpdate({together_no:together_no},{$pull:{pick : mem_no}},{new : true},function(err,doc){
				if(err) return err;
				callback(null,doc);
			})

			}


		},
	function(err,results){
		console.log('results=',results);
		res.json({"success" : 1})
	}
	);
});


router.post('/comments',function(req,res,next){
	console.log('req.body=',req.body);
var mem_no = req.body.mem_no;
//var mem_no = req.body.mem_no;
//var title = req.body.title;+9
var comment = req.body.comment;
var together_no = req.body.together_no;
ProfileModel.findOne({mem_no:mem_no},function(err,doc){
	console.log('doc=', doc);
	if(err) return res.json({sucess:0, message:err});

	var data = {
		name : doc.name,
		comment : comment
	};
	console.log("data=",data);
	TogetherModel.findOneAndUpdate({together_no:together_no},{$push:{comments :data }},{safe : true, upsert:true, new:true},function(err,comment){
		if(err) return next(err);
		res.json({"sucess" : 0, result : comment});
	});
});

});

router.post('/matching',function(req,res,next){

		var trip_date = req.body.trip_date;
		var trip_area = req.body.trip_area;
		var food_cate = req.body.food_cate;
		console.log('req.body=', req.body);

		if(trip_area == "해운대구"){
		TogetherModel.find({
				$and : [
					{period : trip_date} ,
					{$or : [ {trip_area : "해운대구"} , {trip_area : "수영구"} , {trip_area : "기장군"} ,{food_cate : {"$in" : food_cate}}]}
				]}, function(err,docs){
			// console.log('docs=',docs);
			if(!trip_date) {
				return res.json({"sucess": 0, "message" : "날짜를 선택하세요"});
			}
			var arr = [];
			for(var i =0; i < docs.length ; i++){
				var doc = docs[i];
				// console.log('doc=', doc);

				if(doc.trip_area == "해운대구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.9;
				}
				else if(doc.trip_area == "해운대구" && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.8;
				}
				else if(doc.trip_area == "수영구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.7;
				}
				else if(doc.trip_area == "수영구"  && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.6;
				}
				else if(doc.trip_area == "기장군" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.6;
				}
				else if(doc.trip_area == "기장군" && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.5;
				}

				arr.push(doc.score);
			}//for
			arr.sort(function(a,b){ return b - a});
			console.log(arr); // [0.8, 0.5]
			//res.json({"sucess" : 1, result : docs});
			 var arr_docs = _.orderBy(docs, ['score'], ['desc']);
			 res.json({"sucess" : 1, result : arr_docs});

		});
	}
	else if(trip_area == "중구"){
		TogetherModel.find({
				$and : [
					{period : trip_date} ,
					{$or : [ {trip_area : "중구"} , {trip_area : "진구"} , {trip_area : "사상구"} ,{food_cate : {"$in" : food_cate}}]}
				]}, function(err,docs){
			// console.log('docs=',docs);
			if(!trip_date) {
				return res.json({"sucess": 0, "message" : "날짜를 선택하세요"});
			}

			var arr = [];
			for(var i =0; i < docs.length ; i++){
				var doc = docs[i];
				// console.log('doc=', doc);

				if(doc.trip_area == "중구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.9;
				}
				else if(doc.trip_area == "중구" && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.8;
				}
				else if(doc.trip_area == "진구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.7;
				}
				else if(doc.trip_area == "진구"  && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.6;
				}
				else if(doc.trip_area == "사상구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.6;
				}
				else if(doc.trip_area == "사상구" && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.5;
				}

				arr.push(doc.score);
			}//for
			arr.sort(function(a,b){ return b - a});
			console.log(arr); // [0.8, 0.5]
			//res.json({"sucess" : 1, result : docs});
			 var arr_docs = _.orderBy(docs, ['score'], ['desc']);
			 res.json({"sucess" : 1, result : arr_docs});

		});

	}
	else if(trip_area == "수영구"){
		TogetherModel.find({
				$and : [
					{period : trip_date} ,
					{$or : [ {trip_area : "수영구"} , {trip_area : "해운대구"} , {trip_area : "진구"} ,{food_cate : {"$in" : food_cate}}]}
				]}, function(err,docs){
			// console.log('docs=',docs);
			if(!trip_date) {
				return res.json({"sucess": 0, "message" : "날짜를 선택하세요"});
			}

			var arr = [];
			for(var i =0; i < docs.length ; i++){
				var doc = docs[i];
				// console.log('doc=', doc);

				if(doc.trip_area == "수영구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.9;
				}
				else if(doc.trip_area == "수영구" && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.8;
				}
				else if(doc.trip_area == "해운대구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.7;
				}
				else if(doc.trip_area == "해운대구"  && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.6;
				}
				else if(doc.trip_area == "진구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.6;
				}
				else if(doc.trip_area == "진구" && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.5;
				}

				arr.push(doc.score);
			}//for
			arr.sort(function(a,b){ return b - a});
			console.log(arr); // [0.8, 0.5]
			//res.json({"sucess" : 1, result : docs});
			 var arr_docs = _.orderBy(docs, ['score'], ['desc']);
			 res.json({"sucess" : 1, result : arr_docs});

		});
	}
	else if(trip_area == "진구"){

		TogetherModel.find({
				$and : [
					{period : trip_date} ,
					{$or : [ {trip_area : "진구"} , {trip_area : "중구"} , {trip_area : "수영구"} ,{food_cate : {"$in" : food_cate}}]}
				]}, function(err,docs){
			// console.log('docs=',docs);
			if(!trip_date) {
				return res.json({"sucess": 0, "message" : "날짜를 선택하세요"});
			}

			var arr = [];
			for(var i =0; i < docs.length ; i++){
				var doc = docs[i];
				// console.log('doc=', doc);

				if(doc.trip_area == "진구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.9;
				}
				else if(doc.trip_area == "진구" && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.8;
				}
				else if(doc.trip_area == "중구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.7;
				}
				else if(doc.trip_area == "중구"  && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.6;
				}
				else if(doc.trip_area == "수영구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.6;
				}
				else if(doc.trip_area == "수영구" && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.5;
				}

				arr.push(doc.score);
			}//for
			arr.sort(function(a,b){ return b - a});
			console.log(arr); // [0.8, 0.5]
			//res.json({"sucess" : 1, result : docs});
			 var arr_docs = _.orderBy(docs, ['score'], ['desc']);
			 res.json({"sucess" : 1, result : arr_docs});

		});
	}
	else if(trip_area == "사상구"){

		TogetherModel.find({
				$and : [
					{period : trip_date} ,
					{$or : [ {trip_area : "사상구"} , {trip_area : "진구"} , {trip_area : "중구"} ,{food_cate : {"$in" : food_cate}}]}
				]}, function(err,docs){
			// console.log('docs=',docs);
			if(!trip_date) {
				return res.json({"sucess": 0, "message" : "날짜를 선택하세요"});
			}

			var arr = [];
			for(var i =0; i < docs.length ; i++){
				var doc = docs[i];
				// console.log('doc=', doc);

				if(doc.trip_area == "사상구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.9;
				}
				else if(doc.trip_area == "사상구" && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.8;
				}
				else if(doc.trip_area == "진구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.7;
				}
				else if(doc.trip_area == "진구"  && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.6;
				}
				else if(doc.trip_area == "중구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.6;
				}
				else if(doc.trip_area == "중구" && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.5;
				}

				arr.push(doc.score);
			}//for
			arr.sort(function(a,b){ return b - a});
			console.log(arr); // [0.8, 0.5]
			//res.json({"sucess" : 1, result : docs});
			 var arr_docs = _.orderBy(docs, ['score'], ['desc']);
			 res.json({"sucess" : 1, result : arr_docs});

		});

	}
	else if(trip_area == "기장군"){
		TogetherModel.find({
				$and : [
					{period : trip_date} ,
					{$or : [ {trip_area : "기장군"} , {trip_area : "해운대구"} , {trip_area : "진구"} ,{food_cate : {"$in" : food_cate}}]}
				]}, function(err,docs){
			// console.log('docs=',docs);
			if(!trip_date) {
				return res.json({"sucess": 0, "message" : "날짜를 선택하세요"});
			}

			var arr = [];
			for(var i =0; i < docs.length ; i++){
				var doc = docs[i];
				//console.log('doc=', doc);

				if(doc.trip_area == "기장군" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.9;
				}
				else if(doc.trip_area == "기장군" && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.8;
				}
				else if(doc.trip_area == "해운대구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.7;
				}
				else if(doc.trip_area == "해운대구"  && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.6;
				}
				else if(doc.trip_area == "진구" && food_cate.indexOf(doc.food_cate) != -1){
					doc.score = doc.score + 0.6;
				}
				else if(doc.trip_area == "진구" && food_cate.indexOf(doc.food_cate) == -1){
					doc.score = doc.score + 0.5;
				}

				arr.push(doc.score);
			}//for
			arr.sort(function(a,b){ return b - a});
			console.log(arr); // [0.8, 0.5]
			//res.json({"sucess" : 1, result : docs});
			 var arr_docs = _.orderBy(docs, ['score'], ['desc']);
			 res.json({"sucess" : 1, result : arr_docs});

		});
	}

	else if(!trip_area){
		return res.json({"sucess": 0, "message" : "지역을 선택하세요"});
	}
});





module.exports = router;
