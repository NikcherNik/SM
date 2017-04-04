/**
 * Created by Nikcher on 03.04.2017.
 */

var express  = require('express');
var session  = require('express-session');
var DataBase = require('../db/database.js');
var Binary   = require('../../app/binary.js');
var async    = require('async');
var cookieParser = require('cookie-parser')

var binary = new Binary();
var database = new DataBase();

exports.post = function (req, res, next ) {
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
                console.log(req.session.login);
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
};
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