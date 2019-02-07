var express = require('express');
const app = express();

const fileUpload = require('express-fileupload');
app.use(fileUpload());

var mongoose = require('mongoose');
var db = "mongodb://localhost/testdb";
mongoose.connect(db,function(err){
    console.log(err);
});
var book = require("./model/book.js");

app.set("view engine", "ejs");

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}))


app.get("/",function(req,res){
    book.find({},function(err,tbdata){

        if(err){
            res.send(err);
        }else{
            res.render('index', {data:tbdata});
        }
    })
})

app.get("/addbook",function(req,res){
    res.render('bookAdd');
})

app.post("/insert",function(req,res){
    var bid = req.body.txt_id;
    var bname = req.body.txt_name;
    var bauthor = req.body.txt_author;

    var b1 = new book();
    b1.id = bid;
    b1.name = bname;
    b1.author = bauthor;
    b1.publisher = "A2";
    b1.price = 1200;
    b1.save(function(err,result){
        if(err){
            console.log(err);
        }else{
            res.send("Inserted!!");
        }
    })
})

app.post("/delete", function(req,res){
    var txt_id = req.body.txt_id;
    book.deleteMany({id:txt_id},function(err){
        if(err){
            console.log(err);
        }else{
            console.log("Data Deleted!!");
            res.send("Deleted!!");
        }
    })
})

app.post("/view", function(req,res){
    var txt_id = req.body.txt_id;

    book.find({id:txt_id},function(err,tbdata){

        if(err){
            res.send(err);
        }else{
            res.render('home', {data:tbdata});
        }
    })
})

app.post("/update", function(req,res){
    var txt_id = req.body.txt_id;
    book.findOne({id:txt_id},function(err,tbdata){
        tbdata.name = "Aneesh Nikhil";
        tbdata.save();
        if(err){
            res.send(err);
        }else{
            res.send("updated!!");
        }
    })
})

app.post("/upload", function(req,res){
    let sampleFile = req.files.img;
    sampleFile.mv(__dirname + "/Images/"+sampleFile.name,function(err){
        if(err){
            res.send("Error Occurred!!");
        }else{
            res.send("Successfully Uploaded!!");
        }
    });
})

app.listen(2255,function(req,res){
    console.log("Server Ready");
})