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
    .factory("userFactory", function(){
        var privateUserList = [];
        return {
            users: function(){
                console.log("list: " + privateUserList.join(", "));
                return [].concat(privateUserList);
            },
            addUser: function(username, email){
                privateUserList.push({username: username, email: email});
            }
        }
    })
    .controller('BaseController', function () {
        console.log("base controller instantiated");
        this.headline = "Basis Controller";
    }).controller("AnotherController", function () {
        console.log("another controller instantiated");
        this.headline ="Another Controller";
    }).controller('YetAnotherController', function($scope) {
        this.headline = "Instanz Headline";
        $scope.headline = "Scope Headline";
    }).controller("formController", ["userFactory", function(userFactory){
            this.addUser = function(){
                userFactory.addUser(this.username, this.email);
                this.username ="";
                this.email ="";
            }

    }]).controller("userListController", ["userFactory", function(userFactory){
            this.users = userFactory.users;
    }]).controller("tempController", function(){
        this.temperatures = [
            {zip: "10003", temp: "43"},
            {zip: "55364", temp: "19"}
        ];

        this.submit = function() {
            this.temperatures.push({zip: "10003", temp: "tempObject.temperature.toString()"});
            console.log(this.temperatures);
        }

    });