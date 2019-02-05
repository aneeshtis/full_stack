var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
    res.render("ProHome");
})

    router.get("/printer",function(req,res){
        res.render("printer");
    })
        router.get("/printer/new",function(req,res){
            res.render("printerNew");
        })
        router.get("/printer/edit",function(req,res){
            res.render("printerEdit");
        })

    router.get("/scanner",function(req,res){
        res.render("scanner");
    })
        router.get("/scanner/new",function(req,res){
            res.render("scannerNew");
        })
        router.get("/scanner/edit",function(req,res){
            res.render("scannerEdit");
        })

module.exports = router;