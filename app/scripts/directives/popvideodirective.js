sesameDirectives.directive("sesamePopVideo", function($rootScope, $cordovaInAppBrowser) {
    return {
        restrict: "C",
        link: function(scope, elem, attr){

            scope.onVideoClick = function($event, url){
                // VideoPlayer.stop();
                isvideoOpen = true;
                VideoPlayer.play(url.toString());
                document.addEventListener("deviceready",function(){
                    document.addEventListener("pause", function(){
                         VideoPlayer.pause(url.toString());
                    }, false);
                },false);
                
                // document.addEventListener("backbutton", function() {
                //     alert('Exit');
                //     VideoPlayer.stop();
                // });

            };
        }
    };   
});

