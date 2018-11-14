import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class MenuOptionComponent extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
    this.handleOpenClick = this.handleOpenClick.bind(this);
  }

  handleOpenClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const {
      name, icon, subOptions, route,
    } = this.props;
    return (
      <li className={`parent ${this.state.open ? 'open' : ''}`}>
        <a onClick={this.handleOpenClick}><i className={`fa fa-${icon}`} /><span>{name}</span></a> {/* eslint-disable-line jsx-a11y/click-events-have-key-events */}{/* eslint-disable-line  jsx-a11y/no-static-element-interactions */}
        {this.state.open &&
          <ul className="sub-menu" >
            {subOptions.map((subOption) => (
              <li key={subOption.key} id={subOption.key}>
                {subOption.route &&
                  <NavLink to={`${route}/${subOption.route}`}><span>{subOption.name}</span></NavLink>
                }
                {!subOption.route &&
                  <span className="sidenav-header">{subOption.name}</span>
                }
              </li>
            ))}
          </ul>
        }
      </li>
    );
  }
}

MenuOptionComponent.propTypes = {
  subOptions: propTypes.array,
  name: propTypes.string,
  icon: propTypes.string,
  route: propTypes.string,
};

export default MenuOptionComponent;
