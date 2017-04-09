
//  ./当前文件夹；引入database模块；
var db=require("./database");


//在数据库中查找是否有相同的用户名；
exports.findByUsername=function(username,func){
    db.collection("users").find({username:username},func);
};

//注册页面，满足注册条件，将用户名和密码存入数据库；
exports.insert=function(username,pwd,phonenumber,emil,func){
    db.collection("users").insert({
        username:username,
        password:pwd,
        phonenumber:phonenumber,
        emil:emil
    },func);
};

//登陆页面查找数据库中是否由此用户名和密码；
exports.findByUsernameAndPwd=function(username,pwd,func){
    db.collection("users").find({
        username:username,
        password:pwd
    },func);
};


// ----------------------------------后台对用户信息的操作-----------------------------------------------------
//显示所有用户的信息；
exports.showsuser=function(curpage,eachpage,func){
   db.collection("users").findByPage(curpage,eachpage,{},func);
};

exports.adduser = function(username,password,phonenumber,emil,func){
  db.collection("users").insert({
      username:username,
      password:password,
      phonenumber:phonenumber,
      emil:emil,
  },func);
};

//删除用户；
exports.deluser = function(_id,func){
  db.collection("users").remove({_id:db.ObjectID(_id)},func);
};

//修改用户；(1)；
exports.updateuserid=function(_id,func){
  db.collection("users").find({_id:db.ObjectID(_id)},func);
};

//修改用户；(2)
exports.updateuser=function(_id,username,phonenumber,emil,func){
    db.collection("users").update({_id:db.ObjectID(_id)},{$set:{username:username,phonenumber:phonenumber,emil:emil}},func);
};

//查找用户；
exports.finduser=function(Regexp1,func){
    db.collection("users").find({username:{$regex:Regexp1}},func);
};
