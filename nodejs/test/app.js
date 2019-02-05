var express = require('express');
const app = express();

var port = express.env.PORT||3000;
app.listen(port,function(req,res){
	console.log('Server started');
})
