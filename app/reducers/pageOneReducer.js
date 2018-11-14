import * as types from '../actions/actionTypes';

export default function campusListReducer(state = [], action) {
  switch (action.type) {
    case types.GET_CAMPUSES_SUCCESS:
      return action.campusList;
    default:
      return state;
  }
}
