import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as types from './actionTypes';
import { AppCentral } from '../api';

export function getAppsSuccess(applications) {
  return {
    type: types.GET_APPS_SUCCESS,
    applications,
  };
}

export function getAppsError() {
  return {
    type: types.GET_APPS_ERROR,
  };
}


export const getApps = (token) => (dispatch) => {
  dispatch(showLoading());
  return new Promise((resolve, reject) => AppCentral.getApps(token)
    .then((response) => {
      response = response.filter((e) => e.name !== 'Dev Team Announcement');
      response = response.filter((e) => e.name !== 'Law Test');
      dispatch(getAppsSuccess(response));
      dispatch(hideLoading());
      resolve();
    })
    .catch((error) => {
      dispatch(getAppsError());
      reject(error.error_description);
    }));
};
