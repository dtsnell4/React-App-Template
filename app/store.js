import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import { CoreFunctions } from './AppcentralCore/web/react/src';
const { persistCrossTab } = CoreFunctions;

// Initializing the store
const defaultState = {
  appName: '',
  applications: [],
  session: null,
  permissions: {},
  instanceId: null,
  buildings: [],
  campusList: [],
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session'],
};

const middleware = [
  thunk,
];
const reducers = combineReducers(rootReducer);
const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  const store = createStore(persistedReducer, defaultState, composeWithDevTools(applyMiddleware(...middleware)));
  const persistor = persistStore(store);
  persistCrossTab(store, persistConfig, { whitelist: ['session'] });
  return { store, persistor };
};
