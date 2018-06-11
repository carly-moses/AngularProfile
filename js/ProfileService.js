"use strict"; 

function ProfileService($location){
    let userProfile = {
        name: "Milo Larry",
        contactInfo: "milolarry@dogsarethebest.com",
        bio: `My name is Milo Larry. Everybody thinks I'm cute. My mom is one of those crazy dog moms. But I don't mind cause all I want is attention. I'm pretty cool for a small dog. Woof!`
    };

    //returns the profiles object
    const getUserProfile = () => {
        return userProfile; 
    }; 

    //replaces the profile object with  new one
    const setUserProfile = (user) => {
        userProfile = user; 
        //Directs the user back to their profile with update information
        $location.path("/profile"); 
    }; 

    return {
        getUserProfile,
        setUserProfile
    };

};

angular
    .module("app")
    .factory("ProfileService", ProfileService);