/**
 * Created by Nikcher on 03.04.2017.
 */

var express = require('express');
var session = require('express-session');
var Binary  = require('../../app/binary.js');
var async   = require('async');

var binary = new Binary();
exports.post = function (req, res, next ) {
    var hashCodeArr = binary.str2char(req.body.password);
    var charArr_new = hashCodeArr.map(function(code) {
        return code ^ 123 ;
    });
    var newPassword = binary.char2str(charArr_new);
    res.send(newPassword);
}