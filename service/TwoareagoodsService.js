var TwoareagoodsDAO = require("../dao/TwoareagoodsDAO");

//商品推荐，在商品列表中查找推荐的商品；
exports.showsTwo = function(func){
	TwoareagoodsDAO.findTwo(func);
};

//找到后添加到推荐商品中；
exports.addTwo = function(pid,func){
	TwoareagoodsDAO.insertTwo(pid,func);
};


//找到后删除到推荐商品中；
exports.removeTwo = function(pid,func){
	TwoareagoodsDAO.delTwo(pid,func);
};
