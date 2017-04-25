module.exports = function (ngModule) {
    ngModule.controller('EditableFormCtrl', function($scope, $filter, $http) {

        $scope.expenses = [
            {
                id: 1,
                date: '19.04.2017',
                section: 1,
                amount: 250
            },
            {
                id: 2,
                date: '19.04.2017',
                section: 4,
                amount: 250
            },
        ];

        $scope.sections = [
            {value: 1, text: 'продукты'},
            {value: 2, text: 'транспорт'},
            {value: 3, text: 'одежда'},
            {value: 4, text: 'прочее'}
        ];

       /* $scope.loadGroups = function() {
            return $scope.groups.length ? null : $http.get('/groups').success(function(data) {
                $scope.groups = data;
            });
        };

        $scope.showGroup = function(user) {
            if(user.group && $scope.groups.length) {
                var selected = $filter('filter')($scope.groups, {id: user.group});
                return selected.length ? selected[0].text : 'Not set';
            } else {
                return user.groupName || 'Not set';
            }
        };*/

        $scope.showSection = function(expense) {
            var selected = [];
            if(expense.section) {
                selected = $filter('filter')($scope.sections, {value: expense.section});
            }
            return selected.length ? selected[0].text : 'Not set';
        };

        $scope.checkName = function(data, id) {
            console.log(data)
            /*if (id === 2 && data !== 'awesome') {
                return "Username 2 should be `awesome`";
            }*/
        };

        $scope.saveUser = function(data, id) {
            //$scope.user not updated yet

            angular.extend(data, {id: id});
            console.log(data);
            console.log(id)
            //return $http.post('/saveUser', data);
        };

        // remove user
        $scope.removeUser = function(index) {
            $scope.expenses.splice(index, 1);
        };

        // add user
        $scope.addUser = function() {
            console.log('asd');
            $scope.inserted = {
                id: $scope.expenses.length+1,
                date: new Date(),
                section: null,
                amount: null
            };
            $scope.expenses.push($scope.inserted);
        };
});
}