"use strict"; 

const userProfile = {
    template: `
    <section class="main">
        <div> <img src="milolarry.jpg" alt="Milo Larry - cutest ever" </div>
        <div class="user-info">
            <h1> {{$ctrl.userInfo.name}}</h1>
            <p class="contact-info"> {{ $ctrl.userInfo.contactInfo }}</p>
            <p class="bio"> {{ $ctrl.userInfo.bio }}</p>
            <a id="button" href="#!/edit-profile">Edit</a>
        </div>
    </section>
    `,
    controller: ["ProfileService", function(ProfileService){
        const vm = this; 
        vm.userInfo = ProfileService.getUserProfile();  
    }]
    
};

angular
    .module("app")
    .component("userProfile", userProfile);