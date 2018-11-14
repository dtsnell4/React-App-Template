import * as types from '../actions/actionTypes';

export default function helpComponent(state = [], action) {
  switch (action.type) {
    case types.GET_HELP_COMPONENT_SUCCESS:
      return action.helpComponent;
    case types.GET_HELP_COMPONENT_ERROR:
      return null;
    default:
      return state;
  }
}
