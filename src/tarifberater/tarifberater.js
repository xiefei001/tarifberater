'use strict';


angular.module('tarifBerater.inputview', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tarifberater', {
            templateUrl: 'tarifberater/tarifberater.html',
            controller: 'inputviewcontroller'
        });
    }])

    // Purpose of controller: Binding data to view.
    // Controller shouldn't hold model state.
    // Controller accept input and converts it to command for model or view.
    .controller('inputviewcontroller', function () {

    });


// Models There are lots of dirrerent ways to create a "model", aka services, factories and providers.