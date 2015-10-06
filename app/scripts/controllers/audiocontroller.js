sesameControllers.controller('AudioController', function ($scope, $rootScope, $sce, $timeout, getData, categoryFilter,$state, Env) {
	$scope.Audios = {};
	$scope.$sce = $sce;
	$scope.categoryList = [];
	$scope.type = 'all';
	$rootScope.innermenu = true;

	$scope.getAudioData = function (){
		getData.getaudio()
			.then(function success(resp) {
				$scope.Audios = resp.data.data;
				console.log(angular.toJson(resp.data.data));
				$scope.PageInfo = resp.data.pageinfo;
				$scope.Metlife = resp.data.metlife;
				$scope.StaticLabels = resp.data.static_labels;

				for(var i=0; i<$scope.Audios.length; i++) {
					$scope.Audios[i].audio_url = $sce.trustAsResourceUrl($scope.Audios[i].audio_url);
					for(var k=0; k<$scope.Audios[i].category.length; k++){
						$scope.categoryList.push($scope.Audios[i].category[k].cat_name);
					}
				}
				// AudioJS.setup();

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

	$scope.getAudioData();

});