
//   ../跳出当前文件夹到dao文件夹中引入UserDAO模块；
var UserDAO=require("../dao/UserDAO");


// 表示层传过来的数据到业务层；(查找用户名是否存在)
exports.userstrue=function(username,func){
    UserDAO.findByUsername(username,func);
};


//表示层传过来的数据到业务层;(将注册页面的用户名和密码保存)
exports.register=function(username,pwd,phonenumber,emil,func){
    UserDAO.insert(username,pwd,phonenumber,emil,func);
};


//表示层传过来的数据到业务层;（将登陆页面的用户名和密码传入持久层进行查找）
exports.login=function(username,pwd,func){
    UserDAO.findByUsernameAndPwd(username,pwd,func);
};



// ----------------------------------后台对用户信息的操作-----------------------------------------------------
//显示所有用户的信息；
exports.shows=function(curpage,eachpage,func){
  UserDAO.showsuser(curpage,eachpage,func);
};

//增加用户；
exports.add=function(username,password,phonenumber,emil,func){
    UserDAO.adduser(username,password,phonenumber,emil,func);
};

//删除用户；
exports.del=function(_id,func){
    UserDAO.deluser(_id,func);
};

//修改用户；(1)
exports.updateid=function(_id,func){
   UserDAO.updateuserid(_id,func);
};

//修改用户；(2)
exports.update=function(_id,username,phonenumber,emil,func){
    UserDAO.updateuser(_id,username,phonenumber,emil,func);
};

//查找用户；
exports.lookup=function(Regexp1,func){
    UserDAO.finduser(Regexp1,func);
};
