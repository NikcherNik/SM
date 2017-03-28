/**
 * Created by Nikcher on 21.03.2017.
 */
module.exports = function (ngModule) {
    require('./validationServices/validationService.js')(ngModule);
    require('./registrationService/registrationService.js')(ngModule);
    require('./saltService/saltService.js')(ngModule);
};