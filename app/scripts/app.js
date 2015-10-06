var app = angular.module('sesameApp', ['ui.router', 'ngCordova', 'ngTouch', 'sesameDirectives', 'sesameControllers','sesameFactories', 'sesameFilters','ngImgCache'] );

var sesameControllers = angular.module('sesameControllers', ['sesameFactories', 'sesameFilters']);

var sesameDirectives = angular.module('sesameDirectives', []);

var sesameFactories = angular.module('sesameFactories', []);

var sesameFilters = angular.module('sesameFilters', []);

var isTransitionInProgress = false;

var backHomeCount = 0;

var isvideoOpen = false;

var reloadOnRetry = false;

var gotCountry = false;

app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller:  'HomeController'
    }).
    state('video', {
        url: '/video',
        templateUrl: 'views/video.html',
        controller:  'VideoController',
        onEnter: function(){
            if(!isTransitionInProgress && window.plugins && !reloadOnRetry){
                isTransitionInProgress = true;
                window.plugins.nativepagetransitions.slide({
                    "direction"        : "left"
                }, function(){
                    isTransitionInProgress = false;
                });
            }
        }
    }).
    state('audio', {
        url: '/audio',
        templateUrl: 'views/audio.html',
        controller:  'AudioController',
        onEnter: function(){
            if(!isTransitionInProgress && window.plugins && !reloadOnRetry){
                isTransitionInProgress = true;
                window.plugins.nativepagetransitions.slide({
                    "direction"        : "left"
                }, function(){
                    isTransitionInProgress = false;
                });
            }
        }
    }).
    state('games', {
        url: '/games',
        templateUrl: 'views/games.html',
        controller:  'GameController',
        onEnter: function(){
            if(!isTransitionInProgress && window.plugins && !reloadOnRetry){
                isTransitionInProgress = true;
                window.plugins.nativepagetransitions.slide({
                    "direction"        : "left"
                }, function(){
                    isTransitionInProgress = false;
                });
            }
        }
    }).
    state('activities', {
        url: '/activities',
        templateUrl: 'views/activities.html',
        controller:  'ActivityController',
        onEnter: function(){
            if(!isTransitionInProgress && window.plugins && !reloadOnRetry){
                isTransitionInProgress = true;
                window.plugins.nativepagetransitions.slide({
                    "direction"        : "left"
                }, function(){
                    isTransitionInProgress = false;
                });
            }
        }
    }).
    state('characters', {
        url: '/characters',
        templateUrl: 'views/characters.html',
        controller:  'CharactersController',
        onEnter: function(){
            if(!isTransitionInProgress && window.plugins && !reloadOnRetry){
                isTransitionInProgress = true;
                window.plugins.nativepagetransitions.slide({
                    "direction"        : "left"
                }, function(){
                    isTransitionInProgress = false;
                });
            }
        }
    }).
    state('parents', {
        url: '/parents',
        templateUrl: 'views/parents.html',
        controller:  'ParentsController',
        onEnter: function(){
            if(!isTransitionInProgress && window.plugins && !reloadOnRetry){
                isTransitionInProgress = true;
                window.plugins.nativepagetransitions.slide({
                    "direction"        : "left"
                }, function(){
                    isTransitionInProgress = false;
                });
            }
        }
    }).
    state('privacy-policy', {
        url: '/privacy-policy',
        templateUrl: 'views/privacypolicy.html',
        controller:  'PrivacyPolicyController',
        onEnter: function(){
            if(!isTransitionInProgress && window.plugins && !reloadOnRetry){
                isTransitionInProgress = true;
                window.plugins.nativepagetransitions.slide({
                    "direction"        : "left"
                }, function(){
                    isTransitionInProgress = false;
                });
            }
        }
    }).
    state('metlife-employees', {
        url: '/metlife-employees',
        templateUrl: 'views/metlifeemployees.html',
        controller:  'MetlifeEmployeesController',
        onEnter: function(){
            if(!isTransitionInProgress && window.plugins  && !reloadOnRetry){
                isTransitionInProgress = true;
                window.plugins.nativepagetransitions.slide({
                    "direction"        : "left"
                }, function(){
                    isTransitionInProgress = false;
                });
            }
        }
    }).
    state('terms-of-use', {
        url: '/terms-of-use',
        templateUrl: 'views/termsofuse.html',
        controller:  'TermsOfUseController',
        onEnter: function(){
            if(!isTransitionInProgress && window.plugins  && !reloadOnRetry){
                isTransitionInProgress = true;
                window.plugins.nativepagetransitions.slide({
                    "direction"        : "left"
                }, function(){
                    isTransitionInProgress = false;
                });
            }
        }
    }).
    state('search', {
        url: '/search/?stag=',
        templateUrl: 'views/search.html',
        controller:  'SearchController',
        onEnter: function(){
            if(!isTransitionInProgress && window.plugins  && !reloadOnRetry){
                isTransitionInProgress = true;
                window.plugins.nativepagetransitions.slide({
                    "direction"        : "left"
                }, function(){
                    isTransitionInProgress = false;
                });
            }
        }
    }).
    state('error', {
        url: '/error',
        template: '<error-page></error-page>',
        onEnter: function(){
            if(!isTransitionInProgress && window.plugins  && !reloadOnRetry){
                isTransitionInProgress = true;
                window.plugins.nativepagetransitions.slide({
                    "direction"        : "left"
                }, function(){
                    isTransitionInProgress = false;
                });
            }
        }
    });
    $urlRouterProvider.otherwise('/');     


}]);

