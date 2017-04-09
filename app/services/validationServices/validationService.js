/**
 * Created by Nikcher on 21.03.2017.
 */
module.exports = function (ngModule) {
    ngModule.factory('validationService',function ($http,$rootScope,$location) {

    return{
        showValidationError: function (formGroup, glyphicon, messageError, loginRegistrationError = false) {
            formGroup.addClass('has-error').removeClass('has-success');
            glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
            formGroup.find('.error-validation').remove();
            
            if(messageError && !loginRegistrationError){
                var msgElem = document.createElement('div');
                msgElem.innerHTML = messageError;
                $(msgElem).addClass('error-validation')
                formGroup.append(msgElem);
            }else if(messageError && loginRegistrationError){
                var msgElem = document.createElement('div');
                msgElem.innerHTML = messageError;
                $(msgElem).addClass('error-login')
                formGroup.append(msgElem);
            }
        },
        resetValidationError: function (formGroup, glyphicon, messageError) {
            formGroup.addClass('has-success').removeClass('has-error');
            glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');

            formGroup.find('.error-validation').remove();
        },
        resetLoginError: function (formGroup, glyphicon, messageError) {
            formGroup.addClass('has-success').removeClass('has-error');
            glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');

            formGroup.find('.error-login').remove();
        },
    }

})
}