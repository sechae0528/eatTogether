var express = require('express');
var router = express.Router();
var multer = require('multer');
var _ = require('lodash');
var moment = require('moment');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var async = require('async');

var TogetherModel = require('../model/together/togethermodel');
var ProfileModel = require('../model/profile/profilemodel');
var FoodModel = require('../model/food/foodmodel');


// router.get('/', function(req, res, next){ //맛집 리스트 전체 조회

//   FoodModel.find({}).sort('-grade').exec(function(err, docs){
//     if(err) console.log('err=', err);
//     res.json({"success":1, result:docs});
//   })
// });

router.get('/:mem_no', function(req, res, next){
    var mem_no = req.params.mem_no;
    async.parallel({
      food_list : function(callback){
        // find food_list
        FoodModel.find({}).sort('-grade').exec(function(err, docs){
          if(err) {
            console.log(err);
          } else {
            callback(null, docs);
          }

        });
      },
      pick : function(callback){

        FoodModel.find({}, function(err, docs){
                  if(err) {
                    console.log('err=', err);

                  } else {
                    var pickArr = [];
                    for(var i=0; i<docs.length; i++){
                      for(var j=0; j<docs[i].pick.length; j++){
                        if(docs[i].pick[j] == mem_no){
                          pickArr.push(docs[i].food_no);
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
                result:results.food_list,
                pick:results.pick
              }
              res.json(data);
          }
    });
});

router.post('/', function(req, res, next){ // 맛집 지역별, 음식별 검색,조회
  console.log('req.body=', req.body);
  var food_cate = req.body.food_cate;
  var trip_area = req.body.trip_area;

  if(trip_area && food_cate == null) {
    FoodModel.find({trip_area:trip_area}).sort('-grade').exec(function(err, docs){

      res.json({"success":1, "result":docs});
    });
  } else {
    FoodModel.find({trip_area:trip_area, food_cate:{ "$in" : food_cate}}).sort('-grade').exec(function(err, docs){
      res.json({"success":1,"result":docs});
    });

  }

});

router.post('/all', function(req, res, next){ // 맛집 지역별 전체 조회
  console.log('req.body=', req.body);
  //var food_cate = req.body.food_cate;
  var trip_area = req.body.trip_area;
  var food_cate = null;


    FoodModel.find({trip_area:trip_area}).sort('-grade').exec(function(err, docs){
      res.json({"success":1, "result":docs});
    });
    });


router.get('/pick/:mem_no',function(req,res,next) //찜맛집 리스트 조회
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
                  "food_no"   : doc.food_no,
                  "food_name" : doc.food_name,
                  "main_menu" : doc.main_menu,
                  "arr" : doc.arr,
                  "tel" : doc.tel,
                  "hours" : doc.hours,
                  "grade" : doc.grade,
                  "food_cate" : doc.food_cate,
                  "food_price" : doc.food_price,
                  "food_photo" : doc.food_photo,
                  "latitude" : doc.latitude,
                  "longitude" : doc.longitude,
                  "trip_area" : doc.trip_area
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



router.post('/pick/remove',function(req,res,next)// 찜한 맛집 삭제
{
   // console.log('req.body=',req.body);
   var mem_no = req.body.mem_no;
   var food_no = req.body.food_no;

   async.parallel({
    Profilemodel : function(callback){

      ProfileModel.findOneAndUpdate({mem_no:mem_no},{$pull:{pick_food: food_no}},{new: true},function(err,docs)
      {
         if(err) console.log('err=', err);
         // console.log('update=',docs);
         var arr=[];
         async.eachSeries(docs.pick_food, function(item, callback)
         {//맛집 no만 나옴
         console.log('eachSeries' + item);
          FoodModel.findOne({food_no:item}, function(err, doc)
          {
             console.log("doc=", doc);
             var obj = {
                  "food_no" : doc.food_no,
                  "food_name" : doc.food_name,
                  "main_menu" : doc.main_menu,
                  "arr" : doc.arr,
                  "tel" : doc.tel,
                  "hours" : doc.hours,
                  "grade" : doc.grade,
                  "food_cate" : doc.food_cate,
                  "food_price" : doc.food_price,
                  "food_photo" : doc.food_photo,
                  "latitude" : doc.latitude,
                  "logitude" : doc.logitude,
                  "trip_area" : doc.trip_area
             };
             arr.push(obj);
             callback();
          });
       }, function(err) {
            if( err )
            {
               console.log('A file failed to process');
               res.json({"success":0});
            }
            else
            {

               callback(null,arr);
            }
         });
      });

    },
    FoodPickDelete : function(callback){
          FoodModel.findOneAndUpdate({food_no:food_no},{$pull:{pick : mem_no}},{new : true},function(err,doc){
            if(err) return err;
            callback(null,"done");
          })

          }

        },
      function(err,results){
        console.log('results=',results);

        res.json({"success" : 1})
      }
      );
});



router.post('/pick', function(req, res, next){ //맛집 찜하기
   console.log('req.body=', req.body);
   var mem_no = req.body.mem_no;
   var food_no = req.body.food_no;

    async.parallel({
      Profilemodel : function(callback){
          ProfileModel.findOne({mem_no:mem_no}, function(err,user){
            if(err) res.json({"success" : 0});
              console.log('user=', user);
            if(user.pick_food.indexOf(food_no) == -1)
            {
            ProfileModel.findOneAndUpdate({mem_no:mem_no},{$push:{pick_food : food_no}},{new : true}, function(err, docs){


                if(err) console.log('err=', err);
                console.log('update=', docs);


            var arr = [];
            async.eachSeries(docs.pick_food, function(item, callback){
              console.log('eachSeries' + item);
            FoodModel.findOne({food_no:item}, function(err, doc){
              console.log("doc=", doc);
            var obj = {
              "food_no"   : doc.food_no,
              "food_name" : doc.food_name,
              "main_menu" : doc.main_menu,
              "arr" : doc.arr,
              "tel" : doc.tel,
              "hours" : doc.hours,
              "grade" : doc.grade,
              "food_cate" : doc.food_cate,
              "food_price" : doc.food_price,
              "food_photo" : doc.food_photo,
              "latitude" : doc.latitude,
              "logitude" : doc.logitude,
              "trip_area" : doc.trip_area
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
                  callback(null, FOOD);
              }

          });
      },
      FoodModel : function(callback){
        var data = {
          pick : mem_no
        }

     FoodModel.findOne({food_no:food_no}, function(err, doc1){
        if(err) res.json({success : 0});
        console.log('doc1=', doc1);
        if(doc1.pick.indexOf(mem_no) == -1)
        {
          FoodModel.findOneAndUpdate({food_no:food_no},{$push:data}, function(err, doc2){
            if(err){
              res.json({success:0});
              console.log('err=', err);
            } else {
            console.log('update=', doc2);
            callback(null, "done");
            }
          });
        } else {

            const MEM = 'NO_MEM'
           callback(null, MEM);
        }
      });
    }
    },
    function(err, results){
      // results.ProfileModel = arr , results.FoodModel = 'done'
      console.log('results:',results);
      if(results.Profilemodel=== 'NO_FOOD') {
        return res.json({succes:0})
      }
      if(results.FoodModel === 'NO_MEM') {
        return res.json({succes:0})
      }
      res.json({success:1, result: results.Profilemodel});
    });




});
module.exports = router;