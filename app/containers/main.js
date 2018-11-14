import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sessionActions, instanceActions, appListActions, permissionActions } from '../AppcentralCore/web/react/src/actions';
import MainPresentational from '../components/main';
import * as campusActions from '../actions/pageOneActions';
import { AppCentral } from '../AppcentralCore/web/react/src/api';
const config = require('../../config.json');

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
    this.handleTopNavClick = this.handleTopNavClick.bind(this);
    this.manageLogout = this.manageLogout.bind(this);
  }

  componentWillMount() {
    if (this.props.match.params.instanceName) {
      this.props.sessionActions.validateToken(this.props.session)
        .then(() => {
          this.getApps();
        })
        .catch(() => {
          window.location = `${config.login[process.env.NODE_ENV]}/null/${encodeURIComponent(window.location.pathname)}`;
        });
    }
  }

  getPermissions() {
    this.props.permissionActions.getPermissions(this.props.session, this.props.instanceId);
  }

  getApps() {
    this.props.appListActions.getApps(this.props.session)
      .then(() => {
        this.validateInstance();
        this.getPermissions();
      });
  }

  manageLogout() {
    this.props.sessionActions.logoutUser();
    localStorage.removeItem('ls.authorizationData');
    window.location = `${config.login[process.env.NODE_ENV]}`;
  }

  validateInstance() {
    const apps = this.props.applications.filter((f) => f.applicationFolder === config.clientName && f.slug === this.props.match.params.instanceName);
    if (apps.length === 0 || apps.length > 1) {
      window.location = `${config.login[process.env.NODE_ENV]}`;
    } else {
      this.props.instanceActions.changeInstance(apps[0].id);
      this.props.instanceActions.changeAppNAme(apps[0].slug);
      this.setState({ loaded: true });
    }
  }

  handleTopNavClick(app) {
    this.props.instanceActions.changeInstance(app.id);
    if (app.react || process.env.NODE_ENV === 'development') {
      window.location = `${window.location.protocol}//${window.location.hostname}${window.location.port !== '' ? ':' : ''}${window.location.port}${config.baseUrl[process.env.NODE_ENV]}/${app.applicationFolder}/${app.slug}`;
    } else {
      AppCentral.handleTopNavClick(app, this.props.session);
    }
  }

  render() {
    return <MainPresentational logout={this.manageLogout} loaded={this.state.loaded} handleTopNavClick={this.handleTopNavClick} {...this.props} />;
  }
}

const mapStateToProps = (state) => // maps state (redux store) to component props
  ({
    instanceId: state.instanceId,
    session: state.session,
    applications: state.applications,
    appName: state.appName,
    permissions: state.permissions,
  });

//  injects dispatch to call other actions from the action creators
const mapDispatchToProps = (dispatch) =>
  ({
    instanceActions: bindActionCreators(instanceActions, dispatch),
    permissionActions: bindActionCreators(permissionActions, dispatch),
    sessionActions: bindActionCreators(sessionActions, dispatch),
    appListActions: bindActionCreators(appListActions, dispatch),
    campusActions: bindActionCreators(campusActions, dispatch),
  });

MainComponent.propTypes = {
  match: propTypes.object,
  instanceActions: propTypes.object,
  permissionActions: propTypes.object,
  appListActions: propTypes.object,
  session: propTypes.object,
  history: propTypes.object,
  instanceId: propTypes.number,
  applications: propTypes.array,
  sessionActions: propTypes.object,
  campusActions: propTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
