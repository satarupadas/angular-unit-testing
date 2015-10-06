sesameControllers.controller('ParentsController', function ($scope, $rootScope, $sce, $timeout, getData, categoryFilter,$state, Env) {
	$scope.AllParentsData = {};
	$scope.Parents = [];
	$scope.$sce = $sce;
	$scope.categoryList = [];
	$rootScope.innermenu = true;

	$scope.getParentData = function (){
		getData.getparent()
			.then(function success(resp) {
				jQuery('html, body').animate({
                    scrollTop: 0
                }, 10);
				$scope.AllParentsData = resp.data.data;
				$scope.Parents = resp.data.data.parents;
				$scope.Metlife = resp.data.metlife;
				
				for(var x=0; x<$scope.Parents.length; x++){
					$scope.Parents[x].description =  $sce.trustAsHtml($scope.Parents[x].description);
				}
				$timeout(function(){
					jQuery('.response-description').find('a').addClass('external-link-index');
					var all = jQuery('#primary').find('a');
					jQuery(all).each(function(index,item){
						var url = jQuery(item).attr('href');
						jQuery(this).attr('data-url', url);
					});
	  				jQuery('.content, .navitems, .searchicon, .parenticon').redraw();
					if(window.plugins)
						window.plugins.spinnerDialog.hide();
				},200)
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

	$scope.getParentData();

});