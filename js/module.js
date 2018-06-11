"use strict";

angular
    .module("app", ["ngRoute"])
    .config(($routeProvider) => {
        $routeProvider
            .when("/profile", {
                template: "<user-profile></user-profile>"
            }).when ("/edit-profile",{
                template: "<edit-profile></edit-profile>"
            }).otherwise({redirectTo:"/profile"});
    });