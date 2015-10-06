/*
Controller to 
	set & change the category type
		on page load & click action
*/
sesameControllers.controller('sesameController', function ($scope, $state, $rootScope, $window, $timeout, getData, $sce, Env) {
	$rootScope.type = 'all';
	$scope.$sce = $sce;
	$rootScope.errorPage = false;

	$rootScope.env = Env;
	$scope.countries = {};

	$scope.$watch("env.currentCountry", function(newVal, oldVal){
		if(newVal != undefined && newVal != ""){
			$scope.countries.selectedCountry = Env.currentCountry;
			resetCountryStyles();
		}
	});
	
	$scope.onCountryChange = function(){
		if(window.plugins)
      		window.plugins.spinnerDialog.show(null, null, true);
		Env.currentCountry = $scope.countries.selectedCountry;
		console.log('oncountrychange');
		console.log(Env.currentCountry);
		resetCountryContent();
		resetCountryStyles();
		if(window.plugins)
			window.plugins.spinnerDialog.hide();
		// $window.location.reload();
		//  alert(reloadOnRetry);
		// reloadOnRetry = false;
		//  alert(reloadOnRetry);
	};

	function resetCountryContent(){
		Env.prevURL = Env.baseURL;
        Env.baseURL = $scope.countries.selectedCountry.api_url+'/api';
        $rootScope.env = Env;
        if($rootScope.errorPage) {
        	$rootScope.errorPage = false;
        	jQuery('footer').show();
        	$state.go($state.previous.name, {}, {reload: true, reloadOnRetry : false});
        	
        } else {
        	reloadOnRetry = true;
	        // alert(reloadOnRetry);
	        $state.go($state.current, {}, {reload: true, reloadOnRetry : false});
        }
         
        $rootScope.Menus = [];
        $scope.Footer = [];  
        $rootScope.getMenuData();
        // alert(reloadOnRetry);
	}

	function resetCountryStyles(){
		jQuery("#theme-backend-css").remove();
		jQuery("#videojs-plugin-css").remove();
		// $location.reload();


		jQuery("head").append('<link href="'+Env.currentCountry.api_url+"/wp-content/themes/sesamestreet/theme-backend.css.php?ver=20150225"+'" rel="stylesheet" id="theme-backend-css">');
		jQuery("head").append('<link href="'+Env.currentCountry.api_url+"/wp-content/plugins/videojs-html5-video-player-for-wordpress/plugin-styles.css?ver=4.1"+'" rel="stylesheet" id="videojs-plugin-css">');
	}


	$scope.searchitem = function(){
		console.log($scope.search_key);
		$state.go('search', {stag:$scope.search_key});
	}


	$scope.onCategoryClick = function(type){
		if(window.plugins)
      		window.plugins.spinnerDialog.show(null, null, true);
		$rootScope.type = type;
		$timeout(function(){
			if(window.plugins)
				window.plugins.spinnerDialog.hide();
		}, 250);
	};

	$rootScope.getMenuData = function (){
		if(window.plugins)
      		window.plugins.spinnerDialog.show(null, null, true);
      	
		getData.gethome()
			.then(function success(resp) {
				if(window.plugins)
					window.plugins.spinnerDialog.hide();
				$rootScope.Menus = resp.data.data.navigation; 
				$scope.Footer = resp.data.footer;
				console.log($rootScope.Menus); 
				console.log($scope.Footer);
				for(var i=0; i<$scope.Footer.other_links.links.length; i++) {
					$scope.Footer.other_links.links[i].links = $sce.trustAsResourceUrl($scope.Footer.other_links.links[i].links);	
				}
			});	
	};

	$rootScope.getMenuData();



    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
	    $state.previous = fromState;
	    $state.fromParams = fromParams;
      	if(window.plugins)
        	window.plugins.spinnerDialog.hide();
    });


    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    	if(window.plugins)
      		window.plugins.spinnerDialog.show(null, null, true);

      	if(toState.name == "error" && !$rootScope.errorPage){
	        event.preventDefault();
	        $state.go('home');
	    }
    });
});