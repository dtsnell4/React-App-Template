import * as types from './actionTypes';
import { AppCentral } from '../api';

export function getHelpComponentSuccess(helpComponent) {
  return {
    type: types.GET_HELP_COMPONENT_SUCCESS,
    helpComponent,
  };
}

export function getHelpComponentError() {
  return {
    type: types.GET_HELP_COMPONENT_ERROR,
  };
}
export const getHelpComponent = (token, instanceId = 1) => (dispatch) =>
  new Promise((resolve, reject) => AppCentral.getHelpComponent(token, instanceId)
    .then((response) => {
      dispatch(getHelpComponentSuccess(response));
      resolve();
    })
    .catch((error) => {
      dispatch(getHelpComponentError());
      reject(error.error_description);
    }));
