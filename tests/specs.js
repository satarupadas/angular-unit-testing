describe('Unit Testing', function() {
    beforeEach(module('sesameFactories'));
    beforeEach(module('sesameApp')); //load module

    var MainCtrl, $scope;
    var returnData = {
        "status": true,
        "msg": "videos found",
        "code": 200,
        "data": [
            {
            "id": "999999",
            "title": "",
            "name": "video1101",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/00100420118MP4_HD750K.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/MetLifeComic_04_panel_6.png",
            "category": []
            },
            {
            "id": "377",
            "title": "Elmo's Got the Moves",
            "name": "video377",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/00100420118MP4_HD750K.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/sesameDSD_characterpageMuppetOverlayTEMPLATE_0000s_0000s_0001_EGM_2.jpg",
            "category": []
            },
            {
            "id": "376",
            "title": "J Jacket Song",
            "name": "video376",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/00100420118MP4_HD750K-1.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/sesameDSD_characterpageMuppetOverlayTEMPLATE_0000s_0000s_0003_JACKET_1.jpg",
            "category": []
            },
            {
            "id": "375",
            "title": "3 Jars",
            "name": "video375",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/00100420118MP4_HD750K1.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/sesameDSD_characterpageMuppetOverlayTEMPLATE_0000s_0000s_0002_3Jars_2.jpg",
            "category": []
            },
            {
            "id": "374",
            "title": "Letter G Song",
            "name": "video374",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/sesameDSD_characterpageMuppetOverlayTEMPLATE_0000s_0000s_0004_LETTERG_3.jpg",
            "category": []
            },
            {
            "id": "270",
            "title": "We Can Do It- Español",
            "name": "video270",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/We-Can-Do-It_Spanish_Video.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/WCDI.jpg",
            "category": []
            },
            {
            "id": "268",
            "title": "Peter Dinklage Sings",
            "name": "video268",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ML_TEST6.jpg",
            "category": [
            {
            "cat_ID": 1,
            "cat_name": "Content"
            },
            {
            "cat_ID": 2,
            "cat_name": "Music"
            }
            ]
            },
            {
            "id": "267",
            "title": "Change the World",
            "name": "video267",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangetheWorld.jpg",
            "category": [
            {
            "cat_ID": 1,
            "cat_name": "Content"
            },
            {
            "cat_ID": 2,
            "cat_name": "Music"
            }
            ]
            },
            {
            "id": "266",
            "title": "Rosita's Abuela Arrives",
            "name": "video266",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ML_TEST5.jpg",
            "category": [
            {
            "cat_ID": 3,
            "cat_name": "Animated Episodes"
            },
            {
            "cat_ID": 2,
            "cat_name": "Music"
            }
            ]
            },
            {
            "id": "264",
            "title": "Leela's Cell Phone Addiction",
            "name": "video264",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ML_TEST4.jpg",
            "category": [
            {
            "cat_ID": 3,
            "cat_name": "Animated Episodes"
            },
            {
            "cat_ID": 2,
            "cat_name": "Music"
            }
            ]
            }
        ],
        "pageinfo": {
            "title": "VIDEOS",
            "name": "video",
            "icon": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/video.png"
        },
        "footer": {
            "other_links": {
                "label": "otros enlaces",
                "links": [
                    {
                    "label": "السمسم الموقع الرسمي للشارع",
                    "links": "http://www.sesamestreet.org/home"
                    },
                    {
                    "label": "Sesame Workshop",
                    "links": "http://www.sesameworkshop.org/"
                    },
                    {
                    "label": "MetLife Foundation",
                    "links": "https://www.metlife.com/metlife-foundation/index.html"
                    },
                    {
                    "label": "MetLife Employees",
                    "links": "http://sesameapi.jumpcatch.com/metlife-employees"
                    },
                    {
                    "label": "Local Stations",
                    "links": "http://pbskids.org/tvschedules/stationfinder.html"
                    },
                    {
                    "label": "Terms of Use",
                    "links": "http://sesameapi.jumpcatch.com/terms-of-use"
                    }
                ]
            },
            "social_links": {
                "label": "Follow",
                "links": [
                    {
                    "label": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/facebook1.png",
                    "links": "https://www.facebook.com/SesameStreet"
                    },
                    {
                    "label": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/twitter1.png",
                    "links": "https://twitter.com/sesamestreet"
                    },
                    {
                    "label": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/instagram1.png",
                    "links": "http://instagram.com/sesamestreet"
                    },
                    {
                    "label": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/youtube1.png",
                    "links": "https://www.youtube.com/user/SesameStreet"
                    },
                    {
                    "label": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/pinterest1.png",
                    "links": "https://www.pinterest.com/sesamestreet/"
                    }
                ]
            },
            "app_links": {
                "label": "In The Store"
            },
            "privacy_links": {
                "label": "Privacy Policy",
                "links": "/privacy-policy/"
            },
            "copyrights": "2015 Sesame Workshop"
        },
        "static_labels": {
            "all": "All",
            "search_results": "Search Results for",
            "no_results": "No results found",
            "back_button": "Back",
            "download_button": "Download"
        },
        "metlife": {
            "metlife_text": "SPONSORED BY",
            "metlife_logo": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/metlife_logo.png",
            "metlife_button_text": "Visit Site",
            "metlife_link": "https://www.metlife.com/about/corporate-responsibility/metlife-foundation/index.html"
        }
    };


    /* Controller Unit Testing */
    describe('Controller : VideoController with spies', function() {
        beforeEach(inject(function($controller, $rootScope, getData) {
            $scope = $rootScope.$new();

            spyOn(getData, 'getvideo').and.callFake(function() {
                return {
                  then: function(callback) {
                    // console.log(callback);
                    return callback(returnData);}
                };
            });
            // console.log($scope.PageInfo);
            MainCtrl = $controller('VideoController', { $scope: $scope, getData: getData });
        }));

        it('should set data at controller level', function() {
            // console.log('$scope.Videos');
            // console.log($scope.Videos);
            // console.log(returnData.data);
            // $scope.$apply();
            // expect(getData.getvideo).toHaveBeenCalled();
            expect($scope.Videos).toEqual(returnData.data);
        });
  
    });

    /* Controller Unit Testing */
    describe('Controller : VideoController with httpBackend', function() {
        var data, scope, factory, httpBackend;

        beforeEach(inject(function($controller, $rootScope, _$httpBackend_, getData) {
            scope = $rootScope.$new();
            factory = getData;
            httpBackend = _$httpBackend_;


            MainCtrl = $controller('VideoController', { $scope: $scope, getData: getData });
            
        }));

        it('should return value set at controller level', function() {
            httpBackend.expectGET('http://sesameapi.jumpcatch.com/api/videos/').respond(returnData);
            // httpBackend.flush();
            expect(scope.innermenu).toBe(true);
            // $scope.$apply();
            // expect($scope.Videos).toBe(returnData.data);
        });
    });


    /* Factory Unit Testing */
    describe('Service : getData with http call', function() {

        var service, httpBackend, data;

        // beforeEach(module('sesameApp')); //load module

        beforeEach(inject(function(getData, _$httpBackend_) {
            service = getData;
            httpBackend = _$httpBackend_;
        }));

        it ('should be loaded', function() {
            expect(service).toBeDefined();
        });

        it ('should return get data when calling getvideo', function() {
            httpBackend.expectGET('http://sesameapi.jumpcatch.com/api/videos/').respond(returnData);

            service.getvideo().then(function(result) {
                data = result;
                // console.log(data.data);
                // console.log(returnData);
            });

            httpBackend.flush();

            expect(data.data).toEqual(returnData);
        });
        
        afterEach(function() {
          // make sure all requests where handled as expected.
          httpBackend.verifyNoOutstandingRequest();
          httpBackend.verifyNoOutstandingExpectation();
        });
    });

});




