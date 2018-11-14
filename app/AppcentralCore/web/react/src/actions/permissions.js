import * as types from './actionTypes';
import { AppCentral } from '../api';

export function getPermissionsSucess(permissions) {
  return {
    type: types.GET_PERMISSIONS_SUCESS,
    permissions,
  };
}

export const getPermissions = (token, instanceId = 1) => (dispatch) =>
  new Promise((resolve, reject) => AppCentral.getPermissions(token, instanceId)
    .then((response) => {
      dispatch(getPermissionsSucess(response));
      resolve();
    })
    .catch((error) => {
      reject(error.error_description);
    }));