app.run(function ($rootScope, $state, $cordovaDialogs, $cordovaNetwork, $cordovaToast, $cordovaGeolocation, $http, Env){
    $rootScope.offline = false;
    var callonce = true;

    document.addEventListener("offline", function(e) {
        // alert('Offline');
        //console.log("offline");

        $rootScope.offline = true;
        var confirm_offline = function(){
            if(callonce == true){
                callonce = false;
                 navigator.notification.confirm('No Internet Connection',function(index){
                    // alert($rootScope.offline);
                    if (index == 1) {
                        // location.reload();
                        if($rootScope.offline == true){
                            // alert('retry');
                            callonce = true;
                            confirm_offline();
                        }
                        else {
                            // alert('else retry');
                            reloadOnRetry = true;
                            if(gotCountry == false){
                                $rootScope.retrive_country();
                            }
                            if($state.current.name == 'error'){
                                $state.go('home', {}, {reload: true, reloadOnRetry: false});
                            }
                            else {
                                $state.go($state.current, {}, {reload: true, reloadOnRetry: false}); 
                            }
                            $rootScope.getMenuData();
                        }
                        
                        
                    }
                    else if(index == 2) {
                        navigator.app.exitApp();
                    }
                }, 'Network Failed', ['Retry', 'Exit']);
            }

           
        }
        confirm_offline();
    });

    document.addEventListener("online", function(e) {
        // alert('Online');
        //console.log("online");

        if($rootScope.offline == true) {
            callonce = true;
            $rootScope.offline = false;
            // reloadOnRetry = true;
            // $state.go($state.current, {}, {reload: true, reloadOnRetry: false}); 
            // $rootScope.getMenuData();

        }
        
    });

    document.addEventListener("backbutton", function(e) {
        if(isvideoOpen){
            isvideoOpen = false;
            e.preventDefault();
            return;
        }
        
        if(!isTransitionInProgress && window.plugins){
            isTransitionInProgress = true;
            if($state.current.name != "home"){
                backHomeCount = 0;
                window.plugins.nativepagetransitions.slide({
                    "direction"        : "right"
                }, function(){
                    isTransitionInProgress = false;
                });
                navigator.app.backHistory();
            }
            else{
                backHomeCount++ ;
                if(backHomeCount == 1){
                    $cordovaToast.showShortTop('To exit, touch Back again');
                }
                if(backHomeCount == 2){
                    navigator.app.exitApp();
                }
                isTransitionInProgress = false;
            }
            
        }
        
    });

    document.addEventListener("deviceready", function() {
       // Get lat long and request for base url
        // var posOptions = {timeout: 10000, enableHighAccuracy: false};
        // $cordovaGeolocation
        // .getCurrentPosition(posOptions)
        // .then(function (position) {
        //   var lat  = position.coords.latitude;
        //   var long = position.coords.longitude;
        $rootScope.retrive_country = function(){
                $http({
                    method  : 'GET',
                    url     : Env.commonBaseURL+'feedurl',
                    dataType : 'JSON',
                }).success(function (resp){
                    Env.currentCountry = resp.api_info;
                    console.log(Env.currentCountry);
                    Env.baseURL = resp.api_info.api_url+'/api';
                    console.log(Env.baseURL);
                    Env.countryData = resp.countries;
                    console.log(Env.countryData);

                    $rootScope.env = Env;
                    if(window.plugins)
                        window.plugins.spinnerDialog.hide();
                    gotCountry = true;

                });
                // .error(function (err){
                //     alert(err)
                // });
           
        }   
        // }, function(err) {
        //   // error
        //     alert("Server is down, Try after some time.");
        // });
        $rootScope.retrive_country();

        navigator.splashscreen.hide();

        if(window.plugins)
            window.plugins.spinnerDialog.show(null, null, true);


        PhoneCallTrap.onCall(function(state) {
            console.log("CHANGE STATE: " + state);

            switch (state) {
                case "RINGING":
                    // alert("Phone is ringing");
                    AudioHandler.muteApp();
                    break;
                case "OFFHOOK":
                    // alert("Phone is off-hook");
                    AudioHandler.unmuteApp();
                    break;

                case "IDLE":
                    // alert("Phone is idle");
                    AudioHandler.unmuteApp();
                    break;
            }
        });
    });

    document.addEventListener("pause", function(){
        // $cordovaInAppBrowser.close();
        if(window.location.href.indexOf('games') != -1 || window.location.href.indexOf('audio') != -1) {
            AudioHandler.muteApp();
        } else {
            return false;
        }
        
    }, false);
    document.addEventListener("resume", function(){
        // $cordovaInAppBrowser.close();
        if(window.location.href.indexOf('games') != -1 || window.location.href.indexOf('audio') != -1) {
            AudioHandler.unmuteApp();
        } else {
            return false;
        }
        
    }, false);



});
// app.run(function($cordovaDialogs, $cordovaNetwork, $rootScope){
//     $cordovaDialogs.alert("on ready");
//     document.addEventListener("deviceready", function () {
//         $cordovaDialogs.alert("on ready");
//         var type = $cordovaNetwork.getNetwork()

