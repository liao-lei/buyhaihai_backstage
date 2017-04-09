var db = require('./database');

//商品两元区，在商品列表中查找推荐的商品；
exports.findTwo = function(func){
	db.collection("twoarea").find({},function(data){
		db.findJoin(data,"goods",func);
	});
};

//找到后添加到推荐商品中；
exports.insertTwo = function(pid,func){
	db.collection("twoarea").insert({twoarea:{
		$ref:"goods",
		$id:db.ObjectID(pid)
	}},func);
};

//找到后删除到推荐商品中；
exports.delTwo = function(pid,func){
  db.collection("twoarea").remove({_id:db.ObjectID(pid)},func);
};
