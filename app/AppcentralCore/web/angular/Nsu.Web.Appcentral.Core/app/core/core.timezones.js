(function () {

    'use strict';
    angular.module('AppCentral.core')
        .service('timezoneService', timezoneService);
    /* @ngInject */
    function timezoneService() {
    	var timezones = [
        {
            "timezone": "Dateline Standard Time",
            "territory": "001",
            "tzid": "Etc/GMT+12"
        }, {
            "timezone": "Dateline Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT+12"
        }, {
            "timezone": "UTC-11",
            "territory": "001",
            "tzid": "Etc/GMT+11"
        }, {
            "timezone": "UTC-11",
            "territory": "AS",
            "tzid": "Pacific/Pago_Pago"
        }, {
            "timezone": "UTC-11",
            "territory": "NU",
            "tzid": "Pacific/Niue"
        }, {
            "timezone": "UTC-11",
            "territory": "UM",
            "tzid": "Pacific/Midway"
        }, {
            "timezone": "UTC-11",
            "territory": "ZZ",
            "tzid": "Etc/GMT+11"
        }, {
            "timezone": "Hawaiian Standard Time",
            "territory": "001",
            "tzid": "Pacific/Honolulu"
        }, {
            "timezone": "Hawaiian Standard Time",
            "territory": "CK",
            "tzid": "Pacific/Rarotonga"
        }, {
            "timezone": "Hawaiian Standard Time",
            "territory": "PF",
            "tzid": "Pacific/Tahiti"
        }, {
            "timezone": "Hawaiian Standard Time",
            "territory": "UM",
            "tzid": "Pacific/Johnston"
        }, {
            "timezone": "Hawaiian Standard Time",
            "territory": "US",
            "tzid": "Pacific/Honolulu"
        }, {
            "timezone": "Hawaiian Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT+10"
        }, {
            "timezone": "Alaskan Standard Time",
            "territory": "001",
            "tzid": "America/Anchorage"
        }, {
            "timezone": "Alaskan Standard Time",
            "territory": "US",
            "tzid": "America/Anchorage"
        }, {
            "timezone": "Alaskan Standard Time",
            "territory": "US",
            "tzid": "America/Anchorage"
        }, {
            "timezone": "Alaskan Standard Time",
            "territory": "US",
            "tzid": "America/Juneau"
        }, {
            "timezone": "Alaskan Standard Time",
            "territory": "US",
            "tzid": "America/Metlakatla"
        }, {
            "timezone": "Alaskan Standard Time",
            "territory": "US",
            "tzid": "America/Nome"
        }, {
            "timezone": "Alaskan Standard Time",
            "territory": "US",
            "tzid": "America/Sitka"
        }, {
            "timezone": "Alaskan Standard Time",
            "territory": "US",
            "tzid": "America/Yakutat"
        }, {
            "timezone": "Pacific Standard Time",
            "territory": "001",
            "tzid": "America/Los_Angeles"
        }, {
            "timezone": "Pacific Standard Time",
            "territory": "CA",
            "tzid": "America/Vancouver"
        }, {
            "timezone": "Pacific Standard Time",
            "territory": "CA",
            "tzid": "America/Dawson"
        }, {
            "timezone": "Pacific Standard Time",
            "territory": "CA",
            "tzid": "America/Whitehorse"
        }, {
            "timezone": "Pacific Standard Time",
            "territory": "MX",
            "tzid": "America/Tijuana"
        }, {
            "timezone": "Pacific Standard Time",
            "territory": "MX",
            "tzid": "America/Santa_Isabel"
        }, {
            "timezone": "Pacific Standard Time",
            "territory": "US",
            "tzid": "America/Los_Angeles"
        }, {
            "timezone": "Pacific Standard Time",
            "territory": "ZZ",
            "tzid": "PST8PDT"
        }, {
            "timezone": "US Mountain Standard Time",
            "territory": "001",
            "tzid": "America/Phoenix"
        }, {
            "timezone": "US Mountain Standard Time",
            "territory": "CA",
            "tzid": "America/Dawson_Creek"
        }, {
            "timezone": "US Mountain Standard Time",
            "territory": "CA",
            "tzid": "America/Creston"
        }, {
            "timezone": "US Mountain Standard Time",
            "territory": "CA",
            "tzid": "America/Fort_Nelson"
        }, {
            "timezone": "US Mountain Standard Time",
            "territory": "MX",
            "tzid": "America/Hermosillo"
        }, {
            "timezone": "US Mountain Standard Time",
            "territory": "US",
            "tzid": "America/Phoenix"
        }, {
            "timezone": "US Mountain Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT+7"
        }, {
            "timezone": "Mountain Standard Time (Mexico)",
            "territory": "001",
            "tzid": "America/Chihuahua"
        }, {
            "timezone": "Mountain Standard Time (Mexico)",
            "territory": "MX",
            "tzid": "America/Chihuahua"
        }, {
            "timezone": "Mountain Standard Time (Mexico)",
            "territory": "MX",
            "tzid": "America/Mazatlan"
        }, {
            "timezone": "Mountain Standard Time",
            "territory": "001",
            "tzid": "America/Denver"
        }, {
            "timezone": "Mountain Standard Time",
            "territory": "CA",
            "tzid": "America/Edmonton "
        }, {
            "timezone": "Mountain Standard Time",
            "territory": "CA",
            "tzid": "America/Cambridge_Bay"
        }, {
            "timezone": "Mountain Standard Time",
            "territory": "CA",
            "tzid": "America/Inuvik"
        }, {
            "timezone": "Mountain Standard Time",
            "territory": "CA",
            "tzid": "America/Yellowknife"
        }, {
            "timezone": "Mountain Standard Time",
            "territory": "MX",
            "tzid": "America/Ojinaga"
        }, {
            "timezone": "Mountain Standard Time",
            "territory": "US",
            "tzid": "America/Denver"
        }, {
            "timezone": "Mountain Standard Time",
            "territory": "US",
            "tzid": "America/Boise"
        }, {
            "timezone": "Mountain Standard Time",
            "territory": "ZZ",
            "tzid": "MST7MDT"
        }, {
            "timezone": "Central America Standard Time",
            "territory": "001",
            "tzid": "America/Guatemala"
        }, {
            "timezone": "Central America Standard Time",
            "territory": "BZ",
            "tzid": "America/Belize"
        }, {
            "timezone": "Central America Standard Time",
            "territory": "CR",
            "tzid": "America/Costa_Rica"
        }, {
            "timezone": "Central America Standard Time",
            "territory": "EC",
            "tzid": "Pacific/Galapagos"
        }, {
            "timezone": "Central America Standard Time",
            "territory": "GT",
            "tzid": "America/Guatemala"
        }, {
            "timezone": "Central America Standard Time",
            "territory": "HN",
            "tzid": "America/Tegucigalpa"
        }, {
            "timezone": "Central America Standard Time",
            "territory": "NI",
            "tzid": "America/Managua"
        }, {
            "timezone": "Central America Standard Time",
            "territory": "SV",
            "tzid": "America/El_Salvador"
        }, {
            "timezone": "Central America Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT+6"
        }, {
            "timezone": "Central Standard Time",
            "territory": "001",
            "tzid": "America/Chicago"
        }, {
            "timezone": "Central Standard Time",
            "territory": "CA",
            "tzid": "America/Winnipeg"
        }, {
            "timezone": "Central Standard Time",
            "territory": "CA",
            "tzid": "America/Rainy_River"
        }, {
            "timezone": "Central Standard Time",
            "territory": "CA",
            "tzid": "America/Rankin_Inlet"
        }, {
            "timezone": "Central Standard Time",
            "territory": "CA",
            "tzid": "America/Resolute"
        }, {
            "timezone": "Central Standard Time",
            "territory": "MX",
            "tzid": "America/Matamoros"
        }, {
            "timezone": "Central Standard Time",
            "territory": "US",
            "tzid": "America/Chicago"
        }, {
            "timezone": "Central Standard Time",
            "territory": "US",
            "tzid": "America/Indiana/Knox"
        }, {
            "timezone": "Central Standard Time",
            "territory": "US",
            "tzid": "America/Indiana/Tell_City"
        }, {
            "timezone": "Central Standard Time",
            "territory": "US",
            "tzid": "America/Menominee"
        }, {
            "timezone": "Central Standard Time",
            "territory": "US",
            "tzid": "America/North_Dakota/Beulah"
        }, {
            "timezone": "Central Standard Time",
            "territory": "US",
            "tzid": "America/North_Dakota/Center"
        }, {
            "timezone": "Central Standard Time",
            "territory": "US",
            "tzid": "America/North_Dakota/New_Salem"
        }, {
            "timezone": "Central Standard Time",
            "territory": "ZZ",
            "tzid": "CST6CDT"
        }, {
            "timezone": "Central Standard Time (Mexico)",
            "territory": "001",
            "tzid": "America/Mexico_City"
        }, {
            "timezone": "Central Standard Time (Mexico)",
            "territory": "MX",
            "tzid": "America/Mexico_City"
        }, {
            "timezone": "Central Standard Time (Mexico)",
            "territory": "MX",
            "tzid": "America/Bahia_Banderas"
        }, {
            "timezone": "Central Standard Time (Mexico)",
            "territory": "MX",
            "tzid": "America/Merida"
        }, {
            "timezone": "Central Standard Time (Mexico)",
            "territory": "MX",
            "tzid": "America/Monterrey"
        }, {
            "timezone": "Canada Central Standard Time",
            "territory": "001",
            "tzid": "America/Regina"
        }, {
            "timezone": "Canada Central Standard Time",
            "territory": "CA",
            "tzid": "America/Regina"
        }, {
            "timezone": "Canada Central Standard Time",
            "territory": "CA",
            "tzid": "America/Swift_Current"
        }, {
            "timezone": "SA Pacific Standard Time",
            "territory": "001",
            "tzid": "America/Bogota"
        }, {
            "timezone": "SA Pacific Standard Time",
            "territory": "BR",
            "tzid": "America/Rio_Branco"
        }, {
            "timezone": "SA Pacific Standard Time",
            "territory": "BR",
            "tzid": "America/Eirunepe"
        }, {
            "timezone": "SA Pacific Standard Time",
            "territory": "CA",
            "tzid": "America/Coral_Harbour"
        }, {
            "timezone": "SA Pacific Standard Time",
            "territory": "CL",
            "tzid": "Pacific/Easter"
        }, {
            "timezone": "SA Pacific Standard Time",
            "territory": "CO",
            "tzid": "America/Bogota"
        }, {
            "timezone": "SA Pacific Standard Time",
            "territory": "EC",
            "tzid": "America/Guayaquil"
        }, {
            "timezone": "SA Pacific Standard Time",
            "territory": "HT",
            "tzid": "America/Port-au-Prince"
        }, {
            "timezone": "SA Pacific Standard Time",
            "territory": "JM",
            "tzid": "America/Jamaica"
        }, {
            "timezone": "SA Pacific Standard Time",
            "territory": "KY",
            "tzid": "America/Cayman"
        }, {
            "timezone": "SA Pacific Standard Time",
            "territory": "PA",
            "tzid": "America/Panama"
        }, {
            "timezone": "SA Pacific Standard Time",
            "territory": "PE",
            "tzid": "America/Lima"
        }, {
            "timezone": "SA Pacific Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT+5"
        }, {
            "timezone": "Eastern Standard Time (Mexico)",
            "territory": "001",
            "tzid": "America/Cancun"
        }, {
            "timezone": "Eastern Standard Time (Mexico)",
            "territory": "MX",
            "tzid": "America/Cancun"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "001",
            "tzid": "America/New_York"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "BS",
            "tzid": "America/Nassau"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "CA",
            "tzid": "America/Toronto"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "CA",
            "tzid": "America/Iqaluit"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "CA",
            "tzid": "America/Montreal "
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "CA",
            "tzid": "America/Nipigon"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "CA",
            "tzid": "America/Pangnirtung"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "CA",
            "tzid": "America/Thunder_Bay"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "CU",
            "tzid": "America/Havana"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "US",
            "tzid": "America/New_York"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "US",
            "tzid": "America/Detroit"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "US",
            "tzid": "America/Indiana/Petersburg"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "US",
            "tzid": "America/Indiana/Vincennes"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "US",
            "tzid": "America/Indiana/Winamac"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "US",
            "tzid": "America/Kentucky/Monticello "
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "US",
            "tzid": "America/Louisville"
        }, {
            "timezone": "Eastern Standard Time",
            "territory": "ZZ",
            "tzid": "EST5EDT"
        }, {
            "timezone": "US Eastern Standard Time",
            "territory": "001",
            "tzid": "America/Indianapolis"
        }, {
            "timezone": "US Eastern Standard Time",
            "territory": "US",
            "tzid": "America/Indianapolis"
        }, {
            "timezone": "US Eastern Standard Time",
            "territory": "US",
            "tzid": "America/Indiana/Marengo"
        }, {
            "timezone": "US Eastern Standard Time",
            "territory": "US",
            "tzid": "America/Indiana/Vevay"
        }, {
            "timezone": "Venezuela Standard Time",
            "territory": "001",
            "tzid": "America/Caracas"
        }, {
            "timezone": "Venezuela Standard Time",
            "territory": "VE",
            "tzid": "America/Caracas"
        }, {
            "timezone": "Paraguay Standard Time",
            "territory": "001",
            "tzid": "America/Asuncion"
        }, {
            "timezone": "Paraguay Standard Time",
            "territory": "PY",
            "tzid": "America/Asuncion"
        }, {
            "timezone": "Atlantic Standard Time",
            "territory": "001",
            "tzid": "America/Halifax"
        }, {
            "timezone": "Atlantic Standard Time",
            "territory": "BM",
            "tzid": "Atlantic/Bermuda"
        }, {
            "timezone": "Atlantic Standard Time",
            "territory": "CA",
            "tzid": "America/Halifax"
        }, {
            "timezone": "Atlantic Standard Time",
            "territory": "CA",
            "tzid": "America/Glace_Bay"
        }, {
            "timezone": "Atlantic Standard Time",
            "territory": "CA",
            "tzid": "America/Goose_Bay"
        }, {
            "timezone": "Atlantic Standard Time",
            "territory": "CA",
            "tzid": "America/Moncton"
        }, {
            "timezone": "Atlantic Standard Time",
            "territory": "GL",
            "tzid": "America/Thule"
        }, {
            "timezone": "Central Brazilian Standard Time",
            "territory": "001",
            "tzid": "America/Cuiaba"
        }, {
            "timezone": "Central Brazilian Standard Time",
            "territory": "BR",
            "tzid": "America/Cuiaba"
        }, {
            "timezone": "Central Brazilian Standard Time",
            "territory": "BR",
            "tzid": "America/Campo_Grande"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "001",
            "tzid": "America/La_Paz"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "AG",
            "tzid": "America/Antigua"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "AI",
            "tzid": "America/Anguilla"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "AW",
            "tzid": "America/Aruba"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "BB",
            "tzid": "America/Barbados"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "BL",
            "tzid": "America/St_Barthelemy"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "BO",
            "tzid": "America/La_Paz"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "BQ",
            "tzid": "America/Kralendijk"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "BR",
            "tzid": "America/Manaus"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "BR",
            "tzid": "America/Boa_Vista"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "BR",
            "tzid": "America/Porto_Velho"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "CA",
            "tzid": "America/Blanc-Sablon"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "CW",
            "tzid": "America/Curacao"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "DM",
            "tzid": "America/Dominica"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "DO",
            "tzid": "America/Santo_Domingo"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "GD",
            "tzid": "America/Grenada"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "GP",
            "tzid": "America/Guadeloupe"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "GY",
            "tzid": "America/Guyana"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "KN",
            "tzid": "America/St_Kitts"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "LC",
            "tzid": "America/St_Lucia"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "MF",
            "tzid": "America/Marigot"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "MQ",
            "tzid": "America/Martinique"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "MS",
            "tzid": "America/Montserrat"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "PR",
            "tzid": "America/Puerto_Rico"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "SX",
            "tzid": "America/Lower_Princes"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "TC",
            "tzid": "America/Grand_Turk"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "TT",
            "tzid": "America/Port_of_Spain"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "VC",
            "tzid": "America/St_Vincent"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "VG",
            "tzid": "America/Tortola"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "VI",
            "tzid": "America/St_Thomas"
        }, {
            "timezone": "SA Western Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT+4"
        }, {
            "timezone": "Newfoundland Standard Time",
            "territory": "001",
            "tzid": "America/St_Johns"
        }, {
            "timezone": "Newfoundland Standard Time",
            "territory": "CA",
            "tzid": "America/St_Johns"
        }, {
            "timezone": "E. South America Standard Time",
            "territory": "001",
            "tzid": "America/Sao_Paulo"
        }, {
            "timezone": "E. South America Standard Time",
            "territory": "BR",
            "tzid": "America/Sao_Paulo"
        }, {
            "timezone": "SA Eastern Standard Time",
            "territory": "001",
            "tzid": "America/Cayenne"
        }, {
            "timezone": "SA Eastern Standard Time",
            "territory": "AQ",
            "tzid": "Antarctica/Rothera"
        }, {
            "timezone": "SA Eastern Standard Time",
            "territory": "BR",
            "tzid": "America/Fortaleza"
        }, {
            "timezone": "SA Eastern Standard Time",
            "territory": "BR",
            "tzid": "America/Araguaina"
        }, {
            "timezone": "SA Eastern Standard Time",
            "territory": "BR",
            "tzid": "America/Belem"
        }, {
            "timezone": "SA Eastern Standard Time",
            "territory": "BR",
            "tzid": "America/Maceio"
        }, {
            "timezone": "SA Eastern Standard Time",
            "territory": "BR",
            "tzid": "America/Recife"
        }, {
            "timezone": "SA Eastern Standard Time",
            "territory": "FK",
            "tzid": "Atlantic/Stanley"
        }, {
            "timezone": "SA Eastern Standard Time",
            "territory": "GF",
            "tzid": "America/Cayenne"
        }, {
            "timezone": "SA Eastern Standard Time",
            "territory": "SR",
            "tzid": "America/Paramaribo"
        }, {
            "timezone": "SA Eastern Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT+3"
        }, {
            "timezone": "Argentina Standard Time",
            "territory": "001",
            "tzid": "America/Buenos_Aires"
        }, {
            "timezone": "Argentina Standard Time",
            "territory": "AR",
            "tzid": "America/Buenos_Aires"
        }, {
            "timezone": "Argentina Standard Time",
            "territory": "AR",
            "tzid": "America/Argentina/La_Rioja"
        }, {
            "timezone": "Argentina Standard Time",
            "territory": "AR",
            "tzid": "America/Argentina/Rio_Gallegos"
        }, {
            "timezone": "Argentina Standard Time",
            "territory": "AR",
            "tzid": "America/Argentina/Salta"
        }, {
            "timezone": "Argentina Standard Time",
            "territory": "AR",
            "tzid": "America/Argentina/San_Juan"
        }, {
            "timezone": "Argentina Standard Time",
            "territory": "AR",
            "tzid": "America/Argentina/San_Luis"
        }, {
            "timezone": "Argentina Standard Time",
            "territory": "AR",
            "tzid": "America/Argentina/Tucuman"
        }, {
            "timezone": "Argentina Standard Time",
            "territory": "AR",
            "tzid": "America/Argentina/Ushuaia"
        }, {
            "timezone": "Argentina Standard Time",
            "territory": "AR",
            "tzid": "America/Catamarca"
        }, {
            "timezone": "Argentina Standard Time",
            "territory": "AR",
            "tzid": "America/Cordoba"
        }, {
            "timezone": "Argentina Standard Time",
            "territory": "AR",
            "tzid": "America/Jujuy"
        }, {
            "timezone": "Argentina Standard Time",
            "territory": "AR",
            "tzid": "America/Mendoza"
        }, {
            "timezone": "Greenland Standard Time",
            "territory": "001",
            "tzid": "America/Godthab"
        }, {
            "timezone": "Greenland Standard Time",
            "territory": "GL",
            "tzid": "America/Godthab"
        }, {
            "timezone": "Montevideo Standard Time",
            "territory": "001",
            "tzid": "America/Montevideo"
        }, {
            "timezone": "Montevideo Standard Time",
            "territory": "UY",
            "tzid": "America/Montevideo"
        }, {
            "timezone": "Bahia Standard Time",
            "territory": "001",
            "tzid": "America/Bahia"
        }, {
            "timezone": "Bahia Standard Time",
            "territory": "BR",
            "tzid": "America/Bahia"
        }, {
            "timezone": "Pacific SA Standard Time",
            "territory": "001",
            "tzid": "America/Santiago"
        }, {
            "timezone": "Pacific SA Standard Time",
            "territory": "AQ",
            "tzid": "Antarctica/Palmer"
        }, {
            "timezone": "Pacific SA Standard Time",
            "territory": "CL",
            "tzid": "America/Santiago"
        }, {
            "timezone": "UTC-02",
            "territory": "001",
            "tzid": "Etc/GMT+2"
        }, {
            "timezone": "UTC-02",
            "territory": "BR",
            "tzid": "America/Noronha"
        }, {
            "timezone": "UTC-02",
            "territory": "GS",
            "tzid": "Atlantic/South_Georgia"
        }, {
            "timezone": "UTC-02",
            "territory": "ZZ",
            "tzid": "Etc/GMT+2"
        }, {
            "timezone": "Azores Standard Time",
            "territory": "001",
            "tzid": "Atlantic/Azores"
        }, {
            "timezone": "Azores Standard Time",
            "territory": "GL",
            "tzid": "America/Scoresbysund"
        }, {
            "timezone": "Azores Standard Time",
            "territory": "PT",
            "tzid": "Atlantic/Azores"
        }, {
            "timezone": "Cape Verde Standard Time",
            "territory": "001",
            "tzid": "Atlantic/Cape_Verde"
        }, {
            "timezone": "Cape Verde Standard Time",
            "territory": "CV",
            "tzid": "Atlantic/Cape_Verde"
        }, {
            "timezone": "Cape Verde Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT+1"
        }, {
            "timezone": "Morocco Standard Time",
            "territory": "001",
            "tzid": "Africa/Casablanca"
        }, {
            "timezone": "Morocco Standard Time",
            "territory": "EH",
            "tzid": "Africa/El_Aaiun"
        }, {
            "timezone": "Morocco Standard Time",
            "territory": "MA",
            "tzid": "Africa/Casablanca"
        }, {
            "timezone": "UTC",
            "territory": "001",
            "tzid": "Etc/GMT"
        }, {
            "timezone": "UTC",
            "territory": "GL",
            "tzid": "America/Danmarkshavn"
        }, {
            "timezone": "UTC",
            "territory": "ZZ",
            "tzid": "Etc/GMT"
        }, {
            "timezone": "GMT Standard Time",
            "territory": "001",
            "tzid": "Europe/London"
        }, {
            "timezone": "GMT Standard Time",
            "territory": "ES",
            "tzid": "Atlantic/Canary"
        }, {
            "timezone": "GMT Standard Time",
            "territory": "FO",
            "tzid": "Atlantic/Faeroe"
        }, {
            "timezone": "GMT Standard Time",
            "territory": "GB",
            "tzid": "Europe/London"
        }, {
            "timezone": "GMT Standard Time",
            "territory": "GG",
            "tzid": "Europe/Guernsey"
        }, {
            "timezone": "GMT Standard Time",
            "territory": "IE",
            "tzid": "Europe/Dublin"
        }, {
            "timezone": "GMT Standard Time",
            "territory": "IM",
            "tzid": "Europe/Isle_of_Man"
        }, {
            "timezone": "GMT Standard Time",
            "territory": "JE",
            "tzid": "Europe/Jersey"
        }, {
            "timezone": "GMT Standard Time",
            "territory": "PT",
            "tzid": "Europe/Lisbon Atlantic/Madeira"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "001",
            "tzid": "Atlantic/Reykjavik"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "BF",
            "tzid": "Africa/Ouagadougou"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "CI",
            "tzid": "Africa/Abidjan"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "GH",
            "tzid": "Africa/Accra"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "GM",
            "tzid": "Africa/Banjul"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "GN",
            "tzid": "Africa/Conakry"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "GW",
            "tzid": "Africa/Bissau"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "IS",
            "tzid": "Atlantic/Reykjavik"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "LR",
            "tzid": "Africa/Monrovia"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "ML",
            "tzid": "Africa/Bamako"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "MR",
            "tzid": "Africa/Nouakchott"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "SH",
            "tzid": "Atlantic/St_Helena"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "SL",
            "tzid": "Africa/Freetown"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "SN",
            "tzid": "Africa/Dakar"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "ST",
            "tzid": "Africa/Sao_Tome"
        }, {
            "timezone": "Greenwich Standard Time",
            "territory": "TG",
            "tzid": "Africa/Lome"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "001",
            "tzid": "Europe/Berlin"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "AD",
            "tzid": "Europe/Andorra"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "AT",
            "tzid": "Europe/Vienna"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "CH",
            "tzid": "Europe/Zurich"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "DE",
            "tzid": "Europe/Berlin Europe/Busingen"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "GI",
            "tzid": "Europe/Gibraltar"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "IT",
            "tzid": "Europe/Rome"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "LI",
            "tzid": "Europe/Vaduz"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "LU",
            "tzid": "Europe/Luxembourg"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "MC",
            "tzid": "Europe/Monaco"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "MT",
            "tzid": "Europe/Malta"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "NL",
            "tzid": "Europe/Amsterdam"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "NO",
            "tzid": "Europe/Oslo"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "SE",
            "tzid": "Europe/Stockholm"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "SJ",
            "tzid": "Arctic/Longyearbyen"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "SM",
            "tzid": "Europe/San_Marino"
        }, {
            "timezone": "W. Europe Standard Time",
            "territory": "VA",
            "tzid": "Europe/Vatican"
        }, {
            "timezone": "Central Europe Standard Time",
            "territory": "001",
            "tzid": "Europe/Budapest"
        }, {
            "timezone": "Central Europe Standard Time",
            "territory": "AL",
            "tzid": "Europe/Tirane"
        }, {
            "timezone": "Central Europe Standard Time",
            "territory": "CZ",
            "tzid": "Europe/Prague"
        }, {
            "timezone": "Central Europe Standard Time",
            "territory": "HU",
            "tzid": "Europe/Budapest"
        }, {
            "timezone": "Central Europe Standard Time",
            "territory": "ME",
            "tzid": "Europe/Podgorica"
        }, {
            "timezone": "Central Europe Standard Time",
            "territory": "RS",
            "tzid": "Europe/Belgrade"
        }, {
            "timezone": "Central Europe Standard Time",
            "territory": "SI",
            "tzid": "Europe/Ljubljana"
        }, {
            "timezone": "Central Europe Standard Time",
            "territory": "SK",
            "tzid": "Europe/Bratislava"
        }, {
            "timezone": "Romance Standard Time",
            "territory": "001",
            "tzid": "Europe/Paris"
        }, {
            "timezone": "Romance Standard Time",
            "territory": "BE",
            "tzid": "Europe/Brussels"
        }, {
            "timezone": "Romance Standard Time",
            "territory": "DK",
            "tzid": "Europe/Copenhagen"
        }, {
            "timezone": "Romance Standard Time",
            "territory": "ES",
            "tzid": "Europe/Madrid"
        }, {
            "timezone": "Romance Standard Time",
            "territory": "ES",
            "tzid": "Africa/Ceuta"
        }, {
            "timezone": "Romance Standard Time",
            "territory": "FR",
            "tzid": "Europe/Paris"
        }, {
            "timezone": "Central European Standard Time",
            "territory": "001",
            "tzid": "Europe/Warsaw"
        }, {
            "timezone": "Central European Standard Time",
            "territory": "BA",
            "tzid": "Europe/Sarajevo"
        }, {
            "timezone": "Central European Standard Time",
            "territory": "HR",
            "tzid": "Europe/Zagreb"
        }, {
            "timezone": "Central European Standard Time",
            "territory": "MK",
            "tzid": "Europe/Skopje"
        }, {
            "timezone": "Central European Standard Time",
            "territory": "PL",
            "tzid": "Europe/Warsaw"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "001",
            "tzid": "Africa/Lagos"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "AO",
            "tzid": "Africa/Luanda"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "BJ",
            "tzid": "Africa/Porto-Novo"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "CD",
            "tzid": "Africa/Kinshasa"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "CF",
            "tzid": "Africa/Bangui"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "CG",
            "tzid": "Africa/Brazzaville"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "CM",
            "tzid": "Africa/Douala"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "DZ",
            "tzid": "Africa/Algiers"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "GA",
            "tzid": "Africa/Libreville"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "GQ",
            "tzid": "Africa/Malabo"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "NE",
            "tzid": "Africa/Niamey"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "NG",
            "tzid": "Africa/Lagos"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "TD",
            "tzid": "Africa/Ndjamena"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "TN",
            "tzid": "Africa/Tunis"
        }, {
            "timezone": "W. Central Africa Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT-1"
        }, {
            "timezone": "Namibia Standard Time",
            "territory": "001",
            "tzid": "Africa/Windhoek"
        }, {
            "timezone": "Namibia Standard Time",
            "territory": "NA",
            "tzid": "Africa/Windhoek"
        }, {
            "timezone": "Jordan Standard Time",
            "territory": "001",
            "tzid": "Asia/Amman"
        }, {
            "timezone": "Jordan Standard Time",
            "territory": "JO",
            "tzid": "Asia/Amman"
        }, {
            "timezone": "GTB Standard Time",
            "territory": "001",
            "tzid": "Europe/Bucharest"
        }, {
            "timezone": "GTB Standard Time",
            "territory": "CY",
            "tzid": "Asia/Nicosia"
        }, {
            "timezone": "GTB Standard Time",
            "territory": "GR",
            "tzid": "Europe/Athens"
        }, {
            "timezone": "GTB Standard Time",
            "territory": "RO",
            "tzid": "Europe/Bucharest"
        }, {
            "timezone": "Middle East Standard Time",
            "territory": "001",
            "tzid": "Asia/Beirut"
        }, {
            "timezone": "Middle East Standard Time",
            "territory": "LB",
            "tzid": "Asia/Beirut"
        }, {
            "timezone": "Egypt Standard Time",
            "territory": "001",
            "tzid": "Africa/Cairo"
        }, {
            "timezone": "Egypt Standard Time",
            "territory": "EG",
            "tzid": "Africa/Cairo"
        }, {
            "timezone": "Syria Standard Time",
            "territory": "001",
            "tzid": "Asia/Damascus"
        }, {
            "timezone": "Syria Standard Time",
            "territory": "SY",
            "tzid": "Asia/Damascus"
        }, {
            "timezone": "E. Europe Standard Time",
            "territory": "001",
            "tzid": "Europe/Chisinau"
        }, {
            "timezone": "E. Europe Standard Time",
            "territory": "MD",
            "tzid": "Europe/Chisinau"
        }, {
            "timezone": "South Africa Standard Time",
            "territory": "001",
            "tzid": "Africa/Johannesburg"
        }, {
            "timezone": "South Africa Standard Time",
            "territory": "BI",
            "tzid": "Africa/Bujumbura"
        }, {
            "timezone": "South Africa Standard Time",
            "territory": "BW",
            "tzid": "Africa/Gaborone"
        }, {
            "timezone": "South Africa Standard Time",
            "territory": "CD",
            "tzid": "Africa/Lubumbashi"
        }, {
            "timezone": "South Africa Standard Time",
            "territory": "LS",
            "tzid": "Africa/Maseru"
        }, {
            "timezone": "South Africa Standard Time",
            "territory": "MW",
            "tzid": "Africa/Blantyre"
        }, {
            "timezone": "South Africa Standard Time",
            "territory": "MZ",
            "tzid": "Africa/Maputo"
        }, {
            "timezone": "South Africa Standard Time",
            "territory": "RW",
            "tzid": "Africa/Kigali"
        }, {
            "timezone": "South Africa Standard Time",
            "territory": "SZ",
            "tzid": "Africa/Mbabane"
        }, {
            "timezone": "South Africa Standard Time",
            "territory": "ZA",
            "tzid": "Africa/Johannesburg"
        }, {
            "timezone": "South Africa Standard Time",
            "territory": "ZM",
            "tzid": "Africa/Lusaka"
        }, {
            "timezone": "South Africa Standard Time",
            "territory": "ZW",
            "tzid": "Africa/Harare"
        }, {
            "timezone": "South Africa Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT-2"
        }, {
            "timezone": "FLE Standard Time",
            "territory": "001",
            "tzid": "Europe/Kiev"
        }, {
            "timezone": "FLE Standard Time",
            "territory": "AX",
            "tzid": "Europe/Mariehamn"
        }, {
            "timezone": "FLE Standard Time",
            "territory": "BG",
            "tzid": "Europe/Sofia"
        }, {
            "timezone": "FLE Standard Time",
            "territory": "EE",
            "tzid": "Europe/Tallinn"
        }, {
            "timezone": "FLE Standard Time",
            "territory": "FI",
            "tzid": "Europe/Helsinki"
        }, {
            "timezone": "FLE Standard Time",
            "territory": "LT",
            "tzid": "Europe/Vilnius"
        }, {
            "timezone": "FLE Standard Time",
            "territory": "LV",
            "tzid": "Europe/Riga"
        }, {
            "timezone": "FLE Standard Time",
            "territory": "UA",
            "tzid": "Europe/Kiev"
        }, {
            "timezone": "FLE Standard Time",
            "territory": "UA",
            "tzid": "Europe/Uzhgorod"
        }, {
            "timezone": "FLE Standard Time",
            "territory": "UA",
            "tzid": "Europe/Zaporozhye"
        }, {
            "timezone": "Turkey Standard Time",
            "territory": "001",
            "tzid": "Europe/Istanbul"
        }, {
            "timezone": "Turkey Standard Time",
            "territory": "TR",
            "tzid": "Europe/Istanbul"
        }, {
            "timezone": "Israel Standard Time",
            "territory": "001",
            "tzid": "Asia/Jerusalem"
        }, {
            "timezone": "Israel Standard Time",
            "territory": "IL",
            "tzid": "Asia/Jerusalem"
        }, {
            "timezone": "Kaliningrad Standard Time",
            "territory": "001",
            "tzid": "Europe/Kaliningrad"
        }, {
            "timezone": "Kaliningrad Standard Time",
            "territory": "RU",
            "tzid": "Europe/Kaliningrad"
        }, {
            "timezone": "Libya Standard Time",
            "territory": "001",
            "tzid": "Africa/Tripoli"
        }, {
            "timezone": "Libya Standard Time",
            "territory": "LY",
            "tzid": "Africa/Tripoli"
        }, {
            "timezone": "Arabic Standard Time",
            "territory": "001",
            "tzid": "Asia/Baghdad"
        }, {
            "timezone": "Arabic Standard Time",
            "territory": "IQ",
            "tzid": "Asia/Baghdad"
        }, {
            "timezone": "Arab Standard Time",
            "territory": "001",
            "tzid": "Asia/Riyadh"
        }, {
            "timezone": "Arab Standard Time",
            "territory": "BH",
            "tzid": "Asia/Bahrain"
        }, {
            "timezone": "Arab Standard Time",
            "territory": "KW",
            "tzid": "Asia/Kuwait"
        }, {
            "timezone": "Arab Standard Time",
            "territory": "QA",
            "tzid": "Asia/Qatar"
        }, {
            "timezone": "Arab Standard Time",
            "territory": "SA",
            "tzid": "Asia/Riyadh"
        }, {
            "timezone": "Arab Standard Time",
            "territory": "YE",
            "tzid": "Asia/Aden"
        }, {
            "timezone": "Belarus Standard Time",
            "territory": "001",
            "tzid": "Europe/Minsk"
        }, {
            "timezone": "Belarus Standard Time",
            "territory": "BY",
            "tzid": "Europe/Minsk"
        }, {
            "timezone": "Russian Standard Time",
            "territory": "001",
            "tzid": "Europe/Moscow"
        }, {
            "timezone": "Russian Standard Time",
            "territory": "RU",
            "tzid": "Europe/Moscow"
        }, {
            "timezone": "Russian Standard Time",
            "territory": "RU",
            "tzid": "Europe/Simferopol"
        }, {
            "timezone": "Russian Standard Time",
            "territory": "RU",
            "tzid": "Europe/Volgograd"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "001",
            "tzid": "Africa/Nairobi"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "AQ",
            "tzid": "Antarctica/Syowa"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "DJ",
            "tzid": "Africa/Djibouti"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "ER",
            "tzid": "Africa/Asmera"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "ET",
            "tzid": "Africa/Addis_Ababa"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "KE",
            "tzid": "Africa/Nairobi"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "KM",
            "tzid": "Indian/Comoro"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "MG",
            "tzid": "Indian/Antananarivo"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "SD",
            "tzid": "Africa/Khartoum"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "SO",
            "tzid": "Africa/Mogadishu"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "SS",
            "tzid": "Africa/Juba"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "TZ",
            "tzid": "Africa/Dar_es_Salaam"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "UG",
            "tzid": "Africa/Kampala"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "YT",
            "tzid": "Indian/Mayotte"
        }, {
            "timezone": "E. Africa Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT-3"
        }, {
            "timezone": "Iran Standard Time",
            "territory": "001",
            "tzid": "Asia/Tehran"
        }, {
            "timezone": "Iran Standard Time",
            "territory": "IR",
            "tzid": "Asia/Tehran"
        }, {
            "timezone": "Arabian Standard Time",
            "territory": "001",
            "tzid": "Asia/Dubai"
        }, {
            "timezone": "Arabian Standard Time",
            "territory": "AE",
            "tzid": "Asia/Dubai"
        }, {
            "timezone": "Arabian Standard Time",
            "territory": "OM",
            "tzid": "Asia/Muscat"
        }, {
            "timezone": "Arabian Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT-4"
        }, {
            "timezone": "Azerbaijan Standard Time",
            "territory": "001",
            "tzid": "Asia/Baku"
        }, {
            "timezone": "Azerbaijan Standard Time",
            "territory": "AZ",
            "tzid": "Asia/Baku"
        }, {
            "timezone": "Russia Time Zone 3",
            "territory": "001",
            "tzid": "Europe/Samara"
        }, {
            "timezone": "Russia Time Zone 3",
            "territory": "RU",
            "tzid": "Europe/Samara"
        }, {
            "timezone": "Russia Time Zone 3",
            "territory": "RU",
            "tzid": "Europe/Astrakhan"
        }, {
            "timezone": "Russia Time Zone 3",
            "territory": "RU",
            "tzid": "Europe/Ulyanovsk"
        }, {
            "timezone": "Mauritius Standard Time",
            "territory": "001",
            "tzid": "Indian/Mauritius"
        }, {
            "timezone": "Mauritius Standard Time",
            "territory": "MU",
            "tzid": "Indian/Mauritius"
        }, {
            "timezone": "Mauritius Standard Time",
            "territory": "RE",
            "tzid": "Indian/Reunion"
        }, {
            "timezone": "Mauritius Standard Time",
            "territory": "SC",
            "tzid": "Indian/Mahe"
        }, {
            "timezone": "Georgian Standard Time",
            "territory": "001",
            "tzid": "Asia/Tbilisi"
        }, {
            "timezone": "Georgian Standard Time",
            "territory": "GE",
            "tzid": "Asia/Tbilisi"
        }, {
            "timezone": "Caucasus Standard Time",
            "territory": "001",
            "tzid": "Asia/Yerevan"
        }, {
            "timezone": "Caucasus Standard Time",
            "territory": "AM",
            "tzid": "Asia/Yerevan"
        }, {
            "timezone": "Afghanistan Standard Time",
            "territory": "001",
            "tzid": "Asia/Kabul"
        }, {
            "timezone": "Afghanistan Standard Time",
            "territory": "AF",
            "tzid": "Asia/Kabul"
        }, {
            "timezone": "West Asia Standard Time",
            "territory": "001",
            "tzid": "Asia/Tashkent"
        }, {
            "timezone": "West Asia Standard Time",
            "territory": "AQ",
            "tzid": "Antarctica/Mawson"
        }, {
            "timezone": "West Asia Standard Time",
            "territory": "KZ",
            "tzid": "Asia/Oral"
        }, {
            "timezone": "West Asia Standard Time",
            "territory": "KZ",
            "tzid": "Asia/Aqtau"
        }, {
            "timezone": "West Asia Standard Time",
            "territory": "KZ",
            "tzid": "Asia/Aqtobe"
        }, {
            "timezone": "West Asia Standard Time",
            "territory": "MV",
            "tzid": "Indian/Maldives"
        }, {
            "timezone": "West Asia Standard Time",
            "territory": "TF",
            "tzid": "Indian/Kerguelen"
        }, {
            "timezone": "West Asia Standard Time",
            "territory": "TJ",
            "tzid": "Asia/Dushanbe"
        }, {
            "timezone": "West Asia Standard Time",
            "territory": "TM",
            "tzid": "Asia/Ashgabat"
        }, {
            "timezone": "West Asia Standard Time",
            "territory": "UZ",
            "tzid": "Asia/Tashkent Asia/Samarkand"
        }, {
            "timezone": "West Asia Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT-5"
        }, {
            "timezone": "Ekaterinburg Standard Time",
            "territory": "001",
            "tzid": "Asia/Yekaterinburg"
        }, {
            "timezone": "Ekaterinburg Standard Time",
            "territory": "RU",
            "tzid": "Asia/Yekaterinburg"
        }, {
            "timezone": "Pakistan Standard Time",
            "territory": "001",
            "tzid": "Asia/Karachi"
        }, {
            "timezone": "Pakistan Standard Time",
            "territory": "PK",
            "tzid": "Asia/Karachi"
        }, {
            "timezone": "India Standard Time",
            "territory": "001",
            "tzid": "Asia/Calcutta"
        }, {
            "timezone": "India Standard Time",
            "territory": "IN",
            "tzid": "Asia/Calcutta"
        }, {
            "timezone": "Sri Lanka Standard Time",
            "territory": "001",
            "tzid": "Asia/Colombo"
        }, {
            "timezone": "Sri Lanka Standard Time",
            "territory": "LK",
            "tzid": "Asia/Colombo"
        }, {
            "timezone": "Nepal Standard Time",
            "territory": "001",
            "tzid": "Asia/Katmandu"
        }, {
            "timezone": "Nepal Standard Time",
            "territory": "NP",
            "tzid": "Asia/Katmandu"
        }, {
            "timezone": "Central Asia Standard Time",
            "territory": "001",
            "tzid": "Asia/Almaty"
        }, {
            "timezone": "Central Asia Standard Time",
            "territory": "AQ",
            "tzid": "Antarctica/Vostok"
        }, {
            "timezone": "Central Asia Standard Time",
            "territory": "CN",
            "tzid": "Asia/Urumqi"
        }, {
            "timezone": "Central Asia Standard Time",
            "territory": "IO",
            "tzid": "Indian/Chagos"
        }, {
            "timezone": "Central Asia Standard Time",
            "territory": "KG",
            "tzid": "Asia/Bishkek"
        }, {
            "timezone": "Central Asia Standard Time",
            "territory": "KZ",
            "tzid": "Asia/Almaty"
        }, {
            "timezone": "Central Asia Standard Time",
            "territory": "KZ",
            "tzid": "Asia/Qyzylorda"
        }, {
            "timezone": "Central Asia Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT-6"
        }, {
            "timezone": "Bangladesh Standard Time",
            "territory": "001",
            "tzid": "Asia/Dhaka"
        }, {
            "timezone": "Bangladesh Standard Time",
            "territory": "BD",
            "tzid": "Asia/Dhaka"
        }, {
            "timezone": "Bangladesh Standard Time",
            "territory": "BT",
            "tzid": "Asia/Thimphu"
        }, {
            "timezone": "N. Central Asia Standard Time",
            "territory": "001",
            "tzid": "Asia/Novosibirsk"
        }, {
            "timezone": "N. Central Asia Standard Time",
            "territory": "RU",
            "tzid": "Asia/Novosibirsk"
        }, {
            "timezone": "N. Central Asia Standard Time",
            "territory": "RU",
            "tzid": "Asia/Omsk"
        }, {
            "timezone": "Myanmar Standard Time",
            "territory": "001",
            "tzid": "Asia/Rangoon"
        }, {
            "timezone": "Myanmar Standard Time",
            "territory": "CC",
            "tzid": "Indian/Cocos"
        }, {
            "timezone": "Myanmar Standard Time",
            "territory": "MM",
            "tzid": "Asia/Rangoon"
        }, {
            "timezone": "SE Asia Standard Time",
            "territory": "001",
            "tzid": "Asia/Bangkok"
        }, {
            "timezone": "SE Asia Standard Time",
            "territory": "AQ",
            "tzid": "Antarctica/Davis"
        }, {
            "timezone": "SE Asia Standard Time",
            "territory": "CX",
            "tzid": "Indian/Christmas"
        }, {
            "timezone": "SE Asia Standard Time",
            "territory": "ID",
            "tzid": "Asia/Jakarta Asia/Pontianak"
        }, {
            "timezone": "SE Asia Standard Time",
            "territory": "KH",
            "tzid": "Asia/Phnom_Penh"
        }, {
            "timezone": "SE Asia Standard Time",
            "territory": "LA",
            "tzid": "Asia/Vientiane"
        }, {
            "timezone": "SE Asia Standard Time",
            "territory": "TH",
            "tzid": "Asia/Bangkok"
        }, {
            "timezone": "SE Asia Standard Time",
            "territory": "VN",
            "tzid": "Asia/Saigon"
        }, {
            "timezone": "SE Asia Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT-7"
        }, {
            "timezone": "North Asia Standard Time",
            "territory": "001",
            "tzid": "Asia/Krasnoyarsk"
        }, {
            "timezone": "North Asia Standard Time",
            "territory": "RU",
            "tzid": "Asia/Krasnoyarsk"
        }, {
            "timezone": "North Asia Standard Time",
            "territory": "RU",
            "tzid": "Asia/Barnaul"
        }, {
            "timezone": "North Asia Standard Time",
            "territory": "RU",
            "tzid": "Asia/Novokuznetsk"
        }, {
            "timezone": "China Standard Time",
            "territory": "001",
            "tzid": "Asia/Shanghai"
        }, {
            "timezone": "China Standard Time",
            "territory": "CN",
            "tzid": "Asia/Shanghai"
        }, {
            "timezone": "China Standard Time",
            "territory": "HK",
            "tzid": "Asia/Hong_Kong"
        }, {
            "timezone": "China Standard Time",
            "territory": "MO",
            "tzid": "Asia/Macau"
        }, {
            "timezone": "North Asia East Standard Time",
            "territory": "001",
            "tzid": "Asia/Irkutsk"
        }, {
            "timezone": "North Asia East Standard Time",
            "territory": "RU",
            "tzid": "Asia/Irkutsk"
        }, {
            "timezone": "Singapore Standard Time",
            "territory": "001",
            "tzid": "Asia/Singapore"
        }, {
            "timezone": "Singapore Standard Time",
            "territory": "BN",
            "tzid": "Asia/Brunei"
        }, {
            "timezone": "Singapore Standard Time",
            "territory": "ID",
            "tzid": "Asia/Makassar"
        }, {
            "timezone": "Singapore Standard Time",
            "territory": "MY",
            "tzid": "Asia/Kuala_Lumpur"
        }, {
            "timezone": "Singapore Standard Time",
            "territory": "MY",
            "tzid": "Asia/Kuching"
        }, {
            "timezone": "Singapore Standard Time",
            "territory": "PH",
            "tzid": "Asia/Manila"
        }, {
            "timezone": "Singapore Standard Time",
            "territory": "SG",
            "tzid": "Asia/Singapore"
        }, {
            "timezone": "Singapore Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT-8"
        }, {
            "timezone": "W. Australia Standard Time",
            "territory": "001",
            "tzid": "Australia/Perth"
        }, {
            "timezone": "W. Australia Standard Time",
            "territory": "AQ",
            "tzid": "Antarctica/Casey"
        }, {
            "timezone": "W. Australia Standard Time",
            "territory": "AU",
            "tzid": "Australia/Perth"
        }, {
            "timezone": "Taipei Standard Time",
            "territory": "001",
            "tzid": "Asia/Taipei"
        }, {
            "timezone": "Taipei Standard Time",
            "territory": "TW",
            "tzid": "Asia/Taipei"
        }, {
            "timezone": "Ulaanbaatar Standard Time",
            "territory": "001",
            "tzid": "Asia/Ulaanbaatar"
        }, {
            "timezone": "Ulaanbaatar Standard Time",
            "territory": "MN",
            "tzid": "Asia/Ulaanbaatar"
        }, {
            "timezone": "Ulaanbaatar Standard Time",
            "territory": "MN",
            "tzid": "Asia/Choibalsan"
        }, {
            "timezone": "North Korea Standard Time",
            "territory": "001",
            "tzid": "Asia/Pyongyang"
        }, {
            "timezone": "North Korea Standard Time",
            "territory": "KP",
            "tzid": "Asia/Pyongyang"
        }, {
            "timezone": "Tokyo Standard Time",
            "territory": "001",
            "tzid": "Asia/Tokyo"
        }, {
            "timezone": "Tokyo Standard Time",
            "territory": "ID",
            "tzid": "Asia/Jayapura"
        }, {
            "timezone": "Tokyo Standard Time",
            "territory": "JP",
            "tzid": "Asia/Tokyo"
        }, {
            "timezone": "Tokyo Standard Time",
            "territory": "PW",
            "tzid": "Pacific/Palau"
        }, {
            "timezone": "Tokyo Standard Time",
            "territory": "TL",
            "tzid": "Asia/Dili"
        }, {
            "timezone": "Tokyo Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT-9"
        }, {
            "timezone": "Korea Standard Time",
            "territory": "001",
            "tzid": "Asia/Seoul"
        }, {
            "timezone": "Korea Standard Time",
            "territory": "KR",
            "tzid": "Asia/Seoul"
        }, {
            "timezone": "Yakutsk Standard Time",
            "territory": "001",
            "tzid": "Asia/Yakutsk"
        }, {
            "timezone": "Yakutsk Standard Time",
            "territory": "RU",
            "tzid": "Asia/Yakutsk"
        }, {
            "timezone": "Yakutsk Standard Time",
            "territory": "RU",
            "tzid": "Asia/Chita"
        }, {
            "timezone": "Yakutsk Standard Time",
            "territory": "RU",
            "tzid": "Asia/Khandyga"
        }, {
            "timezone": "Cen. Australia Standard Time",
            "territory": "001",
            "tzid": "Australia/Adelaide"
        }, {
            "timezone": "Cen. Australia Standard Time",
            "territory": "AU",
            "tzid": "Australia/Adelaide"
        }, {
            "timezone": "Cen. Australia Standard Time",
            "territory": "AU",
            "tzid": "Australia/Broken_Hill"
        }, {
            "timezone": "AUS Central Standard Time",
            "territory": "001",
            "tzid": "Australia/Darwin"
        }, {
            "timezone": "AUS Central Standard Time",
            "territory": "AU",
            "tzid": "Australia/Darwin"
        }, {
            "timezone": "E. Australia Standard Time",
            "territory": "001",
            "tzid": "Australia/Brisbane"
        }, {
            "timezone": "E. Australia Standard Time",
            "territory": "AU",
            "tzid": "Australia/Brisbane"
        }, {
            "timezone": "E. Australia Standard Time",
            "territory": "AU",
            "tzid": "Australia/Lindeman"
        }, {
            "timezone": "AUS Eastern Standard Time",
            "territory": "001",
            "tzid": "Australia/Sydney"
        }, {
            "timezone": "AUS Eastern Standard Time",
            "territory": "AU",
            "tzid": "Australia/Sydney"
        }, {
            "timezone": "AUS Eastern Standard Time",
            "territory": "AU",
            "tzid": "Australia/Melbourne"
        }, {
            "timezone": "West Pacific Standard Time",
            "territory": "001",
            "tzid": "Pacific/Port_Moresby"
        }, {
            "timezone": "West Pacific Standard Time",
            "territory": "AQ",
            "tzid": "Antarctica/DumontDUrville"
        }, {
            "timezone": "West Pacific Standard Time",
            "territory": "FM",
            "tzid": "Pacific/Truk"
        }, {
            "timezone": "West Pacific Standard Time",
            "territory": "GU",
            "tzid": "Pacific/Guam"
        }, {
            "timezone": "West Pacific Standard Time",
            "territory": "MP",
            "tzid": "Pacific/Saipan"
        }, {
            "timezone": "West Pacific Standard Time",
            "territory": "PG",
            "tzid": "Pacific/Port_Moresby"
        }, {
            "timezone": "West Pacific Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT-10"
        }, {
            "timezone": "Tasmania Standard Time",
            "territory": "001",
            "tzid": "Australia/Hobart"
        }, {
            "timezone": "Tasmania Standard Time",
            "territory": "AU",
            "tzid": "Australia/Hobart"
        }, {
            "timezone": "Tasmania Standard Time",
            "territory": "AU",
            "tzid": "Australia/Currie"
        }, {
            "timezone": "Magadan Standard Time",
            "territory": "001",
            "tzid": "Asia/Magadan"
        }, {
            "timezone": "Magadan Standard Time",
            "territory": "RU",
            "tzid": "Asia/Magadan"
        }, {
            "timezone": "Vladivostok Standard Time",
            "territory": "001",
            "tzid": "Asia/Vladivostok"
        }, {
            "timezone": "Vladivostok Standard Time",
            "territory": "RU",
            "tzid": "Asia/Vladivostok"
        }, {
            "timezone": "Vladivostok Standard Time",
            "territory": "RU",
            "tzid": "Asia/Ust-Nera"
        }, {
            "timezone": "Russia Time Zone 10",
            "territory": "001",
            "tzid": "Asia/Srednekolymsk"
        }, {
            "timezone": "Russia Time Zone 10",
            "territory": "RU",
            "tzid": "Asia/Srednekolymsk"
        }, {
            "timezone": "Russia Time Zone 10",
            "territory": "RU",
            "tzid": "Asia/Sakhalin"
        }, {
            "timezone": "Central Pacific Standard Time",
            "territory": "001",
            "tzid": "Pacific/Guadalcanal"
        }, {
            "timezone": "Central Pacific Standard Time",
            "territory": "AU",
            "tzid": "Antarctica/Macquarie"
        }, {
            "timezone": "Central Pacific Standard Time",
            "territory": "FM",
            "tzid": "Pacific/Ponape"
        }, {
            "timezone": "Central Pacific Standard Time",
            "territory": "FM",
            "tzid": "Pacific/Kosrae"
        }, {
            "timezone": "Central Pacific Standard Time",
            "territory": "NC",
            "tzid": "Pacific/Noumea"
        }, {
            "timezone": "Central Pacific Standard Time",
            "territory": "NF",
            "tzid": "Pacific/Norfolk"
        }, {
            "timezone": "Central Pacific Standard Time",
            "territory": "PG",
            "tzid": "Pacific/Bougainville"
        }, {
            "timezone": "Central Pacific Standard Time",
            "territory": "SB",
            "tzid": "Pacific/Guadalcanal"
        }, {
            "timezone": "Central Pacific Standard Time",
            "territory": "VU",
            "tzid": "Pacific/Efate"
        }, {
            "timezone": "Central Pacific Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT-11"
        }, {
            "timezone": "Russia Time Zone 11",
            "territory": "001",
            "tzid": "Asia/Kamchatka"
        }, {
            "timezone": "Russia Time Zone 11",
            "territory": "RU",
            "tzid": "Asia/Kamchatka"
        }, {
            "timezone": "Russia Time Zone 11",
            "territory": "RU",
            "tzid": "Asia/Anadyr"
        }, {
            "timezone": "New Zealand Standard Time",
            "territory": "001",
            "tzid": "Pacific/Auckland"
        }, {
            "timezone": "New Zealand Standard Time",
            "territory": "AQ",
            "tzid": "Antarctica/McMurdo"
        }, {
            "timezone": "New Zealand Standard Time",
            "territory": "NZ",
            "tzid": "Pacific/Auckland"
        }, {
            "timezone": "UTC+12",
            "territory": "001",
            "tzid": "Etc/GMT-12"
        }, {
            "timezone": "UTC+12",
            "territory": "KI",
            "tzid": "Pacific/Tarawa"
        }, {
            "timezone": "UTC+12",
            "territory": "MH",
            "tzid": "Pacific/Majuro"
        }, {
            "timezone": "UTC+12",
            "territory": "MH",
            "tzid": "Pacific/Kwajalein"
        }, {
            "timezone": "UTC+12",
            "territory": "NR",
            "tzid": "Pacific/Nauru"
        }, {
            "timezone": "UTC+12",
            "territory": "TV",
            "tzid": "Pacific/Funafuti"
        }, {
            "timezone": "UTC+12",
            "territory": "UM",
            "tzid": "Pacific/Wake"
        }, {
            "timezone": "UTC+12",
            "territory": "WF",
            "tzid": "Pacific/Wallis"
        }, {
            "timezone": "UTC+12",
            "territory": "ZZ",
            "tzid": "Etc/GMT-12"
        }, {
            "timezone": "Fiji Standard Time",
            "territory": "001",
            "tzid": "Pacific/Fiji"
        }, {
            "timezone": "Fiji Standard Time",
            "territory": "FJ",
            "tzid": "Pacific/Fiji"
        }, {
            "timezone": "Tonga Standard Time",
            "territory": "001",
            "tzid": "Pacific/Tongatapu"
        }, {
            "timezone": "Tonga Standard Time",
            "territory": "KI",
            "tzid": "Pacific/Enderbury"
        }, {
            "timezone": "Tonga Standard Time",
            "territory": "TK",
            "tzid": "Pacific/Fakaofo"
        }, {
            "timezone": "Tonga Standard Time",
            "territory": "TO",
            "tzid": "Pacific/Tongatapu"
        }, {
            "timezone": "Tonga Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT-13"
        }, {
            "timezone": "Samoa Standard Time",
            "territory": "001",
            "tzid": "Pacific/Apia"
        }, {
            "timezone": "Samoa Standard Time",
            "territory": "WS",
            "tzid": "Pacific/Apia"
        }, {
            "timezone": "Line Islands Standard Time",
            "territory": "001",
            "tzid": "Pacific/Kiritimati"
        }, {
            "timezone": "Line Islands Standard Time",
            "territory": "KI",
            "tzid": "Pacific/Kiritimati"
        }, {
            "timezone": "Line Islands Standard Time",
            "territory": "ZZ",
            "tzid": "Etc/GMT-14"
        }
        ];

    	this.GetByTimezone = function (timezone) {
        	var result = [];
        	angular.forEach(timezones, function (value, key) {
        		if (value.timezone === timezone)
        		{
        			result.push(value);
        		}
        	});
        	return result;
        }

        this.getByTzid = function (tzid) {
        	var result = [];
        	angular.forEach(timezones, function (value, key) {
        		if (value.tzid === tzid) {
        			result.push(value);
        		}
        	});
        	return result;
        }

        this.getByTerritory = function (territory) {
        	var result = [];
        	angular.forEach(timezones, function (value, key) {
        		if (value.territory === territory) {
        			result.push(value);
        		}
        	});
        	return result;
        }
        
    }
})();