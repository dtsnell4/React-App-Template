'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BsDropDown = function (_React$Component) {
  _inherits(BsDropDown, _React$Component);

  function BsDropDown() {
    _classCallCheck(this, BsDropDown);

    return _possibleConstructorReturn(this, (BsDropDown.__proto__ || Object.getPrototypeOf(BsDropDown)).apply(this, arguments));
  }

  _createClass(BsDropDown, [{
    key: 'render',
    value: function render() {

      var data = this.props.data;
      var fields = this.props.fields;
      var options = [];

      _lodash2.default.each(data, function (item) {
        var text = item[fields.text];
        var value = item[fields.value];
        var option = _react2.default.createElement(
          'option',
          { value: value, label: text },
          text
        );
        options.push(option);
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'select',
          { className: 'input-width form-control' },
          options
        )
      );
    }
  }]);

  return BsDropDown;
}(_react2.default.Component);

exports.default = BsDropDown;


BsDropDown.propTypes = {
  // data: React.PropTypes.array.isRequired,
  // fields: React.PropTypes.object.isRequired,    
};

BsDropDown.defaultProps = {
  data: [],
  fields: { text: '', value: '' }
};