/**
 * Created by Nikcher on 12.03.2017.
 */

var express = require('express');
var DataBase = require('./server/database.js');
var bodyParser = require('body-parser');
var Binary = require('./app/binary.js');

var binary = new Binary();
var database = new DataBase();

var app = express();
var router = express.Router();


var http = require('http').Server(app);

app.use(express.static('app'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

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
    res.sendfile(__dirname+'/index.html')
});

app.get('/app/bundle.js',function (req,res) {
    res.sendfile(__dirname+'/app/bundle.js')
});

//=========================================


//==========Handlers of requests===============

app.post('/login',function (req,res) {
  console.log(req);
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

    var hashCodeArr = binary.str2char(req.body.password);
    var charArr_new = hashCodeArr.map(function(code) {
        return code ^ 123 ;
    });
    var newPassword = binary.char2str(charArr_new);

    database.save_money.query({
            sql: 'SELECT COUNT(*) AS count FROM `users` WHERE `login` = ?',
            values: [req.body.login]
        },
        function (error, results, fields) {
            if(error){
                console.error(error);
                return;
            }
            if(results[0].count == 0){
                saveNewUser(req.body.login, newPassword);
            }
        }
    );
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
            return;
        }
        console.log('User successfully registered: '+login);
    });
}








