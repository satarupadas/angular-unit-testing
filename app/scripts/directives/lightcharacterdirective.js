sesameDirectives.directive("sesameLightBoxCharacter", function() {
    return {
        restrict: "C",
        link: function(scope, elem, attr){
            jQuery(".imgdiv").click(function() {
                jQuery('.image_content').hide();
                jQuery(this).find('.image_content').show();
                jQuery('html, body').animate({
                    scrollTop: jQuery(this).offset().top
                }, 10);
            });
            jQuery(".close").click(function() {
                jQuery(this).parent('div').fadeOut();
            });
        }
    };
    
});

