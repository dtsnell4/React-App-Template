'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var source = [{ code: '201730', title: 'Winter 2017' }, { code: '201740', title: 'Spring 2017' }, { code: '201750', title: 'Summer I 2017' }, { code: '201800', title: '2017-18 ContinuingEd/Prof Dev' }, { code: '201810', title: 'Summer II 2017' }, { code: '201820', title: 'Fall 2017' }, { code: '201830', title: 'Winter 2018' }, { code: '201840', title: 'Spring 2018' }, { code: '201850', title: 'Summer I 2018' }];
var fields = { text: 'code', value: 'title' };

var SearchByCrn = function SearchByCrn() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'form-group', 'show-errors': '' },
      _react2.default.createElement(_index.BsDropDown, { data: source, fields: fields })
    ),
    _react2.default.createElement(
      'div',
      { className: 'form-group', 'show-errors': '' },
      _react2.default.createElement(_index.InputText, { name: 'crnName', label: 'CRN', error: '', placeholder: 'Enter CRN' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'form-group', 'show-errors': '' },
      _react2.default.createElement('input', { className: 'btn btn-default btn-rad btn-width', value: 'Clear', type: 'button' }),
      _react2.default.createElement('input', { className: 'btn btn-primary btn-rad btn-width', value: 'Search', type: 'button' })
    )
  );
};

exports.default = SearchByCrn;