import angular from 'angular';
import uiRouter from 'angular-ui-router';
import router from './config/router';

var myApp = angular.module('myApp', [
    'ui.router'
])
.config(router);
