/**
 * Created by Nikcher on 12.03.2017.
 */

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var app = express();
var http = require('http').Server(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function (req,res) {
    res.sendfile(__dirname+'/index.html')
});
app.get('/app/bundle.js',function (req,res) {
    res.sendfile(__dirname+'/app/bundle.js')
});

http.listen(8080,function () {
})