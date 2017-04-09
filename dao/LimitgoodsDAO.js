var db = require('./database');

//商品两元限购，在商品列表中查找限购的商品；
exports.findLimit = function(func){
	db.collection("limittime").find({},function(data){
		db.findJoin(data,"goods",func);
	});
};

//找到后添加到限购商品中；
exports.insertLimit = function(pid,func){
	db.collection("limittime").insert({limittime:{
		$ref:"goods",
		$id:db.ObjectID(pid)
	}},func);
};

//找到后删除到限购商品；
exports.delLimit = function(pid,func){
  db.collection("limittime").remove({_id:db.ObjectID(pid)},func);
};
