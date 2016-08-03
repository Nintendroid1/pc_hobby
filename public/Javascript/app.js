var app = angular.module('pc_hobby', [
    'ngRoute',
    'firebase'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/questionaire", {templateUrl: "questionaire.html", controller: "questionaire_Controller", controllerAs: "pcCtrl"})
        .when("/pc_parts", {templateUrl: "pc_parts.html", controller: "parts_Controller", controllerAs: "partsCtrl"})
        .when("/admin", {templateUrl: "admin.html", controller: "admin_Controller", controllerAs: "adminCtrl"})
        .otherwise({redirectTo: '/questionaire'});
}]);


app.controller('questionaire_Controller', function($location, HobbyService){
    this.answer = "gaming";
    this.submitAnswer = function(answer) {
        $location.search('build', answer);
        $location.path("/pc_parts");
    };
    this.hobbies = HobbyService.getAllLabelsAndValues();
});

app.controller('parts_Controller', function($location, $firebaseObject, HobbyService) {
    var searchObject = $location.search();
    this.build = searchObject.build;
    this.title = HobbyService.valueToLabel(searchObject.build);

    var ref = firebase.database().ref();
    this.serverData = $firebaseObject(ref);

    this.getBuildPrice = function(build){
        var totalPrice = 0;
        angular.forEach(build.parts, function(part){
            totalPrice = totalPrice + parseFloat(part.price);
        })
        return totalPrice;
    };

});

app.controller('admin_Controller', function($firebaseObject){
    var ref = firebase.database().ref();
    this.serverData = $firebaseObject(ref);
    this.save = function(){
        this.serverData.$save();
    }

    this.addHobby = function(){
        this.serverData.computers.push({builds:[], type: "ChangeMe"});
    }

    this.addBuild = function(type){
        type.builds.push({grade: "Bare", parts:[]});
    }

    this.addPart = function(build){
        build.parts.push({component: "metal"});
    }
});

app.service('HobbyService', function(){
    var hobbies = [
        {label: "Gaming", value: "gaming"},
        {label: "Video/Photo Editing", value: "video"},
        {label: "Rendering/3D Models", value: "3d"},
        {label: "Web Surfing", value: "web"},
        {label: "Professional", value: "pro"}
    ];

    var valueToLabelFn = function(value){
        var label = "Not Found";
        angular.forEach(hobbies, function(hobby){
            if(value == hobby.value)
                label = hobby.label;
        });
        return label;
    };

    var labelToValueFn = function(label){
        var value = "Not Found";
        angular.forEach(hobbies, function(hobby){
            if(label == hobby.label)
                value = hobby.value;
        });
        return value;
    };

    var getAllLabelsAndValuesFn = function(){
        return hobbies;
    };

    return {
        valueToLabel: valueToLabelFn,
        labelToValue: labelToValueFn,
        getAllLabelsAndValues: getAllLabelsAndValuesFn
    };
});

