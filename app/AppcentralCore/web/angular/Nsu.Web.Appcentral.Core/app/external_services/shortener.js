(function () {
    
    angular.module('AppCentral.core')
        .factory('shortenerService', shortener);

    function shortener($q, $http) {

        var dataFactory = {};

        dataFactory.shortUrl = function(url, callback){

              var data = JSON.stringify({
                "longUrl": url
              });
              
              var xhr = new XMLHttpRequest();
              xhr.withCredentials = true;
              
              xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                  callback(JSON.parse(this.responseText));
                  console.log(this.responseText);
                }
              });
              
              xhr.open("POST", "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyAcb6KdrtfifH3cSOgdorqx42QyEJpbgPA");
              xhr.setRequestHeader("content-type", "application/json");
              xhr.setRequestHeader("cache-control", "no-cache");
              xhr.setRequestHeader("postman-token", "ed74a9df-43af-86fa-3f38-dd8a4c02a993");
              
              xhr.send(data);
        }

        return dataFactory;       
    }
})();