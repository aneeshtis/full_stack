var express = require('express');
var empRouter = require('./Routes/EmpRouter');
var ProRouter = require('./Routes/ProRouter');
const app = express();

app.set("view engine", "ejs");

app.use("/emp", empRouter);
app.use("/prd", ProRouter);

app.get("/",function(req,res){
    res.render("home");
})

// app.post("/home",function(req,res){
//     var uname = req.body.txtuname;
//     var pass = req.body.txtpass;
//     if(pass == "pass@123"){
//         res.render("home",{uname:uname, data: books});
//     }else{
//         res.send( "<script>alert('Incorrect Password!!'); location.href = './'; </script>");
//     }
    
// })

// app.post("/signup",function(req,res){
//     var uname = req.body.txtuname;
//     var pass = req.body.txtpass;
//     var email = req.body.txtemail;
//     var phone = req.body.txtphone;
//     res.render("welcome",{uname:uname, email:email, phone:phone})
// })

app.listen(2255,function(req,res){
    console.log("Server Ready");
})