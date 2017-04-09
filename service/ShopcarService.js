/**
 * Created by lovo_bdk on 16-1-11.
 */
var shopcarDAO = require("../dao/ShopcarDAO");

exports.showAll = function(uid,func){
    shopcarDAO.findAll(uid,func);
};
exports.add = function(ary,func){
    //判断之前是否购买过相同商品
    shopcarDAO.findById(ary,function(data){

        if(data.length > 0){
            //如果有，则数量+1
            shopcarDAO.update([data[0]._id,++data[0].count],func);
        }else{
            //如果没有，则添加该商品
            shopcarDAO.add(ary,func);
        }
    });
};
exports.update = function(ary,func){
    shopcarDAO.update(ary,func);
};
exports.del = function(id,func){
    shopcarDAO.del(id,func);
};
