'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopNav = function TopNav(props) {
    var userName = props.userName,
        actions = props.actions,
        handleClick = props.handleClick,
        logoutFunction = props.logoutFunction;

    return _react2.default.createElement(
        _reactstrap.Navbar,
        { className: 'btn-group appnav' },
        _react2.default.createElement(
            _reactstrap.UncontrolledDropdown,
            null,
            _react2.default.createElement(
                _reactstrap.DropdownToggle,
                { nav: true, caret: true, className: 'btn-lg' },
                'AppCentral'
            ),
            _react2.default.createElement(
                _reactstrap.DropdownMenu,
                { className: 'dropdown-menu-long' },
                actions && actions.map(function (action) {
                    return _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        { onClick: function onClick() {
                                return handleClick(action);
                            }, key: action.id },
                        action.applicationName
                    );
                })
            )
        ),
        _react2.default.createElement(
            _reactstrap.Nav,
            { className: 'ml-auto navbar-nav', navbar: true },
            _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                    _reactstrap.UncontrolledDropdown,
                    null,
                    _react2.default.createElement(
                        _reactstrap.DropdownToggle,
                        { nav: true, caret: true },
                        userName
                    ),
                    _react2.default.createElement(
                        _reactstrap.DropdownMenu,
                        { right: true },
                        _react2.default.createElement(
                            _reactstrap.DropdownItem,
                            null,
                            'Times in Eastern Daylight Time SA Pacific Standard Time'
                        ),
                        _react2.default.createElement(
                            _reactstrap.DropdownItem,
                            { onClick: function onClick() {
                                    return logoutFunction();
                                } },
                            'Sign Out'
                        )
                    )
                )
            )
        )
    );
};

exports.default = TopNav;