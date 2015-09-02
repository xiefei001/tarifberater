/**
 * Created by xie on 01.09.2015.
 */
'use strict';

angular.module('tarifBerater.inputview', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        console.log("routeprovider for inputview instantiated");
        $routeProvider.when('/tarifberater', {
            templateUrl: 'tarifberater/tarifberater.html'
            //controller: 'BaseController'
        });
    }])
    .controller('BaseController', function () {
        console.log("base controller instantiated");
        this.headline = "Basis Controller";
    }).controller("AnotherController", function () {
        console.log("another controller instantiated");
        this.headline ="Another Controller";
    }).controller('YetAnotherController', function($scope) {
        this.headline = "Instanz Headline";
        $scope.headline = "Scope Headline";
    });