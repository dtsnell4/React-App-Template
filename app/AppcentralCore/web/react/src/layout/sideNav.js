import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MenuOptionComponent from './menuOption';
import { findPermission } from '../lib';

class Sidenav extends React.Component {
  constructor() {
    super();
    this.state = { docked: localStorage.getItem('collapsed'), dropped: false };
    if (this.state.docked === null) {
      this.state.docked = true;
    }
    this.handleDocking = this.handleDocking.bind(this);
    this.dropSidenav = this.dropSidenav.bind(this);
  }

  getSidenavHome() {
    let homeUrl = '';
    switch (process.env.NODE_ENV) {
      case 'development':
        homeUrl = `${window.location.origin}/appcentral/home`;
        break;
      default:
        homeUrl = `${window.location.origin}/appcentral/app/appcentral/`;
        break;
      // case 'dev':
      //   homeUrl = 'http://fldvd-webnet01.ad.nova.edu/appcentral2/appcentral/appcentral/home';
      //   break;
      // case 'test':
      //   homeUrl = 'http://fldvt-webnet01.ad.nova.edu/appcentral2/appcentral/appcentral/home';
      //   break;
      // case 'stage':
      //   homeUrl = 'https://appcentral.stage.nova.edu/app2/appcentral/appcentral/home';
      //   break;
      // case 'prod':
      //   homeUrl = 'https://appcentral.nova.edu/app2/appcentral/appcentral/home';
      //   break;
      // default:
      //   homeUrl = '/';
      //   break;
    }
    return homeUrl;
  }

  dropSidenav() {
    this.setState({ dropped: !this.state.dropped });
  }

  handleDocking() {
    let newState = JSON.parse(this.state.docked) === true;
    newState = !newState;
    this.setState({ docked: newState });
    localStorage.setItem('collapsed', newState);
  }

  render() {
    const {
      menuOptions,
      profiles,
    } = this.props;

    return (
      <div id={`${this.state.docked}`} className={`${this.state.docked === true || this.state.docked === 'true' ? 'sb-collapsed ' : ''}sidenav-dark`}>
        <div className="cl-sidebar">
          <button className="cl-toggle" onClick={this.dropSidenav}><i className="fa fa-bars" /></button>
          <div className="cl-navblock">
            <div className="menu-space">
              <div className="content">
                <a href={this.getSidenavHome()} title="NSU APP CENTRAL">
                  <div className="sidebar-logo">
                    <div className="logo" />
                  </div>
                </a>
                <div className="text-right collapse-button" style={{ padding: '7px 9px' }}>
                  <span className="navtitle pull-left">Navigation</span>
                  <button onClick={this.handleDocking} id="sidebar-collapse" className="btn btn-default"><i className="fa fa-thumb-tack" /><i className="fa fa-bars" /></button>
                </div>
                <div className={`${this.state.dropped ? 'sidenav-dropped ' : ''}cl-vnavigation`}>
                  {menuOptions && menuOptions.map((menuOption) => (
                    <div key={menuOption.key}>
                      {(!menuOption.roles || findPermission(menuOption.roles, profiles)) &&
                        <ul key={menuOption.key}>
                          {!menuOption.subOptions &&
                            <li>
                              <NavLink to={menuOption.route}><i className={`fa fa-${menuOption.icon}`} /><span>{menuOption.name}</span></NavLink>
                            </li>
                          }
                          {menuOption.subOptions &&
                            <MenuOptionComponent {...menuOption} />
                          }
                        </ul>
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="branding" />
        </div>
      </div>
    );
  }
}

Sidenav.propTypes = {
  /** The array that creates the menu items and sub items.  See the Notes for description. */
  menuOptions: PropTypes.array.isRequired,
  /** Has something to do with permissions, not exactly sure what. */
  profiles: PropTypes.object.isRequired,
};

export default Sidenav;
