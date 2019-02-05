var express = require('express');
const app = express();

var sc = require('./test');

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine", "ejs");

var books = [{bookid:"bk1", bookname:"n1", author:"googel", price:23}, 
{bookid:"bk2", bookname:"n2", author:"googel", price:24}, 
{bookid:"bk3", bookname:"n3", author:"googel", price:24} ];

app.get("/",function(req,res){
    res.render("login");
    sc.getSomething();
})

app.post("/home",function(req,res){
    var uname = req.body.txtuname;
    var pass = req.body.txtpass;
    if(pass == "pass@123"){
        res.render("home",{uname:uname, data: books});
    }else{
        res.send( "<script>alert('Incorrect Password!!'); location.href = './'; </script>");
    }
    
})

app.post("/signup",function(req,res){
    var uname = req.body.txtuname;
    var pass = req.body.txtpass;
    var email = req.body.txtemail;
    var phone = req.body.txtphone;
    res.render("welcome",{uname:uname, email:email, phone:phone})
})

app.listen(2255,function(req,res){
    console.log("Server Ready");
})