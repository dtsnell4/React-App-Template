import * as types from '../actions/actionTypes';

export default function instanceReducer(state = [], action) {
  switch (action.type) {
    case types.INSTANCE_CHANGE:
      return action.instanceId;
    default:
      return state;
  }
}
