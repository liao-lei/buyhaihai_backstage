//  ./当前文件夹；引入database模块；
var db=require("./database");


// 显示所有商品
exports.showsall=function(curpage,eachpage,func){
   db.collection("goods").findByPage(curpage,eachpage,{},func);
};

// 增加商品
exports.addgoods = function(name,price,yprice,main_img,datail_img,func){
  db.collection("goods").insert({
      name:name,
      price:price,
      yprice:yprice,
      main_img:main_img,
      datail_img:datail_img
  },func);
};

//删除商品；
exports.delgoods = function(_id,func){
  db.collection("goods").remove({_id:db.ObjectID(_id)},func);
};

//修改商品；
exports.updategoods=function(_id,name,price,yprice,main_img,datail_img,func){
    db.collection("goods").update({_id:db.ObjectID(_id)},{$set:{name:name,price:price,yprice:yprice,main_img:main_img,datail_img:datail_img}},func);
};

//查找商品；
exports.findgoods=function(Regexp1,func){
    db.collection("goods").find({name:{$regex:Regexp1}},func);
};
//查找商品id；
exports.findgoodsid=function(_id,func){
    db.collection("goods").find({_id:db.ObjectID(_id)},func);
};
