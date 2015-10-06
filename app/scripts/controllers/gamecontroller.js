sesameControllers.controller('GameController', function ($scope, $rootScope, $sce, $timeout, getData, categoryFilter,$state, Env) {
	$scope.Games = {};
	$scope.$sce = $sce;
	$scope.categoryList = [];
	$scope.type = 'all';
	$rootScope.innermenu = true;

	$scope.getGameData = function (){
		getData.getgame()
			.then(function success(resp) {
				$scope.Games = resp.data.data;
				$scope.PageInfo = resp.data.pageinfo;
				$scope.Metlife = resp.data.metlife;
				$scope.StaticLabels = resp.data.static_labels;

				for(var i=0; i<$scope.Games.length; i++) {
					$scope.Games[i].file_url = $sce.trustAsResourceUrl($scope.Games[i].file_url);
					for(var k=0; k<$scope.Games[i].category.length; k++){
						$scope.categoryList.push($scope.Games[i].category[k].cat_name);
					}
				}

				$timeout(function(){
	  				jQuery('.content, .navitems, .searchicon, .parenticon').redraw();
	  				if(window.plugins)
						window.plugins.spinnerDialog.hide();
				}, 200);
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

	$scope.getGameData();

});