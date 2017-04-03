/**
 * Created by Nikcher on 12.03.2017.
 */

var express = require('express');
var session = require('express-session');
var SessionStore = require('express-mysql-session');
var DataBase = require('./server/db/database.js');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var Binary = require('./app/binary.js');

var async = require('async');

var binary = new Binary();
var database = new DataBase();

var app = express();
var options = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'save_money',
    table: 'sessions'
}


var router = express.Router();


var http = require('http').Server(app);

app.use(express.static('app'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
var expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour
app.use(session({
    key: 'save_money',
    secret: 'SaveMoney20-06',
    store: new SessionStore(options),
    cookie: { secure: true,
        httpOnly: true,
        domain: 'localhost',
        expires: expiryDate
    }
}))
//=======Start server=============
http.listen(8080,function () {});
//================================


//======Connect to data base=======
try {
    database.connect();
}catch (exp){
    console.error(exp);
}
//=================================


//=============Send files===================
app.get('/',function (req,res) {
    res.sendfile(__dirname+'/index.html');
});

app.get('/app/bundle.js',function (req,res) {
    res.sendfile(__dirname+'/app/bundle.js')
});

app.get('/username',function (req,res) {
    console.log(req.session.login);
    if(req.session.login){
        res.send({
            login : req.session.login
        })
    }else res.send('undefined')
});

//=========================================


//==========Handlers of requests===============


//registration
app.post('/cipher',require('./server/routes/cipher').post);
app.post('/registration',require('./server/routes/registration').post);

//sing up
app.post('/cipher',require('./server/routes/cipher').post);
app.post('/login',require('./server/routes/login').post);

//===============================









