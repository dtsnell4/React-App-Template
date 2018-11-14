(function() {
  "use strict";

  var core = angular.module("AppCentral.core");
  core.run(init);

  function init(
    loginProvider,
    $location,
    $route,
    paginationConfig,
    localStorageService,
    config
  ) {
    //$route.reload();
    if (config.useInstances === undefined) {
      config.useInstances = true;
    }
    paginationConfig.firstText = "«";
    paginationConfig.previousText = "‹";
    paginationConfig.nextText = "›";
    paginationConfig.lastText = "»";
    paginationConfig.itemsPerPage = 10;
    paginationConfig.boundaryLinks = true;
    paginationConfig.maxSize = 5;
    localStorageService.remove("instance");
  }
})();

appcentral = window.appcentral || {};
appcentral.lang = {};
appcentral.auth = {};
appcentral.gtm = {};

appcentral.auth = (function() {
  var factory = {};

  factory.authorizationData = function(key) {
    if (sessionStorage.getItem(key)) {
      return JSON.parse(sessionStorage.getItem(key));
    }
  };

  factory.setAuthorizationData = function(key, object) {
    sessionStorage.setItem(key, JSON.stringify(object));
  };

  return factory;
})();

appcentral.lang = (function() {
  function changeLang(lang) {
    var evt = new CustomEvent("langchanged", {
      detail: lang
    });
    window.dispatchEvent(evt);
  }

  return {
    changeLang: changeLang
  };
})();

appcentral.gtm = (function() {
  function sendEvent(obj) {
    try {
      console.log(obj);
      window.dataLayer.push(obj);
    } catch (ex) {
      console.log(ex);
    }
  }

  function init(data, url, http, $location) {
    if (
      url &&
      http &&
      (getInfo().userId !== data.userId ||
        localStorage.getItem("__DATAUSER__") === null)
    ) 
    
    {
      data.lastLoggedIn = new Date();
      sessionStorage.setItem("______LASTURNAVIGATED", $location.path());
      http.post(url, {
        userId: data.userId,
        InstanceName: location.pathname
          .replace("/", "")
          .substring(0, location.pathname.lastIndexOf("/") - 1),
        jsonValue: JSON.stringify(data)
      });
    }

    localStorage.setItem("__DATAUSER__", JSON.stringify(data));
  }

  function getInfo() {
    var element = localStorage.getItem("__DATAUSER__");
    if (element) {
      element = JSON.parse(element);
      parseElement(parseElement);
    } else {
      return {
        userId: -1,
        major: "NA",
        level: "NA",
        college: "NA"
      };
    }
  }

  function parseElement(element) {
    try {

        var response = {};
        if (element && element.userId) {
            response.userId = element.userId || "NA";
            if (element.studentStatus) {
                major = element.studentStatus.majorCodeDescription || "NA";
                level = element.studentStatus.levelCodeDescription || "NA";
                college = element.studentStatus.collegeCodeDescription || "NA";
            }
        return response;
        } 
        else {
            return {
                userId: element.userId || "NA",
                major: element.studentStatus.majorCodeDescription || "NA",
                level: element.studentStatus.levelCodeDescription || "NA",
                college: element.studentStatus.collegeCodeDescription || "NA"
            };
        }
    } catch (ex) {
        return {
            userId: -1,
            major: "NA",
            level: "NA",
            college: "NA"
        };
    }
}

  return {
    sendEvent: sendEvent,
    init: init,
    getInfo: getInfo,
    parseElement: parseElement,
  };
})();
