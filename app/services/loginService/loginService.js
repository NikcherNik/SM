/**
 * Created by Nikcher on 04.04.2017.
 */
module.exports = function (ngModule) {
    var Binary = require('../../binary.js');
    var binary = new Binary();
    var md5 = require('md5');
    ngModule.factory('loginService',function ($http,$rootScope,$location) {

        return{
            toLogin: function (answer,password) {
                console.log(answer.iter);
                var saltPassword = md5(password);
                console.log(saltPassword);
                for(var i=0; i < answer.iter; i++){
                    saltPassword = md5(answer.salt+saltPassword+answer.salt);
                    console.log(saltPassword);
                }

                $http({
                    method: "post",
                    url: "/login",
                    data: {
                        saltPassword: saltPassword
                    },

                }).success(function (data, status) {
                    if(status === 200){
                        if(data.login){
                            $rootScope.login = data.login;
                            $location.path('/');
                        }
                    }else if(status === 403){
                        //TODO error login
                    }
                })
            }
        }
    })
}