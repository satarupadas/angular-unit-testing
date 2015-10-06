sesameDirectives.directive("sesamePopActivity", function($cordovaToast,$cordovaFileTransfer,$timeout,$state) {
    return {
        restrict: "C",
        link: function(scope, elem, attr){ 
            jQuery(".activitymobile").hide();
            scope.onActivityClick = function($event){
                var attrid = jQuery($event.currentTarget).attr('data-sect');
                jQuery(".activitymobile").hide();
                jQuery(".popup-audio").hide();
                jQuery(".popup-video").hide();
                jQuery(".popup-games").hide();
                jQuery(".popup-activity").hide();
                jQuery("#videohead").hide();
                jQuery("#categoryhead").hide();
                jQuery("#"+attrid).fadeIn();
                if(jQuery("#"+attrid+" .owl-single-activity").length){  
                    // owl = jQuery('body').find("#"+attrid+" .owl-single-activity");
                    // owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
                    // owl.find('.owl-stage-outer').children().unwrap();
                    jQuery("#"+attrid+" .owl-single-activity").owlCarousel({
                        loop:false,
                        margin:10,
                        nav:true,
                        navText:['<span class="font-icon left-big-arrow-icon"></span>','<span class="font-icon right-big-arrow-icon"></span>'],
                        items:1,
                        navRewind:false
                    });
                }
            };
            jQuery(".goback").click(function(){ 
                jQuery(".activitymobile").fadeOut();
                jQuery(".popup-activity").fadeIn();
                jQuery(".popup-audio").fadeIn();
                jQuery(".popup-video").fadeIn();
                jQuery(".popup-games").fadeIn();
                jQuery("#videohead").fadeIn();
                jQuery("#categoryhead").fadeIn();   
            });
            jQuery(".popup-activity").click(function() {
                var offset = 0;
                if( $state.current.name != 'home') {
                    offset = jQuery('#masthead').height();
                } else {
                    offset = jQuery('#content .mobile').height() + jQuery('#masthead').height() + jQuery('#homepage').height();
                }
                
                jQuery('html, body').animate({
                    scrollTop: offset
                }, 10);
            });

            scope.openPdfLink = function(event, durl ,url){
                var open = cordova.plugins.disusered.open;

                var link = url;
                url = url.split('/');
                var filename = url[url.length - 1];
                //alert(link);
                document.addEventListener('deviceready',function(){
                    cordova.plugins.backgroundMode.setDefaults({ text:'Downloading file from server......'});
                    cordova.plugins.backgroundMode.enable();
                    cordova.plugins.backgroundMode.onactivate = function () {
                        setTimeout(function () {
                            // Modify the currently displayed notification
                            cordova.plugins.backgroundMode.configure({
                                title:  'Sesame App',
                                ticker: 'Download',
                                text:'Downloading File.........'
                            });
                        }, 5000);
                    }
                    downloadFile();

                },false);

                function downloadFile(){
                    var fileTransfer = new FileTransfer();
                    $cordovaToast.showShortTop('Download Initiated');
                    fileTransfer.download(encodeURI(link), cordova.file.externalRootDirectory + '/Download/' + filename, 
                    function(entry) {
                        //alert("Success!");
                        $cordovaToast.showShortTop('Download completed');
                        cordova.plugins.backgroundMode.disable();
                        open(cordova.file.externalRootDirectory + '/Download/' + filename, function(){

                        }, function(code){
                            console.log('Error');
                        });
                    }, 
                    function(err) {
                        $cordovaToast.showShortTop('Download Failed');
                        cordova.plugins.backgroundMode.disable();
                        //console.dir(err);
                    });
                }

            };
        }
    };
    
});

