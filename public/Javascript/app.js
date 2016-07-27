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
});

app.controller('parts_Controller', function($location) {
    var searchObject = $location.search();
    this.build = searchObject.build;

    this.computers = [
        {
            type: "gaming", 
            builds: [
                {
                    grade: "low", 
                    parts:[
                        {
                            component: "CPU", 
                            name: "i7", 
                            imgUrl: "http://cdn.pcpartpicker.com/static/forever/images/product/83244e8e2a0e9660fd44d93ef7455222.med.256p.jpg", 
                            price: "$123.22", 
                            purchaseLink: "http://pcpartpicker.com/mr/superbiiz/sCNp99"
                        },
                        {
                            component: "CPU Cooler", 
                            name: "Noctua", 
                            imgUrl: "http://cdn.pcpartpicker.com/static/forever/images/product/5a7e17771baa12d656af9e55881136f0.256p.jpg", 
                            price: "$34.22", 
                            purchaseLink: "http://pcpartpicker.com/mr/superbiiz/sCNp99"
                        }
                    ]
                },
                {
                    grade: "high", 
                    parts:[
                        {
                            component: "CPU", 
                            name: "i7", 
                            imgUrl: "http://cdn.pcpartpicker.com/static/forever/images/product/83244e8e2a0e9660fd44d93ef7455222.med.256p.jpg", 
                            price: "$123.22", 
                            purchaseLink: "http://pcpartpicker.com/mr/superbiiz/sCNp99"
                        },
                        {
                            component: "CPU Cooler", 
                            name: "Noctua", 
                            imgUrl: "http://cdn.pcpartpicker.com/static/forever/images/product/5a7e17771baa12d656af9e55881136f0.256p.jpg", 
                            price: "$34.22", 
                            purchaseLink: "http://pcpartpicker.com/mr/superbiiz/sCNp99"
                        }
                    ]
                }
            ]
        },
        {
            type: "video", 
            builds: [
                {
                    grade: "low", 
                    parts:[
                        {
                            component: "CPU", 
                            name: "i7", 
                            imgUrl: "http://cdn.pcpartpicker.com/static/forever/images/product/83244e8e2a0e9660fd44d93ef7455222.med.256p.jpg", 
                            price: "$123.22", 
                            purchaseLink: "http://pcpartpicker.com/mr/superbiiz/sCNp99"
                        },
                        {
                            component: "CPU Cooler", 
                            name: "Noctua", 
                            imgUrl: "http://cdn.pcpartpicker.com/static/forever/images/product/5a7e17771baa12d656af9e55881136f0.256p.jpg", 
                            price: "$34.22", 
                            purchaseLink: "http://pcpartpicker.com/mr/superbiiz/sCNp99"
                        }
                    ]
                },
                {
                    grade: "high", 
                    parts:[
                        {
                            component: "CPU", 
                            name: "i7", 
                            imgUrl: "http://cdn.pcpartpicker.com/static/forever/images/product/83244e8e2a0e9660fd44d93ef7455222.med.256p.jpg", 
                            price: "$123.22", 
                            purchaseLink: "http://pcpartpicker.com/mr/superbiiz/sCNp99"
                        },
                        {
                            component: "CPU Cooler", 
                            name: "Noctua", 
                            imgUrl: "http://cdn.pcpartpicker.com/static/forever/images/product/5a7e17771baa12d656af9e55881136f0.256p.jpg", 
                            price: "$34.22", 
                            purchaseLink: "http://pcpartpicker.com/mr/superbiiz/sCNp99"
                        }
                    ]
                }
            ]
        },
    ];

    //this.buildsToDisplay = this.computers.where(type=this.build).builds

    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

});
