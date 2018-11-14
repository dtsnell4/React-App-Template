// import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReduxToastr from 'react-redux-toastr';
import configureStore from './store';
import Main from './containers/main';
import './styles/main.scss';
require('../Web.config');
require('core-js');
const config = require('../config.json');
const { store, persistor } = configureStore();
const router = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename={`${config.baseUrl[process.env.NODE_ENV]}/${config.clientName}`} >
        <div key="content">
          <Switch>
            <Route path="/:instanceName" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
    </PersistGate>
  </Provider>
);

render(router, document.getElementById('app'));
