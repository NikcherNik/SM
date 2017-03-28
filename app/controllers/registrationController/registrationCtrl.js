/**
 * Created by Nikcher on 20.03.2017.
 */
module.exports = function (ngModule) {
    ngModule.controller('registrationCtrl',function ($rootScope,$window,$scope,validationService,
                                                     registrationService) {
        $scope.registrationService = registrationService;
        var messagesError = ['Введите логин', 'Введите пароль','Повторите пароль']
        if($('.bs-float-label input').length){
            var bs_float_on_class = "on";
            var bs_float_show_class = "show";

            $('.float-input').on('bs-check-value', function(){
                var _bs_label = $(this).closest('.bs-float-label').find('.float-label');
                if (this.value !== ''){
                    _bs_label.addClass(bs_float_show_class);
                } else {
                    _bs_label.removeClass(bs_float_show_class);
                }
            })
                .on("keyup",function(){
                    $(this).trigger("bs-check-value");
                    var formGroup = $(this).parents('.form-group');
                    var glyphicon = formGroup.find('.form-control-feedback');
                    if(!!this.value){
                        validationService.resetValidationError(formGroup,glyphicon);
                    }else{
                        validationService.showValidationError(formGroup,glyphicon);
                    }
                })
                .on("focus",function(){
                    $(this).closest(".bs-float-label").find('.float-label').addClass(bs_float_on_class);
                    $(this).closest(".bs-float-label").find('.input-group-addon').addClass("select-label");
                })
                .on("blur",function(){
                    $(this).closest(".bs-float-label").find('.float-label').removeClass(bs_float_on_class);
                    $(this).closest(".bs-float-label").find('.input-group-addon').removeClass("select-label");
                }).trigger("bs-check-value");
        };

        /*
         * ===============REGISTRATION==============*/

        $scope.toRegister = function (user) {
            formValid = true;
            if(typeof (user) === 'undefined' || !user){
                var i = 0;
                $('input').each(function () {
                    var formGroup = $(this).parents('.form-group');
                    var glyphicon = formGroup.find('.form-control-feedback');
                    validationService.showValidationError(formGroup,glyphicon,messagesError[i]);
                    i++;
                });
                i = null;
                return;
            }

            if(typeof (user.login) === 'undefined' || !user.login){
                formValid = false;
                var formGroup = $('.form-group.login-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                var errorMessage = "Введите логин";
                validationService.showValidationError(formGroup,glyphicon,errorMessage);
                formGroup = glyphicon = errorMessage = null;

            }else {
                var formGroup = $('.form-group.login-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                validationService.resetValidationError(formGroup,glyphicon);
                formGroup = glyphicon = null;
            }

             if(typeof (user.password) === 'undefined' || !user.password){
                formValid = false;
                var formGroup = $('.form-group.password-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                 var errorMessage = "Введите пароль";
                 validationService.showValidationError(formGroup,glyphicon,errorMessage);
                 formGroup = glyphicon = errorMessage = null;
            }else {
                var formGroup = $('.form-group.password-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                validationService.resetValidationError(formGroup,glyphicon);
                formGroup = glyphicon = null;
            }

            if(typeof (user.passwordRepeat) === 'undefined' || !user.passwordRepeat){
                formValid = false;
                var formGroup = $('.form-group.passwordRepeat-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                var errorMessage = "Повторите пароль";
                validationService.showValidationError(formGroup,glyphicon,errorMessage);
                formGroup = glyphicon = errorMessage = null;
            }else {
                var formGroup = $('.form-group.passwordRepeat-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                validationService.resetValidationError(formGroup,glyphicon);
                formGroup = glyphicon = null;
            }

            if(user.passwordRepeat != user.password){
                formValid = false;
                var formGroup = $('.form-group.passwordRepeat-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');
                validationService.showValidationError(formGroup,glyphicon);

                formGroup = $('.form-group.passwordRepeat-field-form');
                glyphicon = formGroup.find('.form-control-feedback');

                var errorMessage = "Пароли не совпадают";
                validationService.showValidationError(formGroup,glyphicon,errorMessage);
                formGroup = glyphicon = errorMessage = null;
            }
            if(formValid){
                //TODO sent to ser
                registrationService.toRegister(user);
            }
        };

        //===============================================

    })
};