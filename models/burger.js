var orm=require("../config/orm.js")

var burger={
    all:function(cb){
        orm.selectall("burger",function(res){
            cb(res);
        })
    },
    add:function(data,cb){
        orm.insertOne(data,function(res){
            cb(res);
        })
    },
    update:function(data,id,cb){
        orm.UpdateOne(data,id,function(res){
            cb(res);
        })
    }
}

module.exports=burger;