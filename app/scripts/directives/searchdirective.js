sesameDirectives.directive("sesameSearchDirective", function($rootScope, $cordovaKeyboard) {
    return {
        restrict: "C",
        link: function(scope, elem, attr){ 
        	jQuery(document).on('click','.closeicon',function(){
        		// alert('hi');
				jQuery('#s').val('');
                jQuery('#s').css('border','');
			});

            jQuery(window).on('scroll',function(){
                if(jQuery(window).scrollTop() > 57) {
                    $cordovaKeyboard.close();
                    jQuery('#s').blur();
                }
            });


			$rootScope.$on("$stateChangeSuccess",function(){
	            if (jQuery(".searchlink span, .searchlink a").hasClass("closeicon")) {
	            	jQuery(".header_search").css('display','none');
                    jQuery(".searchlink span").removeClass('closeicon').addClass('searchicon');
                    jQuery('#s').val('');
                    jQuery('#s').css('border','');
                }
			});
        }
    };   
});
sesameDirectives.directive("errorPage", function($rootScope) {
    return {
        restrict: "E",
        templateUrl: 'views/error.html',
        link: function(scope, elem, attr){ 
            jQuery('footer').hide();
            window.plugins.spinnerDialog.hide();
        }
    };   
});