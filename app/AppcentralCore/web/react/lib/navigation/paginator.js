'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paginator = function (_React$Component) {
  (0, _inherits3.default)(Paginator, _React$Component);

  function Paginator() {
    (0, _classCallCheck3.default)(this, Paginator);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Paginator.__proto__ || (0, _getPrototypeOf2.default)(Paginator)).call(this));

    _this.state = {
      currentPage: 1
    };
    return _this;
  }

  (0, _createClass3.default)(Paginator, [{
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var prev = 0;
      var last = 0;
      var currentPage = this.state.currentPage;
      var _props = this.props,
          items = _props.items,
          itemsPerPage = _props.itemsPerPage;

      var indexOfLastItem = currentPage * itemsPerPage;
      var indexOfFirstItem = indexOfLastItem - itemsPerPage;
      var currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
      prev = currentPage > 0 ? currentPage - 1 : 0;
      last = Math.ceil(items.length / itemsPerPage);
      var pageNumbers = [];
      for (var i = 1; i <= last; i += 1) {
        pageNumbers.push(i);
      }

      return _react2.default.createElement(
        'div',
        { className: 'appcentral-paginator' },
        _react2.default.createElement(
          'ul',
          null,
          currentItems.map(function (item) {
            return item;
          })
        ),
        _react2.default.createElement(
          'ul',
          { className: 'pull-right' },
          _react2.default.createElement(
            _reactstrap.Pagination,
            null,
            _react2.default.createElement(
              _reactstrap.PaginationItem,
              null,
              prev === 0 ? _react2.default.createElement(
                _reactstrap.PaginationLink,
                { disabled: true },
                'Prev'
              ) : _react2.default.createElement(
                _reactstrap.PaginationLink,
                { onClick: function onClick(e) {
                    _this2.handleClick(e);
                  }, id: prev, href: prev },
                'Prev'
              )
            ),
            pageNumbers.map(function (number, i) {
              return _react2.default.createElement(
                _reactstrap.PaginationItem,
                { key: i, active: pageNumbers[currentPage - 1] === number },
                _react2.default.createElement(
                  _reactstrap.PaginationLink,
                  { onClick: function onClick(e) {
                      _this2.handleClick(e);
                    }, href: number, key: number, id: number },
                  number
                )
              );
            }),
            _react2.default.createElement(
              _reactstrap.PaginationItem,
              null,
              currentPage === last ? _react2.default.createElement(
                _reactstrap.PaginationLink,
                { disabled: true },
                'Next'
              ) : _react2.default.createElement(
                _reactstrap.PaginationLink,
                { onClick: function onClick(e) {
                    _this2.handleClick(e);
                  }, id: pageNumbers[currentPage], href: pageNumbers[currentPage] },
                'Next'
              )
            )
          )
        )
      );
    }
  }]);
  return Paginator;
}(_react2.default.Component);

Paginator.defaultProps = {
  items: [],
  itemsPerPage: 5
};

exports.default = Paginator;