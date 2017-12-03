var app = angular.module("fanApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    // Routing goes here yonder
    // $routeProvider
        // .when("myURL", {
        //     "viewKey": controller
        // })
        // .otherwise ({
        // redirectTo: "/"
        // })
    $routeProvider
        .when("/#!", {
            templateUrl: "home.html",
            controller: "homeCtrl"
        })
        .when("#!/", {
            templateUrl: "home.html",
            controller: "homeCtrl"
        })
        .when("#!/", {
            templateUrl: "home.html",
            controller: "homeCtrl"
        })
        .otherwise({
            redirectTo: "/"
        });



});