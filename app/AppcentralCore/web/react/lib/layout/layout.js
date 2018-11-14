'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactstrap = require('reactstrap');

var _sideNav = require('./sideNav');

var _sideNav2 = _interopRequireDefault(_sideNav);

var _topnav = require('./topnav');

var _topnav2 = _interopRequireDefault(_topnav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
    return _react2.default.createElement(
        'div',
        { id: 'cl-wrapper', className: 'sb-collapsed sidenav-dark' },
        _react2.default.createElement(_sideNav2.default, { menuOptions: props.menuOptions }),
        _react2.default.createElement(
            _reactstrap.Container,
            { fluid: true, id: 'pcont' },
            _react2.default.createElement(_topnav2.default, { actions: [], userName: 'Username' })
        )
    );
};

exports.default = Layout;