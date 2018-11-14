import * as types from './actionTypes';
import { AppCentral } from '../api';
import { tokenValidation, setAngularToken } from '../lib';

export function loginSuccess(token) {
  return {
    type: types.LOGIN_SUCCESS,
    token,
  };
}

export function loginError() {
  return {
    type: types.LOGIN_ERROR,
  };
}

export function endImpersonation(token) {
  return {
    type: types.END_IMPERSONATION,
    token,
  };
}

export function validationSuccess(token) {
  return {
    type: types.TOKEN_VALIDATION_SUCCESS,
    token,
  };
}

export function impersonateSuccess(token) {
  return {
    type: types.IMPERSONATION_SUCESS,
    token,
  };
}

export const login = (username, password) => (dispatch) =>
  new Promise((resolve, reject) => AppCentral.login(username, password)
    .then((response) => {
      dispatch(loginSuccess(response));
      resolve();
    })
    .catch((error) => {
      dispatch(loginError());
      reject(error.number ? error.number : error.error_description);
    }));

export const impersonateUser = (token, userId) => (dispatch) =>
  new Promise((resolve, reject) => AppCentral.impersonateUser(token, userId)
    .then((response) => {
      dispatch(impersonateSuccess(response));
      resolve();
    })
    .catch((error) => {
      dispatch(loginError());
      reject(error.error_description);
    }));

export function validateToken(token) {
  return (dispatch) => new Promise((resolve, reject) => {
    if (token == null) {
      reject(new Error('No session token'));
    } else {
      const validToken = tokenValidation(token);
      if (validToken) {
        setAngularToken(token);
        dispatch(validationSuccess(token));
        resolve(token);
      } else {
        AppCentral.RefreshToken(token)
          .then((newToken) => {
            setAngularToken(newToken);
            dispatch(validationSuccess(newToken));
            resolve(token);
          })
          .catch((error) => {
            if (error.number === -2147418113) {
              reject(error.number);
            } else {
              reject(new Error(`Error refreshing token${error}`));
            }
          });
      }
    }
  });
}

export function EndImpersonation(token) {
  return (dispatch) => new Promise((resolve, reject) => {
    AppCentral.RefreshToken(token)
      .then((newToken) => {
        dispatch(endImpersonation(newToken));
        resolve(token);
      })
      .catch((error) => {
        reject(new Error(`Error refreshing token${error}`));
      });
  });
}

export function logoutUser() {
  return {
    type: types.LOGOUT_USER,
  };
}
