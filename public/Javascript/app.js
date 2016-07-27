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
    this.submitAnswer = function(answer) {
        $location.search('build', answer);
        $location.path("/pc_parts");
    };
    $("[data-toggle=tooltip]").tooltip();
});

app.controller('parts_Controller', function($location) {
    var searchObject = $location.search();
    this.answer = searchObject.build;
   // if (searchObject == '/pc_parts?build=gaming'P)\

   this.builds = [
       {name: "gaming", price: "12.44"},
       {name: "3d", price: "144.44"},
       {name: "professional", price: "55.44"}
   ];
});

