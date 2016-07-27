var app = angular.module('pc_hobby', [
    'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/questionaire", {templateUrl: "questionaire.html", controller: "pc_Controller", controllerAs: "pcCtrl"})
        .when("/pc_parts", {templateUrl: "pc_parts.html", controller: "parts_Controller", controllerAs: "partsCtrl"})
        .otherwise({redirectTo: '/questionaire'});
}]);


app.controller('pc_Controller', function($location){
    this.answer = "gaming";
    this.submitAnswer = function(answer){
        alert(answer);
    };

    var path = $location.path();
});

parts.controller('parts_Controller', function() {

});

