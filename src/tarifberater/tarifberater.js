/**
 * Created by xie on 01.09.2015.
 */
'use strict';

angular.module('tarifBerater.inputview', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tarifberater', {
            templateUrl: 'tarifberater/tarifberater.html',
            controller: 'inputviewcontroller'
        });
    }])
    .controller('inputviewcontroller', function () {

    });