// /**
//  * Theme: Sesame Street
//  * 
//  * Javascript for touch-enabled carousels and smooth scrolling internal links.
//  *
//  * @package sesame-street
//  */
// (function($) {

//     $(document).ready(function() {
//         // AudioJS.setup();
//         /* getting viewport width */
//         var responsive_viewport = $(window).width();
//         var limit = 50;
//         /* if is greater than 768 */
//         if (responsive_viewport > 800 && responsive_viewport <= 1170) {
//             limit = 6;
//         }
//         if (responsive_viewport > 1170) {
//             limit = 8;
//         }
//         if (responsive_viewport >= 1470) {
//             limit = 10;
//         }
//         $('.smoothscroll').click(function() {
//             var target = $(this.hash);
//             var offset = $('body').css('padding-top');
//             if (offset) offset = offset.replace('px', '');
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             if (target.length) {
//                 $('html,body').animate({
//                     scrollTop: (target.offset().top - offset)
//                 }, 1000);
//                 return false;
//             }
//         });
//         $(".imgdiv").click(function() {
//             $('.image_content').hide();
//             $(this).find('.image_content').show();
//         });
//         $(".close").click(function() {
//             $(this).parent('div').fadeOut();
//         });

//         // $(".popup-video").click(function() {
//         //     $.magnificPopup.close();
//         // });
//         // $(".popup-audio").click(function() {
//         //    var magnificPopup = $.magnificPopup.instance; 
//         //     magnificPopup.close(); 
//         // });
//         // $(".popup-games").click(function() {
//         //     $.magnificPopup.close();
//         // });
//         $(".popup-activity").click(function() {
//             $.magnificPopup.close();
//         });

//         var url=document.location.href;
//         var mainurl=url.split("?");
//         var location = window.history.location || window.location;
//         var domainurl = window.location.href.replace('#','');
//         // $('.popup-video').magnificPopup({
//         //     type: 'inline',
//         //     mainClass: 'mfp-video',
//         //     callbacks: {
//         //         open: function() {
//         //             var vid = this.content.selector;
//         //             var getvid = vid.replace('#','');
                    
//         //             history.pushState("object or string", "Video", ""+domainurl+"?vid="+getvid+"");
//         //             $(".video-js")[0].player.play();
//         //         },
//         //         close: function() {
//         //             var d_vstate =  domainurl.split("?")[0];
//         //             history.pushState(null, null, d_vstate);
//         //         }
//         //     },
//         //     midClick: true,
//         //     enableEscapeKey:false,
//         //     fixedContentPos: true,
//         //     closeMarkup: '<span class="mfp-close"></span>'
//         // });

//         // $('.popup-audio').magnificPopup({
//         //     type: 'inline',
//         //     titleSrc: 'title',
//         //     mainClass: 'mfp-audio',
//         //     fixedContentPos: false,
//         //     callbacks: {
//         //         open: function() {
//         //             var vid = this.content.selector;
//         //             var getvid = vid.replace('#','');
//         //             history.pushState("object or string", "Audio", ""+window.location.href+"?aid="+getvid+"");
//         //             $(".audio-js")[0].play();
//         //         },
//         //         close: function() {
//         //             $(".audio-js")[0].pause();
//         //             var d_astate =  window.location.href.split("?")[0];
//         //             history.pushState(null, null, d_astate);
//         //         }
//         //     },
//         //     closeMarkup: '<span class="mfp-close"></span>'
//         // });

//         $('.popup-activity').magnificPopup({
//             type: 'inline',
//             callbacks: {
//                 open: function() {
//                     var vid = this.content.selector;
//                     var getvid = vid.replace('#','');
//                     history.pushState("object or string", "Activity", ""+window.location.href+"?acid="+getvid+"");
//                 },
//                 close: function() {
//                     var d_acstate =  window.location.href.split("?")[0];
//                     history.pushState(null, null, d_acstate);
//                 }
//             },
//             titleSrc: 'title',
//             closeMarkup: '<span class="mfp-close"></span>',
//             mainClass: 'mfp-activity' // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
//         });




//         // $('.popup-games').magnificPopup({
//         //     disableOn: function() {
//         //     // Detect here whether you want to show the popup
//         //     // return true if you want
//         //     if($(window).width() <= 1024) {
//         //         return false;
//         //     }
//         //     return true;
//         //     },
//         //     type: 'iframe',
//         //     mainClass: 'mfp-games',
//         //     callbacks: {
//         //         close: function() {
//         //             var d_acstate =  window.location.href.split("?")[0];
//         //             history.pushState(null, null, d_acstate);
//         //         }
//         //     },
            
//         //     removalDelay: 160,
//         //     preloader: false,
//         //     fixedContentPos: false,
//         //     closeMarkup: '<span class="mfp-close"></span>'
//         // });

//         // $(".popup-games").click(function() {
//         //     if (responsive_viewport > 1024) {
//         //     var getgameid = $(this).attr('id');
//         //     history.pushState("object or string", "Activity", ""+window.location.href+"?gid="+getgameid+"");
//         //     }
//         // });



//         /********** SEARCH ACTION **********/

//         $("li.search a").click(function() {

//             $(".header_search").slideToggle();
//             if ($(".searchlink span").hasClass("searchicon")) {
//                 $(".searchlink span").removeClass('searchicon').addClass('closeicon');
//                 $("#s").focus();
                
//             } else {
//                 $(".searchlink span").removeClass('closeicon').addClass('searchicon');
//                 $('#s').css('border','');
//             }

//         });

//         $("#searchbtn").click(function() {
//             input_value = $.trim($('#s').val());
//             if (input_value == '') {
//                 $('#s').css('border', '1px solid red');
//                 return false; //Does not submit the form 
//             } else {
//                 $('#s').css('border', 'none');
//                 return true;
//             }
//         });

//         function getUrlVars() {
//             var vars = {};
//             var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
//                 function(m, key, value) {
//                     vars[key] = value;
//                 });
//             return vars;
//         }   

//         $('.searchloop').mixItUp({
//             load: {
//                 page: 1
//             },

//             pagination: {
//                 limit: limit,
//                 loop: false,
//                 generatePagers: true,
//                 maxPagers: 5,
//                 pagerClass: '',
//                 prevButtonHTML: '<div class="arrow-left"></div>',
//                 nextButtonHTML: '<div class="arrow-right"></div>'
//             },

//             selectors: {
//                 pagersWrapper: '.pager-list',
//                 pager: '.pager'
//             }
//         });

        
//         var fType = getUrlVars()["vid"];

//         if (fType){
//             $('.'+fType+'').magnificPopup({
//                 type: 'inline',
//                 mainClass: 'mfp-video',
//                 callbacks: {
//                     open: function() {
//                         $(".video-js")[0].player.play();
//                     },
//                     close: function() {
//                         var d_vstate =  window.location.href.split("?")[0];
//                         history.pushState(null, null, d_vstate);
//                     }
//                 },
//                 midClick: true,
//                 fixedContentPos: true,
//                 enableEscapeKey:false,
//                 closeMarkup: '<span class="mfp-close"></span>'
//             }).magnificPopup('open');
//         }

//          var single_video = $('.single_video').length;
//         if (single_video){
//             var single_vid = $('.stitle').html();
//             $('.'+single_vid+'').magnificPopup({
//                 type: 'inline',
//                 mainClass: 'mfp-video',
//                 callbacks: {
//                     open: function() {
//                         //$(".video-js")[0].player.play();
//                     },
//                     close: function() {
//                        document.location.href = 'http://'+window.location.host+'/video';
//                     }
//                 },
//                 midClick: true,
//                 fixedContentPos: true,
//                 enableEscapeKey:false,
//                 closeMarkup: '<span class="mfp-close"></span>'
//             }).magnificPopup('open');
//         }

//         // var aType = getUrlVars()["aid"];
//         // if (aType){
//         //     $('.'+aType+'').magnificPopup({
//         //         type: 'inline',
//         //         titleSrc: 'title',
//         //         mainClass: 'mfp-audio',
//         //         fixedContentPos: false,
//         //         callbacks: {
//         //             open: function() {
//         //                 $(".audio-js")[0].play();
//         //             },
//         //             close: function() {
//         //                 $(".audio-js")[0].pause();
//         //                 var d_vstate =  window.location.href.split("?")[0];
//         //                 history.pushState(null, null, d_vstate);
//         //             }
//         //         },
//         //         closeMarkup: '<span class="mfp-close"></span>'
//         //     }).magnificPopup('open');
//         // }

//         // var single_audio = $('.single_audio').length;
//         // if (single_audio){
//         //     var single_aid = $('.stitle').html();
//         //     $('.'+single_aid+'').magnificPopup({
//         //         type: 'inline',
//         //         titleSrc: 'title',
//         //         mainClass: 'mfp-audio',
//         //         fixedContentPos: false,
//         //         callbacks: {
//         //             open: function() {
//         //                 $(".audio-js")[0].play();
//         //             },
//         //             close: function() {
//         //                 document.location.href = 'http://'+window.location.host+'/audio';                    
//         //             }
//         //         },
//         //         closeMarkup: '<span class="mfp-close"></span>'
//         //     }).magnificPopup('open');
//         // }


//          var gType = getUrlVars()["gid"];
//             if (gType){
//                 var r_game = $('.g_'+gType+' a').attr('href');
//                 //alert(gType);
//                 $('.'+gType+'').magnificPopup({
//                     callbacks: {
//                     close: function() {
//                         var d_vstate =  window.location.href.split("?")[0];
//                         history.pushState(null, null, d_vstate);
//                     }
//                     },
//                     disableOn: function() {
//                     // Detect here whether you want to show the popup
//                     // return true if you want
//                     if($(window).width() <= 1024) {
//                         document.location.href = r_game; 
//                     }
//                     return true;
//                     },
//                     type: 'iframe',
//                     mainClass: 'mfp-games',
//                     removalDelay: 160,
//                     preloader: false,
//                     fixedContentPos: false,
//                     closeMarkup: '<span class="mfp-close"></span>'
//                 }).magnificPopup('open');
//             }

//         var single_games = $('.single_games').length;
//         if (single_games){
//             var single_gid = $('.stitle').html();
//             var redirect_game = $('.gamesiframe a').attr('href');
//             $('.'+single_gid+'').magnificPopup({
//                     callbacks: {
//                     close: function() {
//                          document.location.href = 'http://'+window.location.host+'/games';   
//                     }
//                     },
//                     disableOn: function() {
//                     // Detect here whether you want to show the popup
//                     // return true if you want
//                     if($(window).width() <= 1024) {
//                         document.location.href = redirect_game;   
//                     }
//                     return true;
//                     },
//                     type: 'iframe',
//                     mainClass: 'mfp-games',
//                     removalDelay: 160,
//                     preloader: false,
//                     fixedContentPos: false,
//                     closeMarkup: '<span class="mfp-close"></span>'
//                 }).magnificPopup('open');
//             }

//         var acType = getUrlVars()["acid"];
//             //alert(acType);
//             if (acType){
//             $('.'+acType+'').magnificPopup({
//                 type: 'inline',
//                 callbacks: {
//                     close: function() {
//                         var d_vstate =  window.location.href.split("?")[0];
//                         history.pushState(null, null, d_vstate);
//                     }
//                 },
//                 titleSrc: 'title',
//                 closeMarkup: '<span class="mfp-close"></span>',
//                 mainClass: 'mfp-activity' // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
//             }).magnificPopup('open');
//             }

//         var single_activity = $('.single_activity').length;
//         if (single_activity){
//             var single_acid = $('.stitle').html();
//             $('.'+single_acid+'').magnificPopup({
//                 type: 'inline',
//                 callbacks: {
//                     close: function() {
//                         document.location.href = 'http://'+window.location.host+'/activities';   
//                     }
//                 },
//                 titleSrc: 'title',
//                 closeMarkup: '<span class="mfp-close"></span>',
//                 mainClass: 'mfp-activity' // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
//             }).magnificPopup('open');
//             }


//         // var myElement = document.getElementById('searchloop');

//         // create a simple instance
//         // by default, it only adds horizontal recognizers
//         // var mc = new Hammer(myElement);

//         // listen to events...
//         // mc.on("panleft", function(ev) {
//             //console.log(ev.type +" gesture detected.");
//             // $('.searchloop').mixItUp('nextPage');
//         // });

//         // listen to events...
//         // mc.on("panright", function(ev) {
//             //console.log(ev.type +" gesture detected.");
//         //     $('.searchloop').mixItUp('prevPage');
//         // });

//     });

// })(jQuery);