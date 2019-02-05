var express = require('express');
const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/html/login.html");
})

app.get("/home",function(req,res){
    res.sendFile(__dirname + "/html//home.html");
})

app.get("/home/Employee",function(req,res){
    res.sendFile(__dirname + "/html/Emphome.html");
})

    app.get("/home/Employee/Addemp",function(req,res){
        res.sendFile(__dirname + "/html/newemp.html");
    })

    app.get("/home/Employee/Delemp",function(req,res){
        res.sendFile(__dirname + "/html/delemp.html");
    })

app.get("/home/Product",function(req,res){
    res.sendFile(__dirname + "/html/Product.html");
})

    app.get("/home/Product/Addpro",function(req,res){
        res.sendFile(__dirname + "/html/newpro.html");
    })

    app.get("/home/Product/Delpro",function(req,res){
        res.sendFile(__dirname + "/html/delpro.html");
    })

app.listen(2255,function(req,res){
    console.log("Server Ready");
})