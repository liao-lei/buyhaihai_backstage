var express = require('express');
var router = express.Router();
var RecgoodsService = require('../service/RecgoodsService');

/* GET users listing. */

//商品推荐，在商品列表中查找推荐的商品；
router.get('/showrec',function(req,res) {
   var curpage=req.query.curpage;
   RecgoodsService.showsRec(curpage,5,function(data){
		res.send(data);
	});
});

router.get('/showAllrec', function(req, res) {
    RecgoodsService.showAllRec(function(data) {
        res.send(data);
    });
});

//找到后添加到推荐商品中；
router.get('/addrec',function(req,res){
  var rec = JSON.parse(req.query.rec);
   RecgoodsService.addRec(rec,function(data){
		res.send(data);
	});
});

//找到后删除到推荐商品中;
router.get('/delrec',function(req,res){
  var pid=req.query.pid;
   RecgoodsService.removeRec(pid,function(data){
		res.send("删除成功");
	});
});


module.exports = router;
