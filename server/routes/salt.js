
var express = require('express');
var session = require('express-session');
var Binary  = require('../../app/binary.js');
var async   = require('async');

var DataBase = require('../db/database.js');
var binary = new Binary();

var database = new DataBase();

exports.post = function (req, res, next ) {
    var login = req.body.login;
    var answer = {};
    var iter = getRandomInt(5,20);
    var salt = generatePassword(4);
    async.waterfall([
        function (callback) {
            database.save_money.query({
                sql: 'SELECT COUNT(*) AS count FROM `users` WHERE `login` = ?',
                values: [login]
            },callback);
        },
        function (results) {
            if(results[0].count != 0){

                answer.login = login;
                answer.salt = salt;
                answer.iter = iter;

                req.session.login = login;
                req.session.salt = salt;
                req.session.iter = iter;

                res.status(200).send({
                    code: 100,
                    answer: answer
                });
            }else {
                res.status(200).send({
                    code: 101,
                    error: "Неверный пользователь или пароль"
                });
            }
        }
    ],function (err) {
        console.error(err)
    });
};


function generatePassword(length){
    
    var chars = 'abdefhiknrstyzABDEFGHKNQRSTYZ23456789';
    var string = "";

    for(var i=0; i < length; i++){
        string = string + chars.substr(getRandomInt(1,chars.length-1),1);
    }
    return string;
}
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
