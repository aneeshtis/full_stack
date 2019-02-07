var express = require('express');
var router = express.Router();

var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017/testdb";

/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url,function(err,database){
    if(err){
        res.send("Something Went Wrong!!");
    }
    else{
        var dtb = database.db('testdb');
        var empcol = dtb.collection('books');
        empcol.find().toArray(function(err,tbdata){
            if(err){
                res.send("Something Went Wrong!!");
            }else{
                res.render('index', {data:tbdata});
            }
        })
    }
})
});

router.get('/addbook', function(req, res, next) {
  res.render('addbook');
});

router.post("/insert",function(req,res){
    MongoClient.connect(url,function(err,database){
      var txtId = req.body.txt_id;
      var txtName = req.body.txt_name;
      var txtAuthor = req.body.txt_author;
      var txtPublisher = req.body.txt_publisher;
      var txtPrice = req.body.txt_price;
      var txtDescription = req.body.txt_description;
      
      var dtb = database.db('testdb');
      var empcol = dtb.collection('employees');
      var data = {eid:"2388", name:txtName, dep:"acc", salary:txtSalary, loc:"Alpy"};

      empcol.insert(data, function(err,result){
          if(err){
              res.send("Something Went Wrong!!");
          }
          else{
              res.send("Data inserted successfully!!");
          }
      })
  })
})

module.exports = router;
