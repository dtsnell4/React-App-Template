import * as types from '../actions/actionTypes';

export default function sessionReducer(state = [], action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.token;
    case types.LOGOUT_USER:
      return null;
    case types.TOKEN_VALIDATION_SUCCESS:
      return action.token;
    case types.END_IMPERSONATION:
      return action.token;
    case types.IMPERSONATION_SUCESS:
      return {
        ...state,
        access_token: action.token,
        userName: JSON.parse(atob(action.token.split('.')[1])).unique_name,
        impersonation: true,
      };
    default:
      return state;
  }
}
