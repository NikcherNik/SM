module.exports = function (ngModule) {
    require('./appController/appCtrl.js')(ngModule);
    require('./loginController/singUpCtrl.js')(ngModule);
    require('./registrationController/registrationCtrl.js')(ngModule);
    require('./singOutController/singOutCtrl.js')(ngModule);
};
