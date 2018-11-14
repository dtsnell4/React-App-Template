"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputText = function (_React$Component) {
  (0, _inherits3.default)(inputText, _React$Component);

  function inputText() {
    (0, _classCallCheck3.default)(this, inputText);
    return (0, _possibleConstructorReturn3.default)(this, (inputText.__proto__ || (0, _getPrototypeOf2.default)(inputText)).apply(this, arguments));
  }

  (0, _createClass3.default)(inputText, [{
    key: "render",
    value: function render() {
      var wrapperClass = "form-group";
      if (this.props.error && this.props.error.length > 0) {
        wrapperClass += " " + "has-error";
      }

      return _react2.default.createElement(
        "div",
        { className: wrapperClass },
        _react2.default.createElement(
          "label",
          { htmlFor: this.props.name },
          this.props.label
        ),
        _react2.default.createElement(
          "div",
          { className: "field" },
          _react2.default.createElement("input", {
            type: "text",
            name: this.props.name,
            className: "form-control",
            placeholder: this.props.placeholder,
            ref: this.props.name,
            value: this.props.value,
            onChange: this.props.onChange
          }),
          _react2.default.createElement(
            "div",
            { className: "input" },
            this.props.error
          )
        )
      );
    }
  }]);
  return inputText;
}(_react2.default.Component);

// inputText.propTypes = {
//     name: React.PropTypes.string.isRequired,
//     label: React.PropTypes.string.isRequired,
//     onChange: React.PropTypes.func.isRequired,
//     placeholder: React.PropTypes.string,
//     value: React.PropTypes.string,
//     error: React.PropTypes.string 
// };


exports.default = inputText;