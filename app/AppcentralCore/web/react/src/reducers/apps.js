import * as types from '../actions/actionTypes';

export default function appsReducer(state = [], action) {
  switch (action.type) {
    case types.GET_APPS_SUCCESS:
      return action.applications;
    case types.GET_APPS_ERROR:
      return [];
    default:
      return state;
  }
}
