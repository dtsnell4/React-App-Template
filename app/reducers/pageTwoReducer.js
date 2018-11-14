import * as types from '../actions/actionTypes';

export default function buildingsReducer(state = [], action) {
  switch (action.type) {
    case types.GET_BUILDINGS_SUCCESS:
      return action.buildings;
    case types.CLEAR_BUILDINGS:
      return [];
    default:
      return state;
  }
}
