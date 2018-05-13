var express = require('express');
var router = express.Router();
var multer = require('multer');
var _ = require('lodash');
var moment = require('moment');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var async = require('async');
var s3 = new aws.S3();

var TogetherModel = require('../model/together/togethermodel');
var ProfileModel = require('../model/profile/profilemodel');
var FoodModel = require('../model/food/foodmodel');



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

// router.post('/', function(req, res, next){ //프로필 작성
// 	console.log('req.body=', req.body);
// 	var facebook_token = req.body.facebook_token;
// 	var gender = req.body.gender;
// 	var name = req.body.name;
// 	var birth = req.body.birth;
// 	var comment = req.body.comment;

// 	ProfileModel.findOne({facebook_token:facebook_token}, function(err,doc){
// 		if(err) console.log(err);
// 		doc.gender = gender;
// 		doc.name = name;
// 		doc.birth = birth;
// 		doc.comment = comment;

// 		doc.save(function(err){
// 			if(err) console.log(err);
// 			res.json({"result":"OK"});
// 		})
// 	});
// });
router.get('/', function(req, res, next) {
  var mem_no = req.session.mem_no;
  console.log('mem_no=',mem_no); //로그인전 user_id = undefined //로그인 후 user_id = park
  res.json({mem_no : mem_no});
});




router.post('/', upload.single('profile_photo'), function(req, res, next){ // 프로필작성
 // console.log('req.body=', req.body);
  //console.log('body=', req.file);

  var mem_no = req.body.mem_no;
  console.log("mem_no=",mem_no);
  var facebook_token = req.body.facebook_token;
  var email = req.body.email; //추가
  var newpath = req.file.location;
  var gender = req.body.gender;
  var name = req.body.name;
  var birth = req.body.birth;
  var comment = req.body.comment;
  var profile_photo = req.file.profile_photo;


   ProfileModel.findOne({mem_no:mem_no},function(err,doc){ //추가
    console.log('doc=',doc);
  //   if(err) console.log(err);
    doc.gender = gender;
    doc.name = name;
    doc.birth = birth;
    doc.comment = comment;
    doc.profile_photo = newpath;


    doc.save(function(err){
      if(err) console.log(err);
      res.json({"success":1, "result":doc});
   });
    })
  });

//나중에 이걸로 써야됨 !!

router.get('/setting/:mem_no', function(req, res, next){ //프로필 설정
  console.log('req.params=', req.params);
  var mem_no = req.params.mem_no;
  ProfileModel.findOne({mem_no:mem_no}, function(err, user){
    console.log('user=', user);
    var result = {
      "profile_photo" : user.profile_photo,
      "name" : user.name
    };
    console.log("result=", result);
    if(err) res.json({"success" : 0});
    if(user) res.json({"success":1, "result" :result});
  });
});

 router.post('/update', upload.single('profile_photo'), function(req,res, next){ //프로필 수정

   //넘어온 값들로 수정한다.
   var mem_no = req.body.mem_no;
   var newpath = req.file.location;
   var gender = req.body.gender;
   var name = req.body.name;
   var birth = req.body.birth;
   var comment = req.body.comment;
   var profile_photo = req.file.profile_photo;

 if(profile_photo ==null){
     var data = {
       gender : gender,
       name : name,
       birth : birth,
       comment : comment,
       //profile_photo : newpath
     };
 } else {
   var data = {
     gender : gender,
     name : name,
     birth : birth,
     comment : comment,
     profile_photo : newpath
   };
 }
  ProfileModel.update({mem_no:mem_no},data, function(err, doc){
    if(err) res.json({"success" : 0});
    // console.log(err);

  if(doc){
      console.log(doc);
      res.json({"success" : 1, result:doc});
    }
  });
});

router.get('/:mem_no', function(req, res, next){ //프로필 확인(조회)
  console.log('req.params=', req.params);
  var mem_no = req.params.mem_no;
  ProfileModel.findOne({mem_no:mem_no}, function(err, user){
    console.log('user=', user);
    var result = {
      "profile_photo" : user.profile_photo,
      "name" : user.name,
      "gender" : user.gender,
      "birth" : user.birth,
      "name" : user.name
    };
    console.log("result=", result);
    if(err) res.json({"success" : 0});
    if(user) res.json({"success":1, "result" : result});
  });
});

router.post('/login', function(req, res, next){ //추가

  var token =  req.body.token;
   console.log('req.body=', req.body);
   if(!token) res.json({"success=" : 0});
   var data = {
      token: token
    };

  ProfileModel.findOne({token:token},function(err,doc){
    if(doc){
      res.json({"success" : 0 , "message" : "토큰 값 중복"})
    }
  else{
   var user = new ProfileModel(data);
   user.save(function(err, doc){
    if(err) return err;

    if(doc){
      req.session.mem_no = doc.mem_no;
    res.json({"success" : 1 , result:doc});
    }

   });
 }
});
  });

module.exports = router;

