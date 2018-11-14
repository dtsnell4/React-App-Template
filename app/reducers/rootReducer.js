import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { appsReducer, sessionReducer, permissionReducer, instanceReducer, appNameReducer } from '../AppcentralCore/web/react/src/reducers';
// Above reducers are required for basic functionality.
// Below reducers are your custom reducers for this app
import buildingsReducer from './pageTwoReducer';
import campusReducer from './pageOneReducer';

const rootReducer = {
  routing: routerReducer,
  applications: appsReducer,
  session: sessionReducer,
  permissions: permissionReducer,
  form: formReducer,
  instanceId: instanceReducer,
  toastr: toastrReducer,
  loadingBar: loadingBarReducer,
  appName: appNameReducer,
  buildings: buildingsReducer,
  campusList: campusReducer,
};

export default rootReducer;
