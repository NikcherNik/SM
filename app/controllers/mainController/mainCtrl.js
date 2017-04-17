module.exports = function (ngModule) {
    ngModule.controller('mainCtrl',function ($rootScope,$scope, singOutService) {

        console.log(this)
        this.lists = [
            {
                listName: 'list1',
            },
            {
                listName: 'list2',
            },
            {
                listName: 'list1',
            },
            {
                listName: 'list2',
            },
            {
                listName: 'list1',
            },
            {
                listName: 'list2',
            }
        ]
    });
}
