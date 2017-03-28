/**
 * Created by Nikcher on 12.03.2017.
 */

var express = require('express');
var DataBase = require('./server/database.js');
var bodyParser = require('body-parser');
var Binary = require('./app/binary.js');

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

app.post('/login',function (req,res) {
  console.log(req);
});
app.post('/cipher',function (req,res) {
    console.log(req.body.password);
    /*var binary = new Binary();
    var hashCodeArr = binary.str2char(md5(str));
    var charArr_new = hashCodeArr.map(function(code) {
        return code ^ 123 ;
    });
    return binary.char2str(charArr_new);*/
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
});







