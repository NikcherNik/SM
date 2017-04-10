/**
 * Created by Nikcher on 04.04.2017.
 */
module.exports = function (ngModule) {
    var Binary = require('../../binary.js');
    var binary = new Binary();
    var md5 = require('md5');
    ngModule.factory('loginService',function ($http,$rootScope,$location,validationService) {
    var loginError = true;
        return{
            toLogin: function (answer,password) {
                var saltPassword = md5(password);
                for(var i=0; i < answer.iter; i++){
                    saltPassword = md5(answer.salt+saltPassword+answer.salt);
                }
                var formGroup = $('.form-group.password-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');
                validationService.resetLoginError(formGroup,glyphicon);

                $http({
                    method: "post",
                    url: "/login",
                    data: {
                        saltPassword: saltPassword
                    },

                }).success(function (data, status) {
                    if(status === 200){
                        if(data.code != 101){
                            if(data.login){
                                $rootScope.login =  decodeURI(data.login);
                                $location.path('/');
                            }
                        }else{
                            var errorMessage = "Неверный логин или пароль";

                            validationService.showValidationError(formGroup,glyphicon,errorMessage, loginError);
                            
                            formGroup = glyphicon = errorMessage = null;
                        }
                    }
                })
            }
        }
    })
}