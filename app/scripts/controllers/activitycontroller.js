sesameControllers.controller('ActivityController', function ($scope, $rootScope, $sce, $timeout, getData, categoryFilter,$state, Env) {
	$scope.Activities = {};
	$scope.$sce = $sce;
	$scope.categoryList = [];
	$scope.type = 'all';
	$rootScope.innermenu = true;

	$scope.getActivityData = function (){
		getData.getactivity()
			.then(function success(resp) {

				$scope.Activities = resp.data.data;
				$scope.PageInfo = resp.data.pageinfo;
				$scope.Metlife = resp.data.metlife;
				$scope.StaticLabels = resp.data.static_labels;

				for(var i=0; i<$scope.Activities.length; i++) {
					$scope.Activities[i].description =  $sce.trustAsHtml($scope.Activities[i].description);
					for(var k=0; k<$scope.Activities[i].category.length; k++){
						$scope.categoryList.push($scope.Activities[i].category[k].cat_name);
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
				},200);
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

	$scope.getActivityData();

});