var connection=require("../config/connection.js")

var orm={
    selectall:function(table,cb){
        var query="SELECT * FROM ??"
        connection.query(query,[table],function(err,res){
            if(err)throw(err);
            cb(res);
        })
    },
    insertOne:function(data,cb){
        var query="INSERT INTO burger SET ?"
        connection.query(query,[data],function(err,res){
            if(err)throw(err);
            cb(res);
        })
    },
    UpdateOne:function(updateData,id,cb){
        var query="UPDATE burger SET devoured WHERE ??=?"
        connection.query(query,[id,updateData],function(err,res){
            if(err)throw(err);
            cb(res);
        })
    }
};
module.exports = orm;