'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApps = undefined;
exports.getAppsSuccess = getAppsSuccess;
exports.getAppsError = getAppsError;

var _reactReduxLoadingBar = require('react-redux-loading-bar');

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _api = require('../api');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getAppsSuccess(applications) {
  return {
    type: types.GET_APPS_SUCCESS,
    applications: applications
  };
}

function getAppsError() {
  return {
    type: types.GET_APPS_ERROR
  };
}

var getApps = exports.getApps = function getApps(token) {
  return function (dispatch) {
    dispatch((0, _reactReduxLoadingBar.showLoading)());
    return new Promise(function (resolve, reject) {
      return _api.AppCentral.getApps(token).then(function (response) {
        response = response.filter(function (e) {
          return e.name !== 'Dev Team Announcement';
        });
        response = response.filter(function (e) {
          return e.name !== 'Law Test';
        });
        dispatch(getAppsSuccess(response));
        dispatch((0, _reactReduxLoadingBar.hideLoading)());
        resolve();
      }).catch(function (error) {
        dispatch(getAppsError());
        reject(error.error_description);
      });
    });
  };
};