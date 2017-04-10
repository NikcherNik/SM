/**
 * Created by Nikcher on 28.03.2017.
 */
module.exports = function (ngModule) {
    ngModule.factory('saltService',function ($http,$rootScope,loginService,validationService) {

        return{
            toSalt: function (login,password) {

                var formGroup = $('.form-group.password-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');
                validationService.resetLoginError(formGroup,glyphicon);

                $http({
                    method: "post",
                    url: "/salt",
                    data: {
                        login: encodeURI(login)
                    },

                }).success(function (answer, status) {
                    if(status === 200){
                        if(answer.code != 101){
                            loginService.toLogin(answer.answer,password);
                        }else {


                            var errorMessage = "Неверный логин или пароль";
                            validationService.showValidationError(formGroup,glyphicon,errorMessage, true);

                            formGroup = $('.form-group.login-field-form');
                            glyphicon = formGroup.find('.form-control-feedback');
                            validationService.showValidationError(formGroup,glyphicon,"");
                            formGroup = glyphicon = errorMessage = null;
                        }

                    }else if(status === 102){
                        //TODO error login
                    }
                })
            }
        }
    })
}