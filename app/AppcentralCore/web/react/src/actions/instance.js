import * as types from './actionTypes';

export function changeInstance(instanceId) {
  return {
    type: types.INSTANCE_CHANGE,
    instanceId,
  };
}

export function changeAppNAme(appName) {
  return {
    type: types.CHANGE_APPNAME,
    appName,
  };
}
