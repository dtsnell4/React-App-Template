angular.module('AppCentral.core.filters')

        .filter('removeHtml', function () {
            return function (text) {
                return text ? String(text).replace(/<[^>]+>/gm, '') : '';
            };
        })
        .filter('defaultAnnouncement', function () {
            return function (text) {
                if (text.length === 0)
                    text = 'Click to view announcement';
                return text;
            };

        }).filter('trustHtml', function ($sce) {
            return $sce.trustAsHtml;
        }).filter('stringToColour', function () {
            return function (str) {
                var hash = 0;
                for (var i = 0; i < str.length; i++) {
                    hash = str.charCodeAt(i) + ((hash << 5) - hash);
                }
                var colour = '#';
                for (var i = 0; i < 3; i++) {
                    var value = (hash >> (i * 8)) & 0xFF;
                    colour += ('00' + value.toString(16)).substr(-2);
                }
                return colour;
            };
        }).filter('invertColor', function () {
            return function (hexTripletColor) {
                var color = hexTripletColor;
                color = color.substring(1);           // remove #
                color = parseInt(color, 16);          // convert to integer
                color = 0xFFFFFF ^ color;             // invert three bytes
                color = color.toString(16);           // convert to hex
                color = ("000000" + color).slice(-6); // pad with leading zeros
                color = "#" + color;                  // prepend #
                return color;
            };
        }).filter('intToTime', function () {
            return function (value) {
                var time = '';
                if (Math.floor(value / 60) > 1)
                    time = Math.floor(value / 60) + ' Hours ';
                if (Math.floor(value / 60) == 1)
                    time = Math.floor(value / 60) + ' Hour ';

                if (value % 60 > 0 && Math.floor(value / 60) > 0)
                    time += ', ';

                if (value % 60 > 1)
                    time += value % 60 + ' Minutes';
                if (value % 60 == 1)
                    time += value % 60 + ' Minute';
                if (time == '')
                    time = '-';
                return time;
            };
        });