/* Directive Unit Testing */
describe('Directive: sesamePopVideo', function() {
    var rootscope,
        elem,
        compile,
        directive;
        // isvideoOpen;

    beforeEach(module('sesameApp')); //load module


    beforeEach(inject(function (_$compile_,  _$rootScope_) {
        compile = _$compile_;
        rootscope =  _$rootScope_;
    }));

    it('directive function executed', function(){
        var element = compile("<sesame-pop-video></sesame-pop-video>")(rootscope);    /* Directive with restrict E*/
        // var element = compile('<div class="sesame-pop-video"></div>')(rootscope);     /* Directive with restrict C*/ 
        // var element = compile("<div sesame-pop-video></div>")(rootscope);             /* Directive with restrict A*/
        // console.log(element);
        
        rootscope.$digest();
        element.scope().onVideoClick();
        expect(isvideoOpen).toBe(true);

    })
});


/* Directive unit Testing */
describe("'Directive: extTemplate'", function() {
    var element, scope, $compile;
 
    beforeEach(module('sesameApp')); // Name of the module my directive is in
    beforeEach(module('templates'));

    beforeEach(inject(function(_$compile_, $rootScope) {
        scope = $rootScope;
        $compile = _$compile_;
    }));
 
    it("external template rendered", function () {
        var element = $compile("<ext-template></ext-template>")(scope); 
        // console.log(element);
        scope.$digest();
        expect(element.scope().name).toBe('abc');
    });
});



