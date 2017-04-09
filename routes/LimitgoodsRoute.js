var express = require('express');
var router = express.Router();
var LimitgoodsService = require('../service/LimitgoodsService');

/* GET users listing. */

//商品秒杀，在商品列表中查找推荐的商品；
router.get('/showlimit',function(req,res){
	LimitgoodsService.showsLimit(function(data){
		res.send(data);
	});
});

//找到后添加到限购商品中；
router.get('/addlimit',function(req,res){
  // var pid=req.query.pid;
  var pid="5798515419b45ca0d1d18eb7";
   LimitgoodsService.addLimit(pid,function(data){
		res.send(data);
	});
});


//找到后删除到限购商品；
router.get('/dellimit',function(req,res){
  var pid=req.query.pid;
  // var pid="5798d6178cc5811130862115";
   LimitgoodsService.removeLimit(pid,function(data){
		res.send(data);
	});
});

module.exports = router;
