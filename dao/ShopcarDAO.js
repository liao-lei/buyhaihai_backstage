/**
 * Created by lovo_bdk on 16-1-11.
 */
var db = require("./database");
exports.findAll = function(uid,func){
    db.collection("shopcar").find({"users.$id":db.ObjectID(uid)},{sort:{_id:1}},function(data){
        db.findJoin(data,"goods",func);
    });
};
exports.findById = function(ary,func){
   db.collection("shopcar").find({"users.$id":db.ObjectID(ary[0]),"goods.$id":db.ObjectID(ary[1])},function(data){
    	db.findJoin(data,"goods",func);
    });
};
exports.add = function(ary,func){
    db.collection("shopcar").insert({

    	users:{$ref:"users",$id:db.ObjectID(ary[0])},
    	goods:{$ref:"goods",$id:db.ObjectID(ary[1])},
    	count:ary[2]

    },func);

};
exports.update = function(ary,func){
    db.collection("shopcar").update({
        _id:db.ObjectID(ary[0])
    },{$set:{count:ary[1]}},func);
};
exports.del = function(id,func){
    db.collection("shopcar").remove({
        _id:db.ObjectID(id)
    },func);
};
