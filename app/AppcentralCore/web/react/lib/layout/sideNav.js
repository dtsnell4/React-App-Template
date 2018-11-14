'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidenav = function Sidenav(props) {
    var menuOptions = props.menuOptions;

    return _react2.default.createElement(
        'div',
        { className: 'cl-sidebar' },
        _react2.default.createElement(
            'div',
            { className: 'cl-toggle' },
            _react2.default.createElement('i', { className: 'fa fa-bars' })
        ),
        _react2.default.createElement(
            'div',
            { className: 'cl-navblock' },
            _react2.default.createElement(
                'div',
                { className: 'menu-space' },
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    _react2.default.createElement(
                        'a',
                        { href: '/', title: 'NSU APP CENTRAL' },
                        _react2.default.createElement(
                            'div',
                            { className: 'sidebar-logo' },
                            _react2.default.createElement('div', { className: 'logo' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'text-right collapse-button', style: { padding: '7px 9px' } },
                        _react2.default.createElement(
                            'span',
                            { className: 'navtitle pull-left' },
                            'Navigation'
                        ),
                        ' ',
                        _react2.default.createElement(
                            'button',
                            { id: 'sidebar-collapse', className: 'btn btn-default' },
                            _react2.default.createElement('i', { className: 'fa fa-thumb-tack' }),
                            _react2.default.createElement('i', { className: 'fa fa-bars' })
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'cl-vnavigation' },
                        menuOptions && menuOptions.map(function (menuOption, index) {
                            return _react2.default.createElement(
                                'li',
                                { key: menuOption.key, className: index === 0 ? 'active' : '' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: menuOption.route },
                                    _react2.default.createElement('i', { className: 'fa fa-' + menuOption.icon }),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        menuOption.name
                                    )
                                ),
                                menuOption.subOptions && menuOption.subOptions.map(function (subOption) {
                                    return _react2.default.createElement('ul', { key: subOption.key, className: 'sub-menu' });
                                })
                            );
                        })
                    )
                )
            )
        ),
        _react2.default.createElement('div', { className: 'branding' })
    );
};

exports.default = Sidenav;