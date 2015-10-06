sesameControllers.controller('MetlifeEmployeesController', function ($scope, $rootScope, $sce, $timeout, getData, categoryFilter,$state, Env) {
	$scope.MetLifeEmp = {};
	$scope.$sce = $sce;
	$rootScope.innermenu = true;
	
	$scope.getMetLifeData = function (){
		getData.getmetemployee()
			.then(function success(resp) {
				jQuery('html, body').animate({
                    scrollTop: 0
                }, 10);
				$scope.MetLifeEmp = resp.data.data;
				$scope.Metlife = resp.data.metlife;

				for(var i=0; i<$scope.MetLifeEmp.parents.length; i++) {
					$scope.MetLifeEmp.parents[i].description =  $sce.trustAsHtml($scope.MetLifeEmp.parents[i].description);
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


	$scope.getMetLifeData();

});