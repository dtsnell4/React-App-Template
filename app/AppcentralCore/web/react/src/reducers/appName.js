import * as types from '../actions/actionTypes';

export default function appsReducer(state = [], action) {
  switch (action.type) {
    case types.CHANGE_APPNAME:
      return action.appName;
    default:
      return state;
  }
}
