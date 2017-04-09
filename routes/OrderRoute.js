var express = require('express');
var router = express.Router();
var OrderService = require("../service/OrderService");

//显示所有订单；
router.get('/showsorder',function(req,res) {
    var curpage=req.query.curpage;
   OrderService.shows(curpage,5,function(data){
		res.send(data);
	});
});

//修改订单；
router.get('/updateorder',function(req,res){
  var _id=req.query._id;
  var type=req.query.type;
  OrderService.update(_id,type,function(data){
    if(data.length>0){
      res.send({mes:0});
    }else{
      res.send({mes:1});
    }
  });
});

module.exports = router;
