import React from 'react';
import propTypes from 'prop-types';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, Navbar } from 'reactstrap';
import { sortByTextField } from '../lib/sortFunctions';

const TopNav = (props) => {
  const {
    userName,
    actions,
    handleClick,
    logoutFunction,
    appName,
    children,
  } = props;
  return (
    <div>
      <Navbar color="faded" expand="md" className="appnav">
        <UncontrolledDropdown>
          <DropdownToggle nav caret className="btn-lg">{appName}</DropdownToggle>
          <DropdownMenu className="dropdown-menu-long">
            {actions && actions.sort((fielda, fieldb) => sortByTextField(fielda, fieldb, 'applicationName')).map((action) => <DropdownItem onClick={() => handleClick(action)} key={action.id}>{`${action.applicationName} - ${action.name}`}</DropdownItem>)}
          </DropdownMenu>
        </UncontrolledDropdown>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>{userName}</DropdownToggle>
            <DropdownMenu right className="test">
              {children}
              <DropdownItem>Times in Eastern Daylight Time</DropdownItem>
              <DropdownItem onClick={() => logoutFunction()}>Sign Out</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

TopNav.propTypes = {
  /** Currently logged in username */
  userName: propTypes.string.isRequired,
  /** The array containing all of the information about all the running instances of applications the user has permissions for.  This creates the app switcher drop down menu. */
  actions: propTypes.array.isRequired,
  /** Exactly what it sounds like */
  logoutFunction: propTypes.func.isRequired,
  /** Handles the clicking of an app in the appswitcher dropdown menu */
  handleClick: propTypes.func.isRequired,
  /** The app's name */
  appName: propTypes.string.isRequired,
  /** React method that references the child jsx elements inside the topNav component */
  children: propTypes.element,
};

export default TopNav;
