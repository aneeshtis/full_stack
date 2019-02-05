var express = require('express');
const app = express();

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/html/login.html");
})

app.post("/home",function(req,res){
    var uname = req.body.txtuname;
    var pass = req.body.txtpass;
    if(uname == "admin" && pass == "pass@123"){
        res.sendFile(__dirname + "/html/home.html");
    }else{
        res.send( "<script>alert('Incorrect Password!!'); location.href = './'; </script>");
    }
    
})

app.post("/signup",function(req,res){
    var uname = req.body.txtuname;
    var pass = req.body.txtpass;
    var email = req.body.txtemail;
    var phone = req.body.txtphone;
    //res.render("viewcookie", {user:values});
    res.send( "<html><head></head><body>Username:" + uname + 
    "<br/>Password:" + pass +
    "<br/>Email:" + email +
    "<br/>Phone:" + phone +
    "</body></html>");
})

app.listen(2255,function(req,res){
    console.log("Server Ready");
})