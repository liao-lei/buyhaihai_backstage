
var GoodsDAO=require("../dao/GoodsDAO.js");

//显示所有商品；
exports.shows=function(curpage,eachpage,func){
  GoodsDAO.showsall(curpage,eachpage,func);
};

//增加商品；
exports.add=function(name,price,yprice,main_img,datail_img,func){
    GoodsDAO.addgoods(name,price,yprice,main_img,datail_img,func);
};

//删除商品；
exports.del=function(id,func){
    GoodsDAO.delgoods(id,func);
};

//修改商品；
exports.update=function(_id,name,price,yprice,main_img,datail_img,func){
    GoodsDAO.updategoods(_id,name,price,yprice,main_img,datail_img,func);
};

//查找商品；
exports.lookup=function(Regexp1,func){
    GoodsDAO.findgoods(Regexp1,func);
};
//查找商品ID；
exports.lookupid=function(_id,func){
    GoodsDAO.findgoodsid(_id,func);
};
