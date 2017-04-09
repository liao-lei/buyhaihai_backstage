var LimitgoodsDAO = require("../dao/LimitgoodsDAO");

//商品两元限购，在商品列表中查找限购的商品；
exports.showsLimit = function(func){
	LimitgoodsDAO.findLimit(func);
};

//找到后添加到限购商品中；
exports.addLimit = function(pid,func){
	LimitgoodsDAO.insertLimit(pid,func);
};


//找到后删除到限购商品；
exports.removeLimit = function(pid,func){
	LimitgoodsDAO.delLimit(pid,func);
};
