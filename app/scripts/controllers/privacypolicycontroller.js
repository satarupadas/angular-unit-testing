sesameControllers.controller('PrivacyPolicyController', function ($scope, $rootScope, $sce, $timeout, getData, categoryFilter,$state, Env) {
	$scope.PrivacyPolicy = {};
	$scope.$sce = $sce;
	$rootScope.innermenu = true;

	$scope.getPrivacyPolicyData = function (){
		getData.getprivacypolicy()
			.then(function success(resp) {
				jQuery('html, body').animate({
                    scrollTop: 0
                }, 10);
				$scope.PrivacyPolicy = resp.data.data;
				$scope.Metlife = resp.data.metlife;
				
				$scope.PrivacyPolicy.page_content =  $sce.trustAsHtml($scope.PrivacyPolicy.page_content);
				$timeout(function(){
					jQuery('#primary .response-content').find('a').addClass('external-link-index');
					var all = jQuery('#primary').find('a');
					jQuery(all).each(function(index,item){
						var url = jQuery(item).attr('href');
						jQuery(this).attr('data-url', url);
					});
	  				jQuery('.content, .navitems, .searchicon, .parenticon').redraw();
					if(window.plugins)
						window.plugins.spinnerDialog.hide();
				},100)
			},
			function(error){
				/* For No data coming from Server */
				if( $rootScope.offline ) {
					return;
				}
				
				if(window.plugins)
					window.plugins.spinnerDialog.hide();
				// Env.baseURL = Env.prevURL;
				// $rootScope.env = Env;
				$rootScope.errorPage = true;
				$state.go('error', {}, {reload: true, reloadOnRetry : false});
			});
	};

	$scope.getPrivacyPolicyData();

});