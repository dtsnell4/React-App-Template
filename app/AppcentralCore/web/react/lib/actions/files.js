'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFile = exports.uploadFile = undefined;

var _reactReduxLoadingBar = require('react-redux-loading-bar');

var _api = require('../api');

var uploadFile = exports.uploadFile = function uploadFile(token, file, instanceId) {
  return function (dispatch) {
    dispatch((0, _reactReduxLoadingBar.showLoading)());
    return new Promise(function (resolve, reject) {
      return _api.AppCentral.UploadFile(token, file, instanceId).then(function (response) {
        resolve(response);
        dispatch((0, _reactReduxLoadingBar.hideLoading)());
      }).catch(function (error) {
        dispatch((0, _reactReduxLoadingBar.hideLoading)());
        reject(error.error_description);
      });
    });
  };
};

var removeFile = exports.removeFile = function removeFile(token, fileId, instanceId) {
  return function () {
    return new Promise(function (resolve, reject) {
      return _api.AppCentral.RemoveFile(token, fileId, instanceId).then(function () {
        resolve();
      }).catch(function (error) {
        reject(error.error_description);
      });
    });
  };
};