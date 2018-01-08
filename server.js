var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var Form = require('./models/FormSubmit.js');
var app = express();

var port = process.env.PORT || 3000;




var configDB = {
	url: 'mongodb://localhost/FormSubmit'
}
if(process.env.MONGODB_URI){
	mongoose.connect(process.env.MONGODB_URI);
}else{
	mongoose.connect(configDB.url);
}


app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static('assets'));
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});



app.post('/', function(req, res){
	console.log(req.body);
	var form = new Form({
		first: req.body.first,
		last: req.body.last,
		email: req.body.email,
		zip: req.body.zip,
		state: req.body.state
	});

	form.save(function(err, doc){
		if(err){
			res.send(err);
		}else{
			res.send(doc);
		}
	})
})

app.listen(port, function(){
	console.log("listening on port 3000");
});
module.exports = app;


