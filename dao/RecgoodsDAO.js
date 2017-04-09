var db = require('./database');


//商品推荐，在商品列表中查找推荐的商品；
exports.findRec = function(curpage,eachpage,func){
	db.collection("recgoods").findByPage(curpage,eachpage,{},function(data){
		db.findJoin(data.data,"goods",function(pageDate){
			data.data=pageDate;
			func(data);
		});
	});
};

exports.findAllRec = function(func){
	db.collection("recgoods").find({},function(data){
		db.findJoin(data,"goods",func);
	});
};


//找到商品后添加到推荐商品中；
exports.insertRec = function(pid,func){
	db.collection("recgoods").insert({goods:{
		$ref:"goods",
		$id:db.ObjectID(pid)
	}},func);
};

//找到后删除到推荐商品中；
exports.delRec = function(pid,func){
  db.collection("recgoods").remove({_id:db.ObjectID(pid)},func);
};
