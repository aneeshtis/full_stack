var express = require('express');
const app = express();

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

var mongoose = require('mongoose');
var db = "mongodb://localhost/testdb";
mongoose.connect(db,function(err){
    console.log(err);
});
var book = require("./model/book.js");

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:4200/");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    next();
});

app.get("/data", function(req,res){
    res.send({"msg": "Success!"});
});

app.get("/tdata", function(req,res){
    book.find({},function(err,tbdata){

        if(err){
            res.send(err);
        }else{
            //res.send({"msg": "Success"});
            res.send(tbdata);
        }
    })
});

app.post("/insert",function(req,res){
    var b1 = new book();
    b1.id = req.body.bk.id;
    b1.name = req.body.bk.name;
    b1.author = req.body.bk.author;
    b1.publisher = req.body.bk.publisher;
    b1.price = req.body.bk.price;
    b1.save(function(err,result){
        if(err){
            console.log(err);
        }else{
            res.send("Inserted!!");
        }
    })
})

var port = 3000;
app.listen(port,function(req,res){
	console.log('Server started');
})