sesameControllers.controller('CharactersController', function ($scope, $rootScope, $sce, $timeout, getData, categoryFilter,$state, Env) {
	$scope.Characters = {};
	$scope.$sce = $sce;
	$rootScope.innermenu = true;

	$scope.getCharacterData = function (){
		getData.getcharacter()
			.then(function success(resp) {
				$scope.Characters = resp.data.data.character;
				$scope.PageInfo = resp.data.pageinfo;
				$scope.Metlife = resp.data.metlife;
				$scope.StaticLabels = resp.data.static_labels;

				for(var i=0; i<$scope.Characters.length; i++) {
					$scope.Characters[i].default_image = $sce.trustAsResourceUrl($scope.Characters[i].default_image);
					$scope.Characters[i].long_description =  $sce.trustAsHtml($scope.Characters[i].long_description);
					$scope.Characters[i].short_description =  $sce.trustAsHtml($scope.Characters[i].short_description);
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

	$scope.getCharacterData();

});