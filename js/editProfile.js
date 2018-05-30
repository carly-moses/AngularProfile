"use strict";
const editProfile = {
    template: `

    <section>
    <form ng-submit="$ctrl.editProfile($ctrl.user);">
        <h3>Use the form below to update your profile.</h3>
        <p> Name </p>
        <input class="input-name" type="text" placeholder="Name" ng-model="$ctrl.user.name">
        <p> Contact </p>
        <input class="input-contact-info" type="text" placeholder="Contact Info" ng-model="$ctrl.user.contactInfo">
        <p>Bio </p>
        <input class="input-bio" type="text" placeholder="About Me" ng-model="$ctrl.user.bio">
        <button>Complete</button>
    </form>
    `,

    controller: ["ProfileService", function(ProfileService){
        const vm = this;

        vm.user = angular.copy(ProfileService.getUserProfile());

        vm.editProfile = (user) => {
            ProfileService.setUserProfile(user); 
        }
    }]

}

angular
    .module("app")
    .component("editProfile", editProfile); 