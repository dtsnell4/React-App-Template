import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { AppCentral } from '../AppcentralCore/web/react/src/api';
import * as types from '../actions/actionTypes';

export function getBuildingsSuccess(buildings) {
  return {
    type: types.GET_BUILDINGS_SUCCESS,
    buildings,
  };
}

export function clearBuildingsSuccess() {
  return {
    type: types.CLEAR_BUILDINGS,
  };
}

export const clearBuildings = () => (dispatch) => {
  dispatch(clearBuildingsSuccess());
};

export const getBuildings = (token, active, campusId, includeId) => (dispatch) => {
  dispatch(showLoading());
  return new Promise((resolve, reject) => AppCentral.getBuildings(token, undefined, active, campusId, false, includeId)
    .then((response) => {
      dispatch(hideLoading());
      dispatch(getBuildingsSuccess(response));
      resolve();
    })
    .catch((error) => {
      dispatch(hideLoading());
      reject(error.error_description);
    }));
};

export const saveBuilding = (token, building, campusId) => (dispatch) => {
  dispatch(showLoading());
  return new Promise((resolve, reject) => AppCentral.saveBuilding(token, building, campusId, building.id === null || building.id === undefined)
    .then((response) => {
      resolve(response);
      dispatch(hideLoading());
    })
    .catch((error) => {
      dispatch(hideLoading());
      reject(error.exceptionMessage);
    }));
};

export const getBuilding = (token, buildingId, includeBooking = true) => (dispatch) => {
  dispatch(showLoading());
  return new Promise((resolve, reject) => AppCentral.getBuildings(token, buildingId, undefined, undefined, includeBooking)
    .then((response) => {
      resolve(response);
      dispatch(hideLoading());
    })
    .catch((error) => {
      dispatch(hideLoading());
      reject(error.error_description);
    }));
};
