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

    // Purpose of controller: Binding data to view.
    // Controller shouldn't hold model state.
    // Controller accept input and converts it to command for model or view.
    .controller('inputviewcontroller', function () {
        console.log("base controller instantiated");
        this.headline = "Basis Controller";
    })
    .controller("AnotherController", function () {
        console.log("another controller instantiated");
        this.headline ="Another Controller";
    })
    .controller('YetAnotherController', function($scope) {
        this.headline = "Instanz Headline";
        $scope.headline = "Scope Headline";
    });