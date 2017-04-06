/**
 * Created by Nikcher on 04.04.2017.
 */
module.exports = function (ngModule) {
    var Binary = require('../../binary.js');
    var binary = new Binary();
    var md5 = require('md5');
    ngModule.factory('loginService',function ($http,$rootScope,$location,validationService) {

        return{
            toLogin: function (answer,password) {
                var saltPassword = md5(password);
                for(var i=0; i < answer.iter; i++){
                    saltPassword = md5(answer.salt+saltPassword+answer.salt);
                }

                $http({
                    method: "post",
                    url: "/login",
                    data: {
                        saltPassword: saltPassword
                    },

                }).success(function (data, status) {
                    console.log(status)
                    if(status === 200){
                        if(data.code != 101){
                            if(data.login){
                                $rootScope.login = data.login;
                                $location.path('/');
                            }
                        }else{
                            var formGroup = $('.form-group.password-field-form');
                            var glyphicon = formGroup.find('.form-control-feedback');

                            var errorMessage = "Неверный логин или пароль";
                            validationService.showValidationError(formGroup,glyphicon,errorMessage);

                            formGroup = $('.form-group.login-field-form');
                            glyphicon = formGroup.find('.form-control-feedback');
                            validationService.showValidationError(formGroup,glyphicon,"");
                            formGroup = glyphicon = errorMessage = null;
                        }
                    }
                })
            }
        }
    })
}