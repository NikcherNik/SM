/**
 * Created by Nikcher on 20.03.2017.
 */
module.exports = function (ngModule) {
    ngModule.controller('registrationCtrl',function ($rootScope,$scope) {
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


        $(function() {
            $('#loginBtn').click(function() {
                var formValid = true;
                $('input').each(function() {
                    var formGroup = $(this).parents('.form-group');
                    var glyphicon = formGroup.find('.form-control-feedback');
                    if (this.checkValidity()) {
                        formGroup.addClass('has-success').removeClass('has-error');
                        glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
                    } else {
                        formGroup.addClass('has-error').removeClass('has-success');
                        glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');

                        formValid = false;
                    }
                });
                if (formValid) {
                }
            });
        });
    })
};