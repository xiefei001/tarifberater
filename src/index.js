/**
 * Created by xie.fei on 01.09.2015.
 */
'use strict';

angular.module('tarifBerater', ['ngRoute', 'ngCookies', 'ui.bootstrap'])
    .config('$routeProvider', function($routeProvider){
        $routeProvider.otherwise({redirectTo: '/tarifberater'});
    });