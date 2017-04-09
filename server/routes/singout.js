var express = require('express');
var session = require('express-session');

exports.post = function (req, res, next ) {

    if(req.session.login){
        req.session.login = '';
        res.status(200).send({});
    }else {
        res.status(403);
    }
};
