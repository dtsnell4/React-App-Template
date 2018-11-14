import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as types from './actionTypes';
import { AppCentral } from '../AppcentralCore/web/react/src/api';

// Action Creator:
export function getCampusesSuccess(campusList) {
  return {
    type: types.GET_CAMPUSES_SUCCESS,
    campusList,
  };
}

// Actions
export const getCampuses = (token, active, includeId) => (dispatch) => {
  dispatch(showLoading());
  return new Promise((resolve, reject) => AppCentral.getCampuses(token, undefined, active, includeId)
    .then((response) => {
      dispatch(getCampusesSuccess(response));
      dispatch(hideLoading());
      resolve();
    })
    .catch((error) => {
      dispatch(hideLoading());
      reject(error.error_description);
    }));
};

export const saveCampus = (token, campus) => (dispatch) => {
  dispatch(showLoading());
  return new Promise((resolve, reject) => AppCentral.saveCampus(token, campus, campus.id === null || campus.id === undefined)
    .then((response) => {
      resolve(response);
      dispatch(hideLoading());
    })
    .catch((error) => {
      dispatch(hideLoading());
      reject(error.exceptionMessage);
    }));
};
