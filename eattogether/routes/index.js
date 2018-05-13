var express = require('express');
var router = express.Router();
var multer = require('multer');
var moment = require('moment');
var _ = require('lodash');
var fb = require('fb');

/* GET home page. */
var TogetherModel = require('../model/together/togethermodel');
var AreaModel = require('../model/areacategory/areamodels');
var FoodCateModel = require('../model/foodcategory/foodcatemodel');
var ProfileModel = require('../model/profile/profilemodel');


var storage = multer.diskStorage({
		destination : function(req,file,cb){
			cb(null, './public/images');
		},
		filename :function(req, file, cb){
			var origin = file.originalname; //abc.jpg
			var index = origin.lastIndexOf('.'); //3
			var prefix = origin.substring(0,+index); //abc
			var suffix = origin.substring(index); //.jpg
			var uploadedName = prefix + Date.now() + suffix;
			cb(null,uploadedName);

		},
		limits : { fileSize: 10 * 1024 * 1024 }
}); //.jpg 다는거

var upload = multer({storage:storage});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup/facebook',function(req,res,next){//페이스북이 디비에 저장되지 않을 때(처음 페이스북 로그인 할때 )
  var FB=require('fb');
  var facebook_token = req.body.facebook_token;

  FB.setAccessToken(facebook_token);
  FB.api('me?fields=email',function(profile){
      console.log('profile=', profile);
      // 사용자 정보에 token과 profile을 저장한다.
      if(!facebook_token) res.json({"success_code" : 0});
      var data = {
         facebook_token:facebook_token,
         email:profile.email
      };
      ProfileModel.findOne({facebook_token : facebook_token},function(err,doc){
        if(doc){
          res.json({"success" : 0 , "message" : "페이스북 토큰 중복"})
        }
      else{
      var user = new ProfileModel(data);
      user.save(function(err,doc){
         console.log('result=',doc);
         if(doc){
         req.session.mem_no = doc.mem_no;
         res.json({success:1 ,result:doc});
         }
         // res.redirect('/');
         //res.json({success_code:1,result:doc});

       });
    }
   });
});
});
router.post('/save_facebook', function(req, res, next){//저장되있을때
   var token = req.body.token;
   ProfileModel.findOne({token:token},function(err,doc){
            if(err) console.log('facebook err=',err);
            console.log('loginfacebook doc=',doc);
            if(doc) {
               req.session.token = doc.token;
               res.json({success_code:1,"doc":doc});
            }
            else
               res.json({success_code:0});
         });
});




module.exports = router;

