var express = require('express');
var router = express.Router();

const fileUpload = require('express-fileupload');
router.use(fileUpload());

var mongoose = require('mongoose');
var db = "mongodb://localhost/camera";
mongoose.connect(db,function(err){
    console.log(err);
});
var cam = require("../model/cam.js");

var bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({extended:true}))

/* GET home page. */
router.get('/', function(req, res, next) {
    cam.find({},function(err,tbdata){
        if(err){
            res.send(err);
        }else{
            res.render('index', {data:tbdata});
        }
    })
});

router.get('/camadd', function(req, res, next) {
  res.render('camadd');
});

router.post("/insert",function(req,res, next){
    var id = req.body.id;
    var name = req.body.name;
    var model_type = req.body.model_type;

    var color = req.body.color;
    var company = req.body.company;
    var cam_type = req.body.cam_type;

    var resolution = req.body.resolution;
    var video_resolution = req.body.video_resolution;
    var auto_focus = req.body.auto_focus;

    var connectivity = req.body.connectivity;
    var other = req.body.other;
    var price = req.body.price;

    let sampleFile = req.files.pic;
    sampleFile.mv(__dirname + "/public/images/"+sampleFile.name,function(err){
        if(err){
            res.send("Error Occurred!!Plz try again!!");
        }
    });

    var cam1 = new cam();
    cam1.id = id;
    cam1.name = name;
    cam1.model_type = model_type;

    cam1.color = color;
    cam1.company = company;
    cam1.cam_type = cam_type;

    cam1.resolution = resolution;
    cam1.video_resolution = video_resolution;
    cam1.auto_focus = auto_focus;

    cam1.connectivity = connectivity;
    cam1.other = other;
    cam1.price = price;
    cam1.pic = sampleFile.name;

    cam1.save(function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("Data Inserted!!");
            res.send("Inserted!!");
        }
    })
})

router.post("/delete",function(req,res){

})

router.post("/update",function(req,res){

})

module.exports = router;
