(function() {
  "use strict";

  var core = angular.module("AppCentral.core");

  core.run(locationShanged);

  /*@ngInject*/
  function locationShanged(
    $rootScope,
    $location,
    $window,
    loginProvider,
    toastr,
    currentInstance,
    $route,
    $q,
    localStorageService,
    config,
    Instances,
    authorizationService,
    currentUser,
    $http
  ) {
    $rootScope.$on("$routeChangeSuccess", function() {
      if (config.useInstances === undefined) {
        config.useInstances = true;

        document.title =
          currentInstance.getInstance().id !== undefined ||
          currentInstance.getInstance().id !== null
            ? //if the route does not define a title then $route.current.title is null..
              ($route.current.title ? $route.current.title + " | " : "") +
              currentInstance.getInstance().name +
              "-" +
              currentInstance.getInstance().applicationName
            : config.appName +
              ($route.current.title ? $route.current.title + " | " : "");
      }
    });
    $rootScope.$on("$routeChangeError", function(
      evt,
      current,
      previous,
      rejection
    ) {
      if (rejection === "already_logged_in") {
        console.log("already logged in go to /");

        $location.path("/");
      }
    });
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      try {
        console.log("Navigation", $location.path());
        var user = loginProvider.getUser();
        if (user) {
          var slug = next.pathParams.slug || 1;
          var q1 = $http.get(config.appCentralApi + "/instances?slug=" + slug);
          var q2 = $http.get(config.appCentralApi + "/users/" + user.NSUID);
          $q.all([q1, q2]).then(function(result) {
            try {
              /////// Begin ////
              var data = result[0];
              var info = result[1].data;
              if (info.lastLoggedIn) {
                delete info.lastLoggedIn;
              }

              var pathName = location.pathname
                .replace("/", "")
                .substring(0, location.pathname.lastIndexOf("/") - 1);
              var instance = 1;

              try {
                if (data && data.data && data.data.length > 0) {
                  instance = data.data[0].id;
                }
              } catch (ex) {}

              var path = $location.path();

              try {
                if (path.charAt(path.length - 1) === "/") {
                  path = path.slice(0, path.length - 1);
                }
              } catch (ex) {}

              var ______URLALREADYNAVIGATED =
                sessionStorage.getItem("______LASTURNAVIGATED") != path;

              if (info.userId !== -1 && ______URLALREADYNAVIGATED) {
                var item = JSON.stringify(info);
                sessionStorage.setItem("______LASTURNAVIGATED", path);
                var ____url =
                  config.appCentralApi +
                  "instances/" +
                  instance.toString() +
                  "/analytics";
                $http.post(____url, {
                  userId: info.userId,
                  InstanceName: pathName,
                  jsonValue: item
                });
              }
            } catch (ex) {}
            /// End //////////
          });
        }
      } catch (ex) {}

      $rootScope.aside = false;
      var authorized;
      if (config.useInstances) {
        var nextSlug = "";
        if (next && next.pathParams) {
          if (next.pathParams.slug) {
            nextSlug = next.pathParams.slug;
          }
        }
        var currentSlug = "";
        if (current && current.pathParams) {
          currentSlug = current.pathParams.slug;
        }

        if (config.appName === "AppCentral") {
          nextSlug = "appcentral";
        }

        var instanceFromSlug = function() {
          //console.log('11');
          //debugger;
          //if (nextSlug !== currentSlug)
          return currentInstance.setInstance(nextSlug);
          //return currentSlug;
        };

        next.resolve = angular.extend(next.resolve || {}, {
          instanceFromSlug: instanceFromSlug
        });
        var instanceId = 0;

        //debugger;
        if (nextSlug) {
          var nextins = Instances.query({
            slug: nextSlug
          });

          nextins.$promise.then(function(result) {
            if (result.length === 0 && nextSlug !== "") {
              console.log(
                "if result.length === 0 && nextSlug !== '', redirect to login",
                result,
                nextSlug
              );
              $window.location.href = config.loginUrl;
            } else if (!result[0].active) {
              console.log("!result[0].active, redirect to login", result);

              $window.location.href = config.loginUrl;
            } else {
              instanceId = result[0].id;
              if (next.access !== undefined) {
                if (next.access.requiresLogin) {
                  var roles = authorizationService
                    .getRoles(instanceId)
                    .then(function(rols) {
                      authorized = authorizationService.authorize(
                        next.access.requiresLogin,
                        next.access.requiredPermission,
                        next.access.permissionType,
                        instanceId,
                        rols
                      );
                      if (authorized === "requiresLogin") {
                        console.log("requiresLogin");
                        $window.location.href = config.loginUrl;
                      } else if (authorized === "notAuthorized") {
                        console.log("notAuthorized");
                        var currenInstance = $location.$$path.split("/")[1];
                        $location.path("/" + currenInstance + "/authorization");
                        $location.replace();
                      }
                    });
                }
              }
            }
          });
        } else {
          console.log("!nextSlug", nextSlug);

          $window.location.href = config.loginUrl;
        }
      }

      toastr.clear();

      if (
        next &&
        next.$$route &&
        next.$$route.controller !== "LoginController" &&
        ((next.$$route.access != undefined &&
          next.$$route.access.requiresLogin != undefined &&
          next.$$route.access.requiresLogin == true) ||
          next.$$route.access == undefined)
      ) {
        if (!loginProvider.isLoggedIn()) {
          loginProvider.refreshToken().error(function() {
            loginProvider.logout();
            if (
              $location.$$path !== "/login" &&
              $location.$$path !== "/login/"
            ) {
              var returnUrl = $location.$$absUrl;
              localStorageService.set("returnUrl", {
                data: returnUrl
              });
            }

            console.log("not logged in to login", config.loginUrl);

            //If the user is already on loggin page do not reload
            if (!(window.location.href.indexOf("login") > -1)) {
              $window.location.href = config.loginUrl;
            }
          });
        }
      }
    });
  }
})();
