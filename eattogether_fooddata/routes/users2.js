// users2.js
router.post('/shoplists',function(req,res,next)//16. 관심샵 등록
{
   console.log('req.body=',req.body); //콜솔창에 찍히고
   var user_no = req.body.user_no;
   var shop_no = req.body.shop_no;
   UserModel.findOne({user_no:user_no},function(err,user)
   {
      if(err) res.json({"success_code" : 0});
      console.log('userfindOne user=',user);
      if(user.Favorite_hairshop.indexOf(shop_no) == -1)
      {
         UserModel.findOneAndUpdate({user_no:user_no},{$push:{Favorite_hairshop: shop_no}}, {new: true},function(err,docs)
         {
            if(err) console.log('err=', err);
            console.log('update=',docs);
            // res.json({"success_code":1,user:user,hair:hair}
            var arr = [];
          async.eachSeries(docs.Favorite_hairshop, function(item, callback) {//헤어샵 no만 나옴
             console.log('eachSeries' + item);
             Hairshop.findOne({shop_no:item}, function(err, shopdoc){
                console.log("shopdoc=", shopdoc);
                var obj = {
                   "shop_no": shopdoc.shop_no,
                   "shop_name": shopdoc.shop_name,
                   "address": shopdoc.address
                };
                arr.push(obj);
                callback();
             });
          }, function(err) {
          if( err ) {
            console.log('A file failed to process');
            res.json({"success_code":0});
          } else {
            console.log('All files have been processed successfully');
              console.log('arr=', arr);
            res.json({"success_code":1, "shops":arr});
          }
          });
        });
      } else {
         res.json({"success_code":0, "message":"샵 중복"});
      }
   });
});


router.post('/shoplists/del',function(req,res,next)//17. 관심샵 삭제
{
   console.log('req.body=',req.body); //콜솔창에 찍히고
   var user_no = req.body.user_no;
   var shop_no = req.body.shop_no;
   UserModel.findOneAndUpdate({user_no:user_no},{$pull:{Favorite_hairshop: shop_no}},{new: true},function(err,docs)
   {
      if(err) console.log('err=', err);
      console.log('update=',docs);
      var arr=[];
      async.eachSeries(docs.Favorite_hairshop, function(item, callback)
              {//헤어샵 no만 나옴
                 console.log('eachSeries' + item);
                 Hairshop.findOne({shop_no:item}, function(err, shopdoc)
                 {
                    console.log("shopdoc=", shopdoc);
                    var obj = {
                       "shop_no": shopdoc.shop_no,
                       "shop_name": shopdoc.shop_name,
                       "address": shopdoc.address
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



router.get('/:user_no/shoplists/list',function(req,res,next)//18. 관심샵 리스트 조회
{
   console.log('req.params=',req.params); //콜솔창에 찍히고
   var user_no = req.params.user_no;
   UserModel.findOne({user_no:user_no},function(err,user)
   {
      if(err) res.json({"success_code" : 0});
      console.log('userfindOne user=',user);
      var arr=[];
      async.eachSeries(user.Favorite_hairshop, function(item, callback)
         {//헤어샵 no만 나옴
            console.log('eachSeries' + item);
            Hairshop.findOne({shop_no:item}, function(err, shopdoc)
            {
               console.log("shopdoc=", shopdoc);
               var obj = {
                  "shop_no": shopdoc.shop_no,
                  "shop_name": shopdoc.shop_name,
                  "address": shopdoc.address
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