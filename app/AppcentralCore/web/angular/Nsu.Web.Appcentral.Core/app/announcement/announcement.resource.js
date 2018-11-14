(function () {

    angular
        .module('AppCentral.core.announcements')
        .factory('AnnouncementsCoreResource', announcementsCoreResource);


    /* @ngInject */
    function announcementsCoreResource($resource, config, currentInstance, $cacheFactory) {

        return $resource('',
            {},
            {
                myAnnouncements: {
                    method: 'GET',
                    url: config.communicationApi + 'instances/:instanceId/myannouncements',
                    isArray: false
                },
                unreadcount: {
                    method: 'GET',
                    url: config.communicationApi + 'instances/:instanceId/myannouncements/unreadcount',
                    isArray: false
                }
            }
        );
    }


})();

