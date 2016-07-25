var app = angular.module('pc_hobby', [
    'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider. 
    when("/questionaire", {templateUrl: "/questionaire.html", controller: ""}).
    otherwise({redirectTo: '/questionaire'});
}]);


app.controller('pc_Controller', function(){
    this.questionaire = question;
    this.parts = parts;
})

