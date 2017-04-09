/**
 * Created by lovo_bdk on 16-1-11.
 */

var express = require('express');
var router = express.Router();
var shopcarService = require("../service/shopcarService");

router.get('/showAll',function(req,res){
    var uid = req.query.uid;
    shopcarService.showAll(uid,function(data){
        res.send(data);
    });
});
router.post('/update',function(req,res){
    var count = req.body.count;
    var id = req.body.id;
    shopcarService.update([id,count],function(){
        res.send("修改成功");
    });
});
router.post('/del',function(req,res){
    var id = req.body.id;

    shopcarService.del(id,function(){
        res.send("删除成功");
    });
});
router.post('/add',function(req,res){
    var count = req.body.count;
    if(!count){
        count = 1;
    }
    var uid = req.body.uid;
    var pid= req.body.pid;
    shopcarService.add([uid,pid,count],function(){
        res.send("增加成功");
    });
});

module.exports = router;
