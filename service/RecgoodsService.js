var RecgoodsDAO = require("../dao/RecgoodsDAO");

//商品推荐，在商品列表中查找推荐的商品，然后显示出来
exports.showsRec = function(curpage,eachpage,func){
	RecgoodsDAO.findRec(curpage,eachpage,func);
};

exports.showAllRec = function(func){
	RecgoodsDAO.findAllRec(func);
};

//找到后添加到推荐商品中；
exports.addRec = function(rec,func){
	for(var i=0;i<rec.length;i++){
			RecgoodsDAO.insertRec(rec[i]._id,function(){});
	}
};

//找到后删除到推荐商品中；
exports.removeRec = function(pid,func){
	RecgoodsDAO.delRec(pid,func);
};
