var express = require('express');
var router = express.Router();
var TwoareagoodsService = require('../service/TwoareagoodsService');

/* GET users listing. */

//商品推荐，在商品列表中查找推荐的商品；
router.get('/showtwo',function(req,res){
	TwoareagoodsService.showsTwo(function(data){
		res.send(data);
	});
});

//找到后添加到推荐商品中；
router.get('/addtwo',function(req,res){
  // var pid=req.query.pid;
  var pid="5798515419b45ca0d1d18eb7";
   TwoareagoodsService.addTwo(pid,function(data){
		res.send(data);
	});
});


//找到后删除到推荐商品中;
router.get('/deltwo',function(req,res){
  // var pid=req.query.pid;
  var pid="5798d6178cc5811130862115";
   TwoareagoodsService.removeTwo(pid,function(data){
		res.send(data);
	});
});

module.exports = router;
