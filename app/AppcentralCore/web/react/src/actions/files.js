import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { AppCentral } from '../api';

export const uploadFile = (token, file, instanceId) => (dispatch) => {
  dispatch(showLoading());
  return new Promise((resolve, reject) => AppCentral.UploadFile(token, file, instanceId)
    .then((response) => {
      resolve(response);
      dispatch(hideLoading());
    })
    .catch((error) => {
      dispatch(hideLoading());
      reject(error.error_description);
    }));
};

export const removeFile = (token, fileId, instanceId) => () =>
  new Promise((resolve, reject) => AppCentral.RemoveFile(token, fileId, instanceId)
    .then(() => {
      resolve();
    })
    .catch((error) => {
      reject(error.error_description);
    }));
