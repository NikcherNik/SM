module.exports = function (ngModule) {
    require('./firstController/firstCtrl.js')(ngModule);
    require('./loginController/singUpCtrl.js')(ngModule);
    require('./registrationController/registrationCtrl.js')(ngModule);
};
