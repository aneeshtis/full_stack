var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
    res.render("EmpHome");
})

router.get("/new",function(req,res){
    res.render("NewEmp");
})
    router.get("/new/npe",function(req,res){
        res.render("PerEmp");
    })
    router.get("/new/ndwe",function(req,res){
        res.render("DailyEmp");
    })

router.get("/edit",function(req,res){
    res.render("EditEmp");
})

module.exports = router;