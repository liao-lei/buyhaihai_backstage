//  ./当前文件夹；引入database模块；
var db=require("./database");

// 显示所有订单；
exports.showsorder=function(curpage,eachpage,func){
   db.collection("order").findByPage(curpage,eachpage,{},function(data){
     db.findJoin(data.data,"users",function(param){
       data.data=param;
       func(data);
     });
   });
};


//修改订单；
exports.updataorder=function(_id,type,func){
  db.collection("order").update({_id:db.ObjectID(_id)},{$set:{type:type}},func);
};
