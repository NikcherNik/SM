/**
 * Created by Nikcher on 12.03.2017.
 */

var express = require('express');
var DataBase = require('./server/database.js');
var bodyParser = require('body-parser');

var database = new DataBase();

var app = express();
var router = express.Router();


var http = require('http').Server(app);

app.use(express.static('app'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function (req,res) {
    res.sendfile(__dirname+'/index.html')
});

app.get('/app/bundle.js',function (req,res) {
    res.sendfile(__dirname+'/app/bundle.js')
});

http.listen(8080,function () {
});

try {
    database.connect();
}catch (exp){
    console.error(exp);
}

database.save_money.query('select * from users',function (error, result) {
    if(error){
        console.error(error);
        return;
    }
    console.log(result);
});







