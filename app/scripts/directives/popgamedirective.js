sesameDirectives.directive("sesamePopGame", function($rootScope, $cordovaInAppBrowser) {
    return {
        restrict: "C",
        link: function(scope, elem, attr){
            scope.onGameClick = function($event, url){
                var url = url+'#donotdisplayclose/true';
                var options = {
                  location: 'no',
                  clearcache: 'yes',
                  toolbar: 'no',
                  closebuttoncaption: 'back'
                }; 

                if(screen)
                    screen.lockOrientation('landscape');

                $cordovaInAppBrowser.open(url, '_blank', options)
                  .then(function(event) {
                   
                  })
                  .catch(function(event) {
                    // error
                  });

            };
            // document.addEventListener("pause", function(){
            //     // $cordovaInAppBrowser.close();
            //     AudioHandler.muteApp();
            // }, false);
            // document.addEventListener("resume", function(){
            //     // $cordovaInAppBrowser.close();
            //     AudioHandler.unmuteApp();
            // }, false);

            $rootScope.$on('$cordovaInAppBrowser:exit', function(e, event){
                if(screen)
                    screen.lockOrientation('portrait');
            });
        }
    };    
});

