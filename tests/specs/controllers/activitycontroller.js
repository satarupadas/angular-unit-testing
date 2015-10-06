describe('Unit Testing', function() {
    beforeEach(module('sesameFactories'));
    beforeEach(module('sesameApp')); //load module

    var MainCtrl, $scope;
    var returnData = {'data' : {
        "status": true,
        "msg": "activities found",
        "code": 200,
        "data": [
        {
        "id": "1119",
        "title": "经济情况处于贫困及中下水平的家庭",
        "name": "activity1119777",
        "description": "",
        "download_file": "http://sesameapi.jumpcatch.com/download.php?attachment=808",
        "file_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/VILASESAMO_ALMANAQUEDASCRIANÇAS_INGLES.pdf",
        "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ACTIVITY_0000s_0000s_0002_MetLife_AS_v03.jpg",
        "category": [],
        "gallery": [
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/MetLifeComic_04_panel_8.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/MetLifeComic_04_panel_7.png"
        ]
        },
        {
        "id": "803",
        "title": "Sharing Is Caring Comic",
        "name": "activity803",
        "description": "<p>Lola learns all about sharing with her friend Elmo in this cute comic!</p>\n",
        "download_file": "http://sesameapi.jumpcatch.com/download.php?attachment=805",
        "file_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/SW15_OR_MetlifeComicEmoji_4_v3.jpg",
        "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/Comic_4_v2_edited-1.jpg",
        "category": [],
        "gallery": [
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/MetLifeComic_04_panel_1.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/MetLifeComic_04_panel_2.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/MetLifeComic_04_panel_3.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/MetLifeComic_04_panel_4.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/MetLifeComic_04_panel_5.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/MetLifeComic_04_panel_6.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/MetLifeComic_04_panel_7.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/03/MetLifeComic_04_panel_8.png"
        ]
        },
        {
        "id": "526",
        "title": "يمكننا ان نفعل ذلك هزلية",
        "name": "activity526",
        "description": "<p>Learn about working together to save money in this cute comic with Elmo, Bel, and Grover!</p>\n",
        "download_file": "http://sesameapi.jumpcatch.com/download.php?attachment=528",
        "file_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetlifeComic_1.pdf",
        "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/CookingComic_V2_edited-1.jpg",
        "category": [],
        "gallery": [
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_01_panel_1.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_01_panel_2.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_01_panel_3.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_01_panel_4.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_01_panel_5.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_01_panel_6.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_01_panel_7.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_01_panel_8.png"
        ]
        },
        {
        "id": "347",
        "title": "Activity Sheets",
        "name": "activity347",
        "description": "<p>In these worksheets, you and your child can learn together about a time when Elmo had a problem, set a goal, and made a plan to achieve his goal. Read and talk about the story together, and complete the activities.</p>\n<p>Next, talk with your child about a goal he or she, or your family, has. Using the worksheets and the same steps Elmo used, make a plan and reach your goal together!</p>\n",
        "download_file": "http://sesameapi.jumpcatch.com/download.php?attachment=725",
        "file_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLife_AS_v03.pdf",
        "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ACTIVITY_0000s_0000s_0002_MetLife_AS_v03.jpg",
        "category": [],
        "gallery": []
        },
        {
        "id": "342",
        "title": "Printable Activities",
        "name": "activity342",
        "description": "<p>These fun printable activities will help your child learn all about money and making a plan. Help Elmo and Lola get ready for school, build your own piggy bank, make-believe that you have your own store and more!</p>\n",
        "download_file": "http://sesameapi.jumpcatch.com/download.php?attachment=808",
        "file_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/VILASESAMO_ALMANAQUEDASCRIANÇAS_INGLES.pdf",
        "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ACT_1.jpg",
        "category": [],
        "gallery": []
        },
        {
        "id": "341",
        "title": "Cooking Up Some Fun Comic",
        "name": "activity341",
        "description": "<p>Chamki and Elmo cook up some fun in this cute comic strip!</p>\n",
        "download_file": "http://sesameapi.jumpcatch.com/download.php?attachment=555",
        "file_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/SW15_OR_MetlifeComicEmoji_2_v5.jpg",
        "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/CookingComic_V2_edited-1.jpg",
        "category": [],
        "gallery": [
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_02_panel_11.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_02_panel_21.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_02_panel_31.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_02_panel_41.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_02_panel_51.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_02_panel_61.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_02_panel_71.png"
        ]
        },
        {
        "id": "340",
        "title": "The Flyaway Umbrella Comic",
        "name": "activity340",
        "description": "<p>Tiger Lily learns that sometimes you have to spend money on what you need rather than just what you want in this cute comic.</p>\n",
        "download_file": "http://sesameapi.jumpcatch.com/download.php?attachment=556",
        "file_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/SW15_OR_MetlifeComicEmoji_3_v3.jpg",
        "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/umbrella_2.jpg",
        "category": [],
        "gallery": [
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_03_panel_1.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_03_panel_2.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_03_panel_3.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_03_panel_4.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_03_panel_5.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_03_panel_6.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_03_panel_7.png",
        "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/MetLifeComic_03_panel_8.png"
        ]
        },
        {
        "id": "283",
        "title": "Activity Book",
        "name": "activity283",
        "description": "<p>This activity book includes 6 printable activities with Elmo, Lola, and more of your favorite friends! Help Elmo make a plan for Lola's birthday gift, help Chamki color fun food items, and more!</p>\n",
        "download_file": "http://sesameapi.jumpcatch.com/download.php?attachment=726",
        "file_url": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/Activity-Book-A4-Revised-2.pdf",
        "poster_image": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/ACTIVITY_0000s_0000s_0006_Activity-Book-A4-Revised-2.jpg",
        "category": [],
        "gallery": []
        }
        ],
        "pageinfo": {
        "title": "活動",
        "name": "activities",
        "icon": "http://sesameapi.jumpcatch.com/wp-content/uploads/2015/02/activities.png"
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
    }};


    /* Controller Unit Testing */
    describe('Controller : ActivityController with spies', function() {
        beforeEach(inject(function($controller, $rootScope, getData) {
            $scope = $rootScope.$new();

            spyOn(getData, 'getactivity').and.callFake(function() {
                return {
                  then: function(callback) {
                    // console.log(callback);
                    return callback(returnData);}
                };
            });
            // console.log($scope.PageInfo);
            MainCtrl = $controller('ActivityController', { $scope: $scope, getData: getData });
        }));

        it('should set Activities at controller level', function() {
            // console.log('$scope.Activities');
            // console.log($scope.Activities);
            // console.log(returnData.data.data);
            // $scope.$apply();
            // expect(getData.getvideo).toHaveBeenCalled();
            
            expect($scope.Activities).toEqual(returnData.data.data);
        }),
        it('should set Page Info at controller level', function() {
            expect($scope.PageInfo).toEqual(returnData.data.pageinfo);
        });
  
    });
});