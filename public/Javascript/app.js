var app = angular.module('pc_hobby', [
    'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/questionaire", {templateUrl: "questionaire.html", controller: "pc_Controller"})
        .when("/pc_parts", {templateUrl: "pc_parts.html", controller: "pc_Controller"})
        .otherwise({redirectTo: '/questionaire'});
}]);


app.controller('pc_Controller', function(){
    //this.questionaire = question;
    //this.parts = parts;
})

