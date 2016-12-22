describe('true',function () {

    beforeEach(module('SM'));
    var  ctrl;
    beforeEach(inject(function($controller){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        ctrl = $controller;
    }));
    it('test',function () {
        var $scope = {};
        var controller = ctrl('firstCtrl', { $scope: $scope });
        expect($scope.text).toBe('test text');
        var sum = $scope.sum(5,6);
        expect(sum).toEqual(11);
    })

})