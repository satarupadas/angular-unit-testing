sesameFactories.factory('getData', function ($http, Env) {
	'use strict';
	// return {
		var sesamedata = {
			getvideo: function () {
				// var url = (window.location.hostname == "localhost")  ? Env.proxyURL+"?baseurl="+Env.baseURL+"&url="+encodeURIComponent("videos") : Env.baseURL+'/videos';
				// return $http.get(Env.baseURL+'/videos')
				return $http.get(Env.baseURL+'/videos/')
					.then(function (resp){
						return resp;
					});
			},
			getaudio: function () {
				return $http.get(Env.baseURL+'/audios/')
					.then(function (resp){
						return resp;
					});
			},
			getactivity: function () {
				return $http.get(Env.baseURL+'/activity/')
					.then(function (resp){
						return resp;
					});
			},
			getgame: function () {
				return $http.get(Env.baseURL+'/games/')
					.then(function (resp){
						return resp;
					});
			},
			getcharacter: function () {
				return $http.get(Env.baseURL+'/characters/')
					.then(function (resp){
						return resp;
					});
			},
			getparent: function () {
				return $http.get(Env.baseURL+'/parents/')
					.then(function (resp){
						return resp;
					});
			},
			gethome: function () {
				return $http.get(Env.baseURL+'/home/')
					.then(function (resp){
						return resp;
					});
			},
			getprivacypolicy: function () {
				return $http.get(Env.baseURL+'/privacy-policy/')
					.then(function (resp){
						return resp;
					});
			},
			getterms: function () {
				return $http.get(Env.baseURL+'/terms-of-use/')
					.then(function (resp){
						return resp;
					});
			},
			getmetemployee: function () {
				return $http.get(Env.baseURL+'/metlife-employees/')
					.then(function (resp){
						return resp;
					});
			},
			getsearch: function (key) {
				return $http.get(Env.baseURL+'/search/?stag='+key)
					.then(function (resp){
						return resp;
					});
			}

		};
		return sesamedata;
	// };
});