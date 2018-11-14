import React from 'react';
import propTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import LoadingBar from 'react-redux-loading-bar';

// components
import PageOneAComponent from './../components/pageOneA';
import PageOneComponent from './../containers/pageOne';
import PageTwoAComponent from './../containers/pageTwoA';
import PageTwoBComponent from './../containers/pageTwoB';

import { SideNav, TopNav } from '../AppcentralCore/web/react/src';
const config = require('../../config.json');

const Main = (props) => {
  const {
    appName,
    applications,
    handleTopNavClick,
    session,
    match,
    loaded,
    permissions,
    logout,
  } = props;

  const sidenavOptions = [
    {
      key: 0, route: `/${appName}/pageone`, icon: 'file-text', name: 'Page One',
    },
    {
      key: 1,
      route: `/${appName}/pagetwo`,
      icon: 'file-text-o',
      name: 'Sub Menu Items',
      subOptions: [
        {
          key: 0, route: null, name: 'A Nice Header',
        },
        {
          key: 1, route: 'pagetwoa', name: 'Page Two A',
        },
        {
          key: 2, route: 'pagetwob', name: 'Page Two B',
        },
      ],
    },
  ];
  return (
    <div className="app-content" id="cl-wrapper">
      <div className="loading-bar">
        <LoadingBar />
      </div>
      <SideNav sidenavHome={`${config.baseUrl[process.env.NODE_ENV]}${process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test' ? '/appcentral' : ''}/appcentral/home`} menuOptions={sidenavOptions} profiles={permissions} />
      <Container id="pcont" fluid>
        <TopNav logoutFunction={logout} actions={applications} handleClick={(app) => handleTopNavClick(app)} appName={config.apptitle} userName={session.userName} />
        <div className="cl-mcont">
          {loaded &&
            <Switch>
              <Route exact path={`${match.url}`} render={() => (<Redirect to={{ pathname: `${match.url}/pageone` }} />)}></Route>
              <Route
                path={`${match.url}/pageone`}
                render={(pageoneProps) => (
                  <Switch>
                    <Route exact path={`${pageoneProps.match.url}`} component={PageOneComponent}></Route>
                    <Route path={`${pageoneProps.match.url}/pageonea`} component={PageOneAComponent}></Route>
                  </Switch>
                )}
              />
              <Route
                path={`${match.url}/pagetwo`}
                render={(pagetwoProps) => (
                  <Switch>
                    <Route path={`${pagetwoProps.match.url}/pagetwoa`} render={(myprops) => <PageTwoAComponent {...myprops} key="1" />} />
                    <Route path={`${pagetwoProps.match.url}/pagetwob`} render={(myprops) => <PageTwoBComponent {...myprops} key="2" />} />
                  </Switch>
                )}
              />
            </Switch>
          }
        </div>
      </Container>
    </div>
  );
};

Main.propTypes = {
  appName: propTypes.string,
  match: propTypes.object,
  handleTopNavClick: propTypes.func,
  applications: propTypes.array,
  session: propTypes.object,
  loaded: propTypes.bool,
  permissions: propTypes.object,
  logout: propTypes.func,
};

export default Main;
