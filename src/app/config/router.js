import angular from 'angular';
import indexController from '../controller/indexController';

var router = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('/', {
        url: '/',
        templateUrl: 'app/view/main.html',
        controller: indexController
    }).state('next', {
        url: '/nextPage',
        templateUrl: 'app/view/next.html',
    });
};

router.$inject = ['$stateProvider', '$urlRouterProvider'];

export default router;
