var indexController;

indexController = function($scope, $state) {
    $scope.welcome = 'Hello, world!';

    $scope.next = function() {
        $state.go('next');
    };
};

indexController.$inject = ['$scope', '$state'];

export default indexController;
