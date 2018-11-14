
(function () {
    'use strict';

    angular
    .module('AppCentral.core.widgets')
    .directive('kalturaPlaylist', function ($rootScope, config) {

        return {
            restrict: 'E',
            template: '<div id="kaltura_player_{{id}}" style="width:100%; height:100%; background-color: black"></div>',
            scope: {
                pid: "@pid",
                uiconfid: '@uiconfid',
                entryid: '@entryid'
            },

            link: function ($scope, element, attributes) {

                if (document.getElementById("kalturaLib") === null) {
                    var s = document.createElement('script');
                    s.src = config.kalturaVideoApi + 'p/' + attributes.pid + '/sp/' + attributes.pid + '00/embedIframeJs/uiconf_id/' + attributes.uiconfid + '/partner_id/' + attributes.pid;
                    s.id = "kalturaLib";
                    s.async = false;
                    document.head.appendChild(s);
                }

                if (attributes.width) {
                    $scope.width = attributes.width;
                }
                if (attributes.height) {
                    $scope.height = attributes.height;
                }
                if (attributes.id) {
                    $scope.id = attributes.id;
                }

                if (!$scope.kdp) {

                    var intervalID = setInterval(function () {
                        if (typeof window.kWidget !== "undefined") {
                            clearInterval(intervalID);

                            var target = attributes.id ? "kaltura_player_" + attributes.id : "kaltura_player_";
                            var flashvars = attributes.flashvars ? JSON.parse(attributes.flashvars) : {};
                            var initItemEntryId = attributes.inititementryid != null && attributes.inititementryid != undefined ? attributes.inititementryid : null;

                            window.kWidget.embed({
                                'targetId': target,
                                'wid': "_" + attributes.pid,
                                'uiconf_id': attributes.uiconfid,
                                'flashvars': {
                                    'playlistAPI': {
                                        'plugin': true,
                                        'includeInLayout': true,
                                        'autoPlay': false,
                                        "initItemEntryId": initItemEntryId,
                                        'autoInsert': true,
                                        //'kpl0Name': 'test 4 item playlist',
                                        'kpl0Url': 'http://www.kaltura.com/index.php/partnerservices2/executeplaylist?uid=&partner_id=' + attributes.pid + '&subp_id=' + attributes.pid + '00&format=8&ks={ks}&playlist_id=' + attributes.playlistid
                                    }
                                },
                                "readyCallback": function (playerID) {
                                    $scope.kdp = document.getElementById(playerID);
                                    $rootScope.$broadcast('kalturaPlayerReady', $scope.kdp, attributes.id);
                                }
                            });
                        }
                    }, 50);
                }
            }
        }
    });

})();

