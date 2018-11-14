'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileActions = exports.helpComponentActions = exports.permissionActions = exports.instanceActions = exports.appListActions = exports.sessionActions = undefined;

var _session = require('./session');

var sessionActions = _interopRequireWildcard(_session);

var _appList = require('./appList');

var appListActions = _interopRequireWildcard(_appList);

var _instance = require('./instance');

var instanceActions = _interopRequireWildcard(_instance);

var _permissions = require('./permissions');

var permissionActions = _interopRequireWildcard(_permissions);

var _helpComponent = require('./helpComponent');

var helpComponentActions = _interopRequireWildcard(_helpComponent);

var _files = require('./files');

var fileActions = _interopRequireWildcard(_files);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.sessionActions = sessionActions;
exports.appListActions = appListActions;
exports.instanceActions = instanceActions;
exports.permissionActions = permissionActions;
exports.helpComponentActions = helpComponentActions;
exports.fileActions = fileActions;