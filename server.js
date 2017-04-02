/**
 * Created by Nikcher on 12.03.2017.
 */

var express = require('express');
var session = require('express-session');
var SessionStore = require('express-mysql-session');
var DataBase = require('./server/db/database.js');
//var connect = require('connect');
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
app.use(session({
    key: 'save_money',
    secret: 'SaveMoney20-06',
    store: new SessionStore(options)
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
    console.log(req.session.login)
    if(req.session.login){
        res.send({
            login : req.session.login
        })
    }else res.send('undefined')
});

//=========================================


//==========Handlers of requests===============

app.post('/login',function (req,res) {
  console.log(req.session.login);
});
app.post('/cipher',function (req,res) {

    var hashCodeArr = binary.str2char(req.body.password);
    var charArr_new = hashCodeArr.map(function(code) {
        return code ^ 123 ;
    });
    var newPassword = binary.char2str(charArr_new);
    res.send(newPassword);

});
app.post('/registration',function (req,res) {

    var login = req.body.login;
    var password = req.body.password;

    var hashCodeArr = binary.str2char(password);
    var charArr_new = hashCodeArr.map(function(code) {
        return code ^ 123 ;
    });
    var newPassword = binary.char2str(charArr_new);

    async.waterfall([
        function (callback) {
            database.save_money.query({
                    sql: 'SELECT COUNT(*) AS count FROM `users` WHERE `login` = ?',
                    values: [login]
                },callback);
        },
        function (results) {
            if(results[0].count == 0){
                saveNewUser(login, newPassword);
                req.session.login = login;
                res.status(200).send({
                    login: login
                });
            }else {
                res.status(403);
            }
        }
    ],function (err) {
        console.error(err)
    });
});
//===============================

function saveNewUser(login, password) {
    var user = {
        login: login,
        password: password
    }
    database.save_money.query('INSERT INTO users SET ?', user, function(err, result) {
        if(err){
            console.error(err);
            return next(err);
        }
        console.log('User successfully registered: '+login);
    });
}








