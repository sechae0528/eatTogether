//db.js

var mongoose = require('mongoose');
var uri = 'mongodb://localhost/Project';
var options = {
	server : {poolSize : 100}
};

var db = mongoose.createConnection(uri,options);

db.once('open',function(){
	console.log('mongodb connected ok');
});

db.on('error',function(err){
	if(err) console.log('db err=', err);
});

module.exports = db;