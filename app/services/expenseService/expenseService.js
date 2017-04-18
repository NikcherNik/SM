
module.exports = function (ngModule) {

    ngModule.factory('expensesService',function ($http,$rootScope) {

        var service = {};
        var expenses = [
            {
                id:1,
                name: "expenses1"
            },
            {
                id:2,
                name: "expenses2"
            },
            {
                id:3,
                name: "expenses3"
            }
        ]

        service.getExpenses = function () {
            return expenses;
        }

        return service;
    })
}