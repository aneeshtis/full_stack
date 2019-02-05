var express = require('express');
const app = express();

var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017/testdb";

app.set("view engine", "ejs");

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.render("home");
})

app.get("/emphome",function(req,res){
    res.render("emphome");
})

app.post("/insert",function(req,res){
    MongoClient.connect(url,function(err,database){
        var txtName = req.body.txt_name;
        var txtSalary = req.body.txt_salary;
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

app.get("/view",function(req,res){
    MongoClient.connect(url,function(err,database){
        if(err){
            res.send("Something Went Wrong!!");
        }
        else{
            var dtb = database.db('testdb');
            var empcol = dtb.collection('employees');
            empcol.find().toArray(function(err,tbdata){
                if(err){
                    res.send("Something Went Wrong!!");
                }else{
                    res.render('empview', {data:tbdata});
                }
            })
        }
    })
})

app.get("/list",function(req,res){
    MongoClient.connect(url,function(err,database){
        if(err){
            res.send("Something Went Wrong!!");
        }
        else{
            var dtb = database.db('testdb');
            var empcol = dtb.collection('employees');
            empcol.find().toArray(function(err,tbdata){
                if(err){
                    res.send("Something Went Wrong!!");
                }else{
                    res.render('empdelete', {data:tbdata});
                }
            })
        }
    })
})

app.post("/delete",function(req,res){
    MongoClient.connect(url,function(err,database){
        if(err){
            res.send("Something Went Wrong!!");
        }
        else{
            var emp = req.body.slt_emp;
            if(emp == ''){
                emp = null;
            }
            var dtb = database.db('testdb');
            var empcol = dtb.collection('employees');
            var query = { name: emp };
            empcol.remove(query, function(err, obj) {
                if (err) throw err;
                res.send("Employee Deleted Successfully!!");
              });
        }
    })
})

//-----------------------------Begin Update--------------------------------------------//
app.get("/empupdate",function(req,res){
    MongoClient.connect(url,function(err,database){
        if(err){
            res.send("Something Went Wrong!!");
        }
        else{
            var dtb = database.db('testdb');
            var empcol = dtb.collection('employees');
            empcol.find().toArray(function(err,tbdata){
                if(err){
                    res.send("Something Went Wrong!!");
                }else{
                    res.render('empupdate', {data:tbdata});
                }
            })
        }
    })
})

app.post("/emplist",function(req,res){
    MongoClient.connect(url,function(err,database){
        var emp = req.body.slt_emp;
        var query = { name: emp };
        if(err){
            res.send("Something Went Wrong!!");
        }
        else{
            var dtb = database.db('testdb');
            var empcol = dtb.collection('employees');
            empcol.find(query).toArray(function(err,tbdata){
                if(err){
                    res.send("Something Went Wrong!!");
                }else{
                    res.render('emplist', {data:tbdata});
                }
            })
        }
    })
})

app.post("/empupdated",function(req,res){
    MongoClient.connect(url,function(err,database){
        var emp_eid = req.body.txt_eid;
        var emp_name = req.body.txt_name;
        var emp_dep = req.body.txt_dep;
        var emp_salary = req.body.txt_salary;
        var emp_loc = req.body.txt_loc;

        var where = {eid:emp_eid};
        var values = {$set:{name:emp_name, dep:emp_dep, salary:emp_salary, loc:emp_loc}};
        if(err){
            res.send("Something Went Wrong!!");
        }
        else{
            var dtb = database.db('testdb');
            var empcol = dtb.collection('employees');

            empcol.updateOne(where, values,function(err,result){
                if(err){res.send(err)}
                else{
                 res.send("Data Updated Sucessfully!!")
                }
            })
           
        }
    })
})

//-------------------------------End Update------------------------------------------//


app.listen(2255,function(req,res){
    console.log("Server Ready");
})