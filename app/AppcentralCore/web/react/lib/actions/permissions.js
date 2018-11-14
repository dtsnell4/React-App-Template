'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPermissions = undefined;
exports.getPermissionsSucess = getPermissionsSucess;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _api = require('../api');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getPermissionsSucess(permissions) {
  return {
    type: types.GET_PERMISSIONS_SUCESS,
    permissions: permissions
  };
}

var getPermissions = exports.getPermissions = function getPermissions(token) {
  var instanceId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      return _api.AppCentral.getPermissions(token, instanceId).then(function (response) {
        dispatch(getPermissionsSucess(response));
        resolve();
      }).catch(function (error) {
        reject(error.error_description);
      });
    });
  };
};