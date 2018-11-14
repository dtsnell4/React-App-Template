'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.impersonateUser = exports.login = undefined;
exports.loginSuccess = loginSuccess;
exports.loginError = loginError;
exports.endImpersonation = endImpersonation;
exports.validationSuccess = validationSuccess;
exports.impersonateSuccess = impersonateSuccess;
exports.validateToken = validateToken;
exports.EndImpersonation = EndImpersonation;
exports.logoutUser = logoutUser;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _api = require('../api');

var _lib = require('../lib');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function loginSuccess(token) {
  return {
    type: types.LOGIN_SUCCESS,
    token: token
  };
}

function loginError() {
  return {
    type: types.LOGIN_ERROR
  };
}

function endImpersonation(token) {
  return {
    type: types.END_IMPERSONATION,
    token: token
  };
}

function validationSuccess(token) {
  return {
    type: types.TOKEN_VALIDATION_SUCCESS,
    token: token
  };
}

function impersonateSuccess(token) {
  return {
    type: types.IMPERSONATION_SUCESS,
    token: token
  };
}

var login = exports.login = function login(username, password) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      return _api.AppCentral.login(username, password).then(function (response) {
        dispatch(loginSuccess(response));
        resolve();
      }).catch(function (error) {
        dispatch(loginError());
        reject(error.number ? error.number : error.error_description);
      });
    });
  };
};

var impersonateUser = exports.impersonateUser = function impersonateUser(token, userId) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      return _api.AppCentral.impersonateUser(token, userId).then(function (response) {
        dispatch(impersonateSuccess(response));
        resolve();
      }).catch(function (error) {
        dispatch(loginError());
        reject(error.error_description);
      });
    });
  };
};

function validateToken(token) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      if (token == null) {
        reject(new Error('No session token'));
      } else {
        var validToken = (0, _lib.tokenValidation)(token);
        if (validToken) {
          (0, _lib.setAngularToken)(token);
          dispatch(validationSuccess(token));
          resolve(token);
        } else {
          _api.AppCentral.RefreshToken(token).then(function (newToken) {
            (0, _lib.setAngularToken)(newToken);
            dispatch(validationSuccess(newToken));
            resolve(token);
          }).catch(function (error) {
            if (error.number === -2147418113) {
              reject(error.number);
            } else {
              reject(new Error('Error refreshing token' + error));
            }
          });
        }
      }
    });
  };
}

function EndImpersonation(token) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      _api.AppCentral.RefreshToken(token).then(function (newToken) {
        dispatch(endImpersonation(newToken));
        resolve(token);
      }).catch(function (error) {
        reject(new Error('Error refreshing token' + error));
      });
    });
  };
}

function logoutUser() {
  return {
    type: types.LOGOUT_USER
  };
}