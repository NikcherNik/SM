var express  = require('express');
var session  = require('express-session');
var Binary   = require('../../app/binary.js');
var async    = require('async');
var md5 = require('md5');

var binary = new Binary();

var DataBase = require('../db/database.js');
var database = new DataBase();

exports.post = function (req, res, next ) {

    var login = req.session.login,
        salt = req.session.salt,
        iter = req.session.iter,

        saltPasswordClient = req.body.saltPassword;
    async.waterfall([
        function (callback) {
            database.save_money.query({
                sql: 'SELECT `password` AS password FROM `users` WHERE login = ?',
                values: [login]
            },callback);
        },
        function (answer) {
            var saltPassword = answer[0].password;
            for(var i=0; i < iter; i++){
                saltPassword = md5(salt+saltPassword+salt);
            }
            if(saltPassword === saltPasswordClient){
                res.status(200).send({
                    code:100,
                    login: login
                });
            }else{
                req.session.login = undefined;
                res.status(200).send({
                    code: 101,
                    error: 'Неверное имя пользователя и пароль'
                });
            }

        }
    ],function (err) {
        console.error(err)
    });

}