var express = require('express');
var router = express.Router();
var UserService = require("../service/UserService");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//判断用户名是否存在
router.get('/userstrue',function(req,res){
  var username=req.query.username;
  UserService.userstrue(username,function(data){
    if(data.length>0){
      res.send({mes:0});
    }else{
      res.send({mes:1});
    }
  });
});

//判断注册页面的输入参数是否正确
router.post('/register',function(req,res){
  var username=req.body.username;
  var pwd=req.body.pwd;
  var phonenumber=req.body.phonenumber;
  var emil=req.body.emil;

  UserService.register(username,pwd,phonenumber,emil,function(data){
    if(data){
      // res.send("注册成功");
        res.send(data);
    }else{
      res.send("注册失败");
    }
  });
});


// 登录页面的判断
router.post('/login',function(req,res){
  var username=req.body.username;
  var pwd=req.body.pasd;
  UserService.login(username,pwd,function(data){
    if(data.length>0){
      req.session.user=data[0];                       //新建session对象----------------------------------------；
      res.send({mes:1});
    }else{
      res.send({mes:0});
    }
  });
});

// 登录页面的判断
router.post('/login1',function(req,res){
  var username=req.body.username;
  var pwd=req.body.pasd;
  UserService.login(username,pwd,function(data){
    if(data.length>0){
      res.send(data);
    }else{
      res.send({mes:0});
    }
  });
});



//获取sessin中的用户对象；
router.get('/getUser',function(req,res){
  var user=req.session.user;                   //取出session对象-----------------------------------------------；
  if(user){
    res.send(user);
  }else{
    res.send({});
  }
});


//注销登陆；
router.get('/logout',function(req,res){
  req.session.user =null;
  res.send({meg:0});
});



// ----------------------------------后台对用户信息的操作-----------------------------------------------------
//显示所有用户的信息；
router.get('/showsusers',function(req,res) {
  var curpage=req.query.curpage;
   UserService.shows(curpage,5,function(data){
		res.send(data);
	});
});

//增加用户信息；
router.get('/addusers',function(req,res){
	var username=req.query.username;
  var password=req.query.pwd;
	var phonenumber=req.query.phonenumber;
  var emil=req.query.emil;
    UserService.add(username,password,phonenumber,emil,function(data){
		res.send(data);
	});
});

//删除用户；
router.get('/delusers',function(req,res) {
	var _id=req.query._id;
	UserService.del(_id,function(data){
		res.send("成功删除");
	});
});


//修改用户（1）；
router.get('/updateid',function(req,res){
  	var _id=req.query._id;
    UserService.updateid(_id,function(data){
      res.send(data);
    });
});

//修改用户；（2）;
router.get('/updateusers',function(req,res){
	var _id=req.query._id;
	var username=req.query.username;
	// var password=req.query.password;
	var phonenumber=req.query.phonenumber;
  var emil=req.query.emil;
	UserService.update(_id,username,phonenumber,emil,function(data){
		res.send("修改成功");
	});
});

//查询用户；
router.get("/lookupusers",function(req,res){
	var username=req.query.username;
  var Regexp1=new RegExp(username);
	UserService.lookup(Regexp1,function(data){
		res.send(data);
	});
});


module.exports = router;
