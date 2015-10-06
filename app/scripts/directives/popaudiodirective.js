sesameDirectives.directive("sesamePopAudio", function($rootScope) {
    return {
        restrict: "C",
        link: function(scope, elem, attr){
            // AudioJS.setup();
            var domainurl = window.location.href;
            audioJSOpened = false;
            
            getUrlVars =function () {
                var vars = {};
                var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
                    function(m, key, value) {
                        vars[key] = value;
                    });
                return vars;
            } 
            jQuery(".popup-audio, a").click(function() {
               var magnificPopup = jQuery.magnificPopup.instance; 
                magnificPopup.close(); 
            });

            $rootScope.$on("$stateChangeSuccess",function(){
                var magnificPopup = jQuery.magnificPopup.instance; 
                magnificPopup.close(); 
            });

            // document.addEventListener("pause", function(){
            //     var magnificPopup = jQuery.magnificPopup.instance; 
            //     magnificPopup.close(); 
            // }, false);

            jQuery('.popup-audio').magnificPopup({
                type: 'inline',
                titleSrc: 'title',
                mainClass: 'mfp-audio',
                fixedContentPos: false,
                callbacks: {
                    open: function() {
                        if(audioJSOpened == false){
                            AudioJS.setup();
                            audioJSOpened = true;
                        }
                        var vid = this.content.selector;
                        var getvid = vid.replace('#','');
                        //history.pushState("object or string", "Audio", ""+window.location.href+"?aid="+getvid+"");
                        //Reset the starting time to 0 
                        jQuery(".audio-js")[0].currentTime = 0;
                        jQuery(".audio-js")[0].play();
                    },
                    close: function() {
                        jQuery(".audio-js")[0].pause();
                        //var d_astate =  window.location.href.split("?")[0];
                        //history.pushState(null, null, d_astate);
                    }
                },
                closeMarkup: '<span class="mfp-close"></span>'
            });

            // var aType = getUrlVars()["aid"];

            // if (aType){
            //     jQuery('.'+aType+'').magnificPopup({
            //         type: 'inline',
            //         titleSrc: 'title',
            //         mainClass: 'mfp-audio',
            //         fixedContentPos: false,
            //         callbacks: {
            //             open: function() {
            //                 jQuery(".audio-js")[0].play();
            //             },
            //             close: function() {
            //                 jQuery(".audio-js")[0].pause();
            //                 var d_vstate =  window.location.href.split("?")[0];
            //                 history.pushState(null, null, d_vstate);
            //             }
            //         },
            //         closeMarkup: '<span class="mfp-close"></span>'
            //     }).magnificPopup('open');
            // }

            // var single_audio = jQuery('.single_audio').length;
            // if (single_audio){
            //     var single_aid = jQuery('.stitle').html();
            //     jQuery('.'+single_aid+'').magnificPopup({
            //         type: 'inline',
            //         titleSrc: 'title',
            //         mainClass: 'mfp-audio',
            //         fixedContentPos: false,
            //         callbacks: {
            //             open: function() {
            //                 jQuery(".audio-js")[0].play();
            //             },
            //             close: function() {
            //                 document.location.href = 'http://'+window.location.host+'/audio';                    
            //             }
            //         },
            //         closeMarkup: '<span class="mfp-close"></span>'
            //     }).magnificPopup('open');
            // }
        }
    };    
});