/* Filter Unit Testing */
describe('Filter: category', function() {
    var $filter,
        collection,
        expectedResult,
        result,
        type;

    beforeEach(module('sesameApp')); //load module


    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_;
        type = 'Music';
        collection = [
            {
            "id": "1101",
            "title": "",
            "name": "video1101",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/00100420118MP4_HD750K.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/MetLifeComic_04_panel_6.png",
            "category": []
            },
            {
            "id": "377",
            "title": "Elmo's Got the Moves",
            "name": "video377",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/00100420118MP4_HD750K.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/sesameDSD_characterpageMuppetOverlayTEMPLATE_0000s_0000s_0001_EGM_2.jpg",
            "category": []
            },
            {
            "id": "376",
            "title": "J Jacket Song",
            "name": "video376",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/00100420118MP4_HD750K-1.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/sesameDSD_characterpageMuppetOverlayTEMPLATE_0000s_0000s_0003_JACKET_1.jpg",
            "category": []
            },
            {
            "id": "375",
            "title": "3 Jars",
            "name": "video375",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/00100420118MP4_HD750K1.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/sesameDSD_characterpageMuppetOverlayTEMPLATE_0000s_0000s_0002_3Jars_2.jpg",
            "category": []
            },
            {
            "id": "374",
            "title": "Letter G Song",
            "name": "video374",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/sesameDSD_characterpageMuppetOverlayTEMPLATE_0000s_0000s_0004_LETTERG_3.jpg",
            "category": []
            },
            {
            "id": "270",
            "title": "We Can Do It- Español",
            "name": "video270",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/We-Can-Do-It_Spanish_Video.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/WCDI.jpg",
            "category": []
            },
            {
            "id": "268",
            "title": "Peter Dinklage Sings",
            "name": "video268",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ML_TEST6.jpg",
            "category": [
                {
                "cat_ID": 1,
                "cat_name": "Content"
                },
                {
                "cat_ID": 2,
                "cat_name": "Music"
                }
                ]
            },
            {
            "id": "267",
            "title": "Change the World",
            "name": "video267",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangetheWorld.jpg",
            "category": [
                {
                "cat_ID": 1,
                "cat_name": "Content"
                },
                {
                "cat_ID": 2,
                "cat_name": "Music"
                }
                ]
            },
            {
            "id": "266",
            "title": "Rosita's Abuela Arrives",
            "name": "video266",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ML_TEST5.jpg",
            "category": [
                {
                "cat_ID": 3,
                "cat_name": "Animated Episodes"
                },
                {
                "cat_ID": 2,
                "cat_name": "Music"
                }
                ]
            },
            {
            "id": "264",
            "title": "Leela's Cell Phone Addiction",
            "name": "video264",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ML_TEST4.jpg",
            "category": [
                {
                "cat_ID": 3,
                "cat_name": "Animated Episodes"
                },
                {
                "cat_ID": 2,
                "cat_name": "Music"
                }
                ]
            }
        ]
    }));

    expectedResult = [
          {
            "id": "268",
            "title": "Peter Dinklage Sings",
            "name": "video268",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ML_TEST6.jpg",
            "category": [
                {
                "cat_ID": 1,
                "cat_name": "Content"
                },
                {
                "cat_ID": 2,
                "cat_name": "Music"
                }
                ]
            },
            {
            "id": "267",
            "title": "Change the World",
            "name": "video267",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangetheWorld.jpg",
            "category": [
                {
                "cat_ID": 1,
                "cat_name": "Content"
                },
                {
                "cat_ID": 2,
                "cat_name": "Music"
                }
                ]
            },
            {
            "id": "266",
            "title": "Rosita's Abuela Arrives",
            "name": "video266",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ML_TEST5.jpg",
            "category": [
                {
                "cat_ID": 3,
                "cat_name": "Animated Episodes"
                },
                {
                "cat_ID": 2,
                "cat_name": "Music"
                }
                ]
            },
            {
            "id": "264",
            "title": "Leela's Cell Phone Addiction",
            "name": "video264",
            "video_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ChangeTheWorld.mp4",
            "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ML_TEST4.jpg",
            "category": [
                {
                "cat_ID": 3,
                "cat_name": "Animated Episodes"
                },
                {
                "cat_ID": 2,
                "cat_name": "Music"
                }
                ]
            }
    ]

    it('Filter Category', function(){
        // Arrange.

        // Act.
        result = $filter('category')(collection, type);
        // console.log(result);
        // console.log(expectedResult);

        // Assert.
        // expect(result).toEqual('HELLO WORLD');
        expect(result).toEqual(expectedResult);

    })
});
