var express = require('express');
var router = express.Router();
var GoodsService = require("../service/GoodsService");
var path = require('path');
var multiparty = require('multiparty');


router.post('/upload', function(req, res) {
    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({ uploadDir: './public/img' });
    //上传完成后处理
    form.parse(req, function(err, fields, files) {

        if (err) {
            console.log('parse error: ' + err);
            res.send(err);
        } else {
            var path = files.file[0].path.substring(files.file[0].path.indexOf("img"));
            res.send(path);
        }
    });
});

//显示所有商品；
router.get('/shows',function(req,res) {
  var curpage=req.query.curpage;
   GoodsService.shows(curpage,5,function(data){
		res.send(data);
	});
});


//增加商品；
router.get('/add',function(req,res){
	var name=req.query.name;
	var price=req.query.price;
	var yprice=req.query.yprice;
  var main_img=req.query.main_img.split(",");
  var datail_img=req.query.datail_img;
    GoodsService.add(name,price,yprice,main_img,datail_img,function(data){
		res.send(data);
	});
});

//删除商品；
router.get('/del',function(req,res) {
	var _id=req.query._id;
	GoodsService.del(_id,function(data){
		res.send("成功删除");
	});
});


//修改商品；
router.get('/update',function(req,res){
	var _id=req.query._id;
	var name=req.query.name;
	var price=req.query.price;
	var yprice=req.query.yprice;
  var main_img=req.query.main_img.split(",");
  var datail_img=req.query.datail_img;
	GoodsService.update(_id,name,price,yprice,main_img,datail_img,function(data){
		res.send("修改成功");
	});
});

//查询商品；
router.get("/lookup",function(req,res){
	var name=req.query.name;
  var Regexp1=new RegExp(name);
	GoodsService.lookup(Regexp1,function(data){
		res.send(data);
	});
});
//通过ID查找商品；
router.get("/lookupid",function(req,res){
	var _id=req.query._id;
	GoodsService.lookupid(_id,function(data){
		res.send(data);
	});
});



module.exports = router;
