(function () {
'use strict';
    
angular.module('MyApp', [])
.controller('Controller',counter)
.filter('custom',lovefilter);

counter.$inject = ['$scope','customFilter'];
function counter ($scope,customFilter) {
    $scope.output="";
    $scope.check= function(){
    var N = count($scope.launch) + 1;
    if(N==0) {
        $scope.output = "Please enter data first"
    }
    else if (N <= 3) {
        $scope.output= "Enjoy!";
    }
    else {
        $scope.output = "Too much!";
    }
    };
    var count = function(string){
        var c=0;
        if(string == undefined || string =="") {
            return c=-1;
        }
        else {
        for (var i=0; i < string.length; i++) {
            if(string[i]==",") {
                c+=1;
            }
        }
        return c;
     }
    };
    $scope.lovestry = function () {
        var msg = "likes loves likes loves likes";
        msg = lovefilter(msg)
        return msg
    };
    function lovefilter (){
        return function (input) {
            input = input || "";
            input = input.replace("likes","loves");
            return input
        };
    };
    
};

})();
    