/**
 * Created by xie.fei on 01.09.2015.
 */
'use strict';

angular.module('tarifBerater', ['ngRoute', 'ngCookies', 'ui.bootstrap',
    'tarifBerater.inputview'])
    .config(['$routeProvider', function ($routeProvider) {
        console.log("root provider instantiated");
        $routeProvider.otherwise({redirectTo: '/tarifberater'});
    }]);