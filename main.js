var demoApp = angular.module("myApp", []);

//ng-app底下掛載ng-controller
demoApp.controller("myController", function($scope) {
    $scope.hello = 'Hello!!!';
});