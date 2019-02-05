var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
