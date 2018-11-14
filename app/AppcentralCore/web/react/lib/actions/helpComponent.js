'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHelpComponent = undefined;
exports.getHelpComponentSuccess = getHelpComponentSuccess;
exports.getHelpComponentError = getHelpComponentError;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _api = require('../api');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getHelpComponentSuccess(helpComponent) {
  return {
    type: types.GET_HELP_COMPONENT_SUCCESS,
    helpComponent: helpComponent
  };
}

function getHelpComponentError() {
  return {
    type: types.GET_HELP_COMPONENT_ERROR
  };
}
var getHelpComponent = exports.getHelpComponent = function getHelpComponent(token) {
  var instanceId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      return _api.AppCentral.getHelpComponent(token, instanceId).then(function (response) {
        dispatch(getHelpComponentSuccess(response));
        resolve();
      }).catch(function (error) {
        dispatch(getHelpComponentError());
        reject(error.error_description);
      });
    });
  };
};