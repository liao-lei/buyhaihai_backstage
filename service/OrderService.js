var OrderDAO=require("../dao/OrderDAO");

//显示所有订单；
exports.shows=function(curpage,eachpage,func){
  OrderDAO.showsorder(curpage,eachpage,func);
};


//修改订单；
exports.update=function(_id,type,func){
  OrderDAO.updataorder(_id,type,func);
};
