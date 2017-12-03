var abb = angular.module('abbster', ['ngRoute']);

// configurations


// routing config

abb.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            // template: '<strong>index page</strong><br/><p>Index some content here</p>'
            templateUrl: "app/home/home.html",
            controller: "homeCtrl"
        })

        .when("/profile", {
            template: '<strong>profile page</strong><br/><p>Index some content here</p>'
            // templateUrl: "app/profile/myProfile.html",
            // controller: "myProfileCtrl"
        })

        .when("/users", {
            template: '<strong>users page</strong><br/><p>Index some content here</p>'
            // templateUrl: "app/admin/users/usersPage.html",
            // controller: "usersCtrl"
        })

        .when("/activity", {
            template: '<strong>activity page</strong><br/><p>Index some content here</p>'
            // templateUrl: "app/activity/activity.html",
            // controller: "activityCtrl"
        })

        // testing route
        // .when("/tests/", {
        //   // template: '<strong>default page</strong><br/><p>default content here</p>'
        //   templateUrl: "views/test.html",
        //   controller: "testCtrl"
        // })

        // main route
        // .when("/", {
        //   // template: '<strong>default page</strong><br/><p>default content here</p>'
        //   templateUrl: "views/main.html",
        //   controller: "mainCtrl"
        // })

        // .when("/users", {
        //   // template: '<strong>users page</strong><br/><p>User content here</p>'
        //   templateUrl: "views/users.html",
        //   controller: "usersCtrl"
        // })

        .otherwise({
            template: '<strong>default 404 routing page</strong><br/><p>No content here</p>'
            // redirectTo: "/"
        })

});
