module.exports = function (ngModule) {
    ngModule.controller('mainCtrl',function ($rootScope,$scope, expensesService) {

        console.log(this)
        this.lists = expensesService.getExpenses();
    });
}
