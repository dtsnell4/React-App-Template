import * as types from '../actions/actionTypes';

export default function permissionsReducer(state = {}, action) {
  switch (action.type) {
    case types.GET_PERMISSIONS_SUCESS:
      return Object.assign({}, ...action.permissions.map((item) => ({ [item.name]: item })));
    default:
      return state;
  }
}
