'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CwAccordion = undefined;

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

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CwAccordion = exports.CwAccordion = function (_React$Component) {
    (0, _inherits3.default)(CwAccordion, _React$Component);

    function CwAccordion(props) {
        (0, _classCallCheck3.default)(this, CwAccordion);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CwAccordion.__proto__ || (0, _getPrototypeOf2.default)(CwAccordion)).call(this, props));

        _this.state = {
            open: true
        };
        return _this;
    }

    (0, _createClass3.default)(CwAccordion, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'panel-header accordion-margin-b panel panel-default' },
                    _react2.default.createElement(
                        'div',
                        { className: 'panel-heading course-wizard-blue' },
                        _react2.default.createElement(
                            'h4',
                            { style: { color: "white" }, className: 'panel-title' },
                            this.props.subjectCode,
                            ' ',
                            this.props.number,
                            ' ',
                            this.props.name,
                            _react2.default.createElement('span', { onClick: function onClick() {
                                    return _this2.setState({ open: !_this2.state.open });
                                }, className: "glyphicon pull-right " + (this.state.open ? "glyphicon-chevron-up" : "glyphicon-chevron-down") })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'panel-description description-padding' },
                        _react2.default.createElement(
                            'span',
                            { className: 'panel-description' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Description:'
                            )
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'p',
                            null,
                            this.props.description
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Collapse,
                        { style: { border: "0px" }, 'in': this.state.open, className: 'cw-panel' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'outcome-padding' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        'LEARNING_OUTCOMES:'
                                    )
                                ),
                                _react2.default.createElement('br', null),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'outcome-wrap' },
                                    this.props.outcomes
                                ),
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('br', null)
                            ),
                            this.props.classes && this.props.classes.map(function (classItem) {
                                return _react2.default.createElement(
                                    'div',
                                    { className: 'row no-margin' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row class-borders no-margin course-Head-Style' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-lg-3 col-md-3' },
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    _react2.default.createElement(
                                                        'strong',
                                                        null,
                                                        'CRN: '
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    classItem.crn,
                                                    ' '
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    _react2.default.createElement(
                                                        'strong',
                                                        null,
                                                        'Sec: '
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    classItem.seqNum,
                                                    ' '
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    _react2.default.createElement(
                                                        'strong',
                                                        null,
                                                        'Cr: '
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    classItem.credits,
                                                    ' '
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-lg-3 col-md-3' },
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    _react2.default.createElement(
                                                        'strong',
                                                        null,
                                                        'Faculty: '
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    classItem.professor.lastName,
                                                    ', ',
                                                    classItem.professor.firstName
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-lg-3 col-md-3 cursor-pointer ng-scope book-info' },
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-share' }),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'BOOK INFO'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-lg-3 col-md-3 cursor-pointer btngrry disabled cursor-not-allowed' },
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-share' }),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'View Syllabus'
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'table',
                                        { className: 'meetings-table no-border mobile-table' },
                                        _react2.default.createElement(
                                            'thead',
                                            { className: 'no-border mobile-hide nowrap' },
                                            _react2.default.createElement(
                                                'tr',
                                                null,
                                                _react2.default.createElement(
                                                    'th',
                                                    { className: 'text-center meetings-row-padding', width: '10%' },
                                                    'Day'
                                                ),
                                                _react2.default.createElement(
                                                    'th',
                                                    { className: 'text-center meetings-row-padding', width: '20%' },
                                                    'Date'
                                                ),
                                                _react2.default.createElement(
                                                    'th',
                                                    { className: 'text-center meetings-row-padding', width: '20%' },
                                                    'Time'
                                                ),
                                                _react2.default.createElement(
                                                    'th',
                                                    { className: 'text-center meetings-row-padding', width: '25%' },
                                                    'Location'
                                                ),
                                                _react2.default.createElement(
                                                    'th',
                                                    { className: 'text-center meetings-row-padding', width: '25%' },
                                                    'Building / Room Number'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            { className: 'no-border-x no-border-y' },
                                            classItem.meetings && classItem.meetings.map(function (meetingItem) {
                                                return _react2.default.createElement(
                                                    'tr',
                                                    null,
                                                    _react2.default.createElement(
                                                        'td',
                                                        { className: 'text-center meetings-row-padding' },
                                                        meetingItem.days ? meetingItem.days : "-"
                                                    ),
                                                    _react2.default.createElement(
                                                        'td',
                                                        { className: 'text-center meetings-row-padding' },
                                                        meetingItem.startDate.split(' ')[0],
                                                        ' - ',
                                                        meetingItem.endDate.split(' ')[0]
                                                    ),
                                                    _react2.default.createElement(
                                                        'td',
                                                        { className: 'text-center meetings-row-padding' },
                                                        '-'
                                                    ),
                                                    _react2.default.createElement(
                                                        'td',
                                                        { className: 'text-center meetings-row-padding' },
                                                        classItem.location,
                                                        ' / (',
                                                        classItem.campusCode,
                                                        ')'
                                                    ),
                                                    _react2.default.createElement(
                                                        'td',
                                                        { className: 'text-center meetings-row-padding' },
                                                        meetingItem.building,
                                                        ' / ',
                                                        meetingItem.room
                                                    )
                                                );
                                            })
                                        )
                                    )
                                );
                            })
                        )
                    )
                )
            );
        }
    }]);
    return CwAccordion;
}(_react2.default.Component);

// CwAccordion.propTypes = {
//     subjectCode: React.PropTypes.text.isRequired,
//     number: React.PropTypes.text.isRequired,
//     name: React.PropTypes.text.isRequired,
//     code: React.PropTypes.text.isRequired,
//     description: React.PropTypes.text.isRequired,
//     outcomes: React.PropTypes.text.isRequired,
//     classes: React.PropTypes.array,
// };

// CwAccordion.defaultProps = {
//     subjectCode: "",
//     number: "",
//     code: "",
//     name: "",
//     description: "",
//     outcomes: "",
//     classes: [],
// }