sesameControllers.controller('VideoController', function ($scope, $rootScope, $http, $sce, $timeout, getData, categoryFilter,$state, Env) {
	$scope.Videos = {};
	$scope.$sce = $sce;
	$scope.categoryList = [];
	$rootScope.type = 'all';
	$rootScope.innermenu = true;

	$scope.getVideoData = function (){
		getData.getvideo()
			.then(function success(resp) {
				$scope.Videos = resp.data.data;
				$scope.PageInfo = resp.data.pageinfo;
				$scope.Metlife = resp.data.metlife;
				$scope.StaticLabels = resp.data.static_labels;

				for(var i=0; i<$scope.Videos.length; i++) {
					$scope.Videos[i].video_url = $sce.trustAsResourceUrl($scope.Videos[i].video_url);
					for(var k=0; k<$scope.Videos[i].category.length; k++){
						$scope.categoryList.push($scope.Videos[i].category[k].cat_name);
					}
						
				}

				$timeout(function(){
	  				jQuery('.content, .navitems, .searchicon, .parenticon').redraw();
					if(window.plugins)
						window.plugins.spinnerDialog.hide();
				}, 100);

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


	$scope.getVideoData();

});