//         var isOnline = $cordovaNetwork.isOnline()

//         var isOffline = $cordovaNetwork.isOffline()
//         if(isOffline){
//             $cordovaDialogs.alert("No Connection Found !");
//         }else{
//             $cordovaDialogs.alert("connected to internet!");
//         }

//         // listen for Online event
//         $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
//           var onlineState = networkState;
//         })

//         // listen for Offline event
//         $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
//           var offlineState = networkState;
//         })

//     }, false);

// });




app.constant("Env", {
    baseURL: "http://sesameapi.jumpcatch.com/api",
    commonBaseURL: "http://sesameapi.jumpcatch.com/api/",
    currentCountry: "",
    countryData: [],
    prevURL: "http://sesameapi.jumpcatch.com/api",
});

function elmFullscreen(elem) {
     if (elem.requestFullscreen) {
       elem.requestFullscreen();
     } else if (elem.msRequestFullscreen) {
       elem.msRequestFullscreen();
     } else if (elem.mozRequestFullScreen) {
       elem.mozRequestFullScreen();
     } else if (elem.webkitRequestFullscreen) {
       elem.webkitRequestFullscreen();
     }
}

// jQuery.fn.redraw = function() {
//     return this.hide(0, function() {
//         jQuery(this).show();
//     });
// };


