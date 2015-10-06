sesameControllers.controller('HomeController', function ($scope, $rootScope, $sce, $timeout, getData, categoryFilter, $state, Env) {
	$scope.Home = {};
	$scope.$sce = $sce;
	// $scope.categoryList = [];
	$rootScope.innermenu = false;
	$scope.getHomeData = function (){
		getData.gethome()
			.then(function success(resp) {
				$scope.Home = resp.data.data;
				$scope.Metlife = resp.data.metlife;
				$scope.StaticLabels = resp.data.static_labels;

				for(var i=0; i<$scope.Home.articles.length; i++) { 
					$scope.Home.articles[i].description =  $sce.trustAsHtml($scope.Home.articles[i].description);
					$scope.Home.articles[i].url = $sce.trustAsResourceUrl($scope.Home.articles[i].url);					
				}
				$scope.Home.parents.description =  $sce.trustAsHtml($scope.Home.parents.description);
				$scope.Home.metlife.description =  $sce.trustAsHtml($scope.Home.metlife.description);
				$scope.Home.sesame.description =  $sce.trustAsHtml($scope.Home.sesame.description);

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


	$scope.getHomeData();

});