module.exports = function (ngModule) {
    require('./appController/appCtrl.js')(ngModule);
    require('./loginController/singUpCtrl.js')(ngModule);
    require('./registrationController/registrationCtrl.js')(ngModule);
    require('./singOutController/singOutCtrl.js')(ngModule);
    require('./mainController/mainCtrl.js')(ngModule);
    require('./EditableFormCtrl/EditableFormCtrl.js')(ngModule);
};
