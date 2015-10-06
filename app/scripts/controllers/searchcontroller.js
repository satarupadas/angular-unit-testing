sesameControllers.controller('SearchController', function ($scope, $rootScope, $http, $sce, $stateParams, $timeout, getData, categoryFilter,$state, Env) {
	$scope.Searches = {};
	$scope.$sce = $sce;
	$scope.categoryList = [];
	$rootScope.type = 'all';
	$rootScope.innermenu = true;
	$scope.stag = $stateParams.stag;

	$scope.getSearchData = function (){
		getData.getsearch($scope.stag)
			.then(function success(resp) {
				$scope.Searches = resp.data.data;
				console.log($scope.Searches);
				$scope.Metlife = resp.data.metlife;
				$scope.StaticLabels = resp.data.static_labels;

				for(var i=0; i<$scope.Searches.length; i++) {
					$scope.Searches[i].description =  $sce.trustAsHtml($scope.Searches[i].description);
					// $scope.Searches[i].file_url = $sce.trustAsResourceUrl($scope.Searches[i].file_url);	
					for(var k=0; k<$scope.Searches[i].category.length; k++){
						$scope.categoryList.push($scope.Searches[i].category[k].cat_name);
					}
						
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


	$scope.getSearchData();

});