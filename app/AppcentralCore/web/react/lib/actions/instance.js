'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeInstance = changeInstance;
exports.changeAppNAme = changeAppNAme;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function changeInstance(instanceId) {
  return {
    type: types.INSTANCE_CHANGE,
    instanceId: instanceId
  };
}

function changeAppNAme(appName) {
  return {
    type: types.CHANGE_APPNAME,
    appName: appName
  };
}