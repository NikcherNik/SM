/**
 * Created by Nikcher on 28.03.2017.
 */

module.exports = function (ngModule) {
    var Binary = require('../../binary.js');
    var binary = new Binary();
    var md5 = require('md5');
    ngModule.factory('registrationService',function ($http,$rootScope,$location,$route, validationService) {

        return{
            toRegister: function (user) {
                var cipherPassword = encryptString(user.password);

                var loginError = true;
                var formGroup = $('.form-group.passwordRepeat-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');
                validationService.resetLoginError(formGroup,glyphicon);

                $http({
                    method: "post",
                    url: "/cipher",
                    data: {
                        password: cipherPassword
                    },

                }).success(function (pswdServer) {
                    var cipherPasswordServer = decryptString(pswdServer);
                    $http({
                        method: "post",
                        url: "/registration",
                        data: {
                            login:    encodeURI(user.login),
                            password: cipherPasswordServer
                        },
                    })
                        .success(function (data, status) {
                            if(status === 200){
                                if(data.code === 100){
                                    $rootScope.login = decodeURI(data.login);
                                    $location.path('/');
                                }else if(data.code === 101){
                                    var errorMessage = "Логин занят";

                                    validationService.showValidationError(formGroup,glyphicon,errorMessage, loginError);

                                    formGroup = glyphicon = errorMessage = null;
                                }
                            }

                        })
                        .error(function (data, status, headers, configs) {
                            console.error(status)
                        })
                }).error(function (error, status) {
                    console.error(error)
                });
            }
        };
        function encryptString(str) {
            var hashCodeArr = binary.str2char(md5(str));
            var charArr_new = hashCodeArr.map(function(code) {
                return code ^ 123 ;
            });
            return binary.char2str(charArr_new);
        };
        function decryptString(str) {

            var hashCodeArrServer = binary.str2char(str);
            var charArr_newServer = hashCodeArrServer.map(function(code) {
                return code ^ 123;
            });
            return binary.char2str(charArr_newServer);
        }
    })
}
