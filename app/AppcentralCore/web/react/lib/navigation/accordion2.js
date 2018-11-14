'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CwAccordion2 = undefined;

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

// import './style.css';

var CwAccordion2 = exports.CwAccordion2 = function (_React$Component) {
    (0, _inherits3.default)(CwAccordion2, _React$Component);

    function CwAccordion2(props) {
        (0, _classCallCheck3.default)(this, CwAccordion2);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CwAccordion2.__proto__ || (0, _getPrototypeOf2.default)(CwAccordion2)).call(this, props));

        _this.state = {
            open: false
        };
        return _this;
    }

    (0, _createClass3.default)(CwAccordion2, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { 'class': 'accordion-margin-b panel panel-default ng-isolate-scope panel-open', 'ng-if': 'course.tabs.length >= 1', 'template-url': 'app/widgets/coursewizardListCourses/accordion.tpl.html', heading: 'BHS 4000 Cultural Competency in Health Care', 'is-open': 'course.open', description: 'course.description', 'ng-repeat': 'course in vm.pagedCollection' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'panel-heading course-wizard-blue' },
                    _react2.default.createElement(
                        'h4',
                        { 'class': 'panel-title' },
                        _react2.default.createElement(
                            'a',
                            { href: '', tabindex: '0', 'class': 'accordion-toggle', 'ng-click': 'toggleOpen()', 'accordion-transclude2': 'heading' },
                            _react2.default.createElement(
                                'span',
                                { 'class': 'span-width ng-binding' },
                                'BHS 4000 Cultural Competency in Health Care ',
                                _react2.default.createElement('i', { 'class': 'pull-right glyphicon icon-right glyphicon-chevron-up', 'ng-class': '{\'glyphicon glyphicon-chevron-up\': isOpen, \'glyphicon glyphicon-chevron-down\': !isOpen}' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'panel-description description-padding' },
                    _react2.default.createElement(
                        'span',
                        { 'class': 'panel-description ng-binding' },
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Description:'
                        )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'span',
                        null,
                        'The purpose of this course is to develop competency and better understanding when confronted with issues related to culture, diversity and ethnically based customs, rituals, alternative health care choices, folk medicine, cultural structure and viewpoints and the practitioner\'s delivery of health care. Prerequisite: COMP 1500. Frequency: Every Spring, Every Summr I, Every Summer II, Every Fall and Every Winter.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'panel-collapse collapse in', collapse: '!isOpen', style: { height: "auto" } },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'panel-body panel-border', 'ng-transclude': '' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'outcome-padding ng-scope' },
                            _react2.default.createElement(
                                'strong',
                                { 'class': 'ng-binding' },
                                'LEARNING_OUTCOMES:'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'span',
                                { 'class': 'outcome-wrap ng-binding' },
                                '1) Learn, understand and be able to identify the barriers, factors and prejudice that hinder cultural understanding, acceptance and delivery of care and create strategies to overcome these barriers 2) Learn, understand and be able to define key terminology 3) Create an increased awareness of personal cultural biases and ethnic identity and preconceived notions that impact interactions with other diverse populations 4) Become familiar with various ethnic and cultural culturally diverse populations 5) Demonstrate knowledge and understanding of factors that shape and define different groups of people as a culture 6) Learn, understand and recognize the importance of language as to culture and the delivery of care limitations of utilizing interpreter services and understand the concept of "cultural br/okers" 7) Learn, understand and demonstrate ability to utilize selected cultural competency models and tools in the delivery of care to different cultures'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement('br', null)
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'ng-repeat': 'tab in course.tabs', 'class': 'ng-scope' },
                            _react2.default.createElement('div', { 'class': 'col-md-12' }),
                            _react2.default.createElement(
                                'div',
                                { 'ng-repeat': 'class in tab.classes', 'class': 'ng-scope' },
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'row class-borders no-margin course-Head-Style' },
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'col-md-1 col-sm-12 col-xs-12 no-left-padding no-padding-sm ng-hide', 'ng-show': 'class.maxEnroll <= class.enrolled' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'full-class' },
                                            _react2.default.createElement(
                                                'strong',
                                                null,
                                                'Full'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'col-md-3 col-sm-6 col-xs-12' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'ng-binding' },
                                            _react2.default.createElement(
                                                'strong',
                                                null,
                                                'CRN:'
                                            ),
                                            ' 10008 ',
                                            _react2.default.createElement(
                                                'strong',
                                                null,
                                                'Sec:'
                                            ),
                                            ' 1 ',
                                            _react2.default.createElement(
                                                'strong',
                                                null,
                                                'Cr:'
                                            ),
                                            ' 3.0'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'col-md-3 col-sm-6 col-xs-12 border-left' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'ng-binding' },
                                            _react2.default.createElement(
                                                'strong',
                                                { 'class': 'ng-binding' },
                                                'Faculty:'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { 'ng-if': 'class.professor.lastName != null', 'class': 'ng-binding ng-scope' },
                                                'Berman,'
                                            ),
                                            'Jodie'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'col-md-1 col-sm-12 col-xs-12 hidden-sm hidden-xs ng-scope', 'ng-if': 'class.maxEnroll > class.enrolled' },
                                        '\xA0'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'col-md-3 col-sm-6 col-xs-12 cursor-pointer ng-scope book-info', 'ng-if': 'class.bookUrl != null && class.bookUrl !=\'\'', 'ng-class': 'class.bookUrl == null || class.bookUrl == \'\' ? \'btngrry disabled cursor-not-allowed\' : \'book-info\'', 'ng-click': 'vm.bookUrl(class.bookUrl)' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'ng-binding' },
                                            _react2.default.createElement('i', { 'class': 'fa fa-external-link-square' }),
                                            ' BOOK_INFO'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'col-md-2 col-sm-6 col-xs-12 cursor-pointer btngrry disabled cursor-not-allowed ng-scope', 'ng-if': 'class.hasSyllabus == false || class.hasSyllabus == true && class.endorsementMet == false || class.hasSyllabus == true && class.endorsementMet == true && class.showSyllabusLink == false' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'disabled ng-binding' },
                                            _react2.default.createElement('i', { 'class': 'fa fa-external-link-square' }),
                                            ' View Syllabus'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'table',
                                    { 'class': 'no-border mobile-table' },
                                    _react2.default.createElement(
                                        'thead',
                                        { 'class': 'no-border mobile-hide nowrap' },
                                        _react2.default.createElement(
                                            'tr',
                                            { 'class': 'background-white' },
                                            _react2.default.createElement(
                                                'th',
                                                { 'class': 'text-center meetings-row-padding ng-binding', width: '10%' },
                                                'Day'
                                            ),
                                            _react2.default.createElement(
                                                'th',
                                                { 'class': 'text-center meetings-row-padding ng-binding', width: '20%' },
                                                'Date'
                                            ),
                                            _react2.default.createElement(
                                                'th',
                                                { 'class': 'text-center meetings-row-padding ng-binding', width: '20%' },
                                                'Time'
                                            ),
                                            _react2.default.createElement(
                                                'th',
                                                { 'class': 'text-center meetings-row-padding ng-binding', width: '25%' },
                                                'Location'
                                            ),
                                            _react2.default.createElement(
                                                'th',
                                                { 'class': 'text-center meetings-row-padding ng-binding', width: '25%' },
                                                'Building / Room Number'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'tbody',
                                        { 'class': 'no-border-x no-border-y' },
                                        _react2.default.createElement(
                                            'tr',
                                            { 'ng-repeat': 'meeting in class.meetings | orderBy:\'startDate\'', 'class': 'background-white ng-scope', 'ng-class': 'meeting.type === \'EXAM\' ? \'color-warning\' : \'\'' },
                                            _react2.default.createElement(
                                                'td',
                                                { 'class': 'text-center meetings-row-padding ng-binding' },
                                                _react2.default.createElement(
                                                    'label',
                                                    { 'class': 'visible-xs ng-binding' },
                                                    'Day:'
                                                ),
                                                ' -'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { 'class': 'text-center meetings-row-padding ng-binding' },
                                                _react2.default.createElement(
                                                    'label',
                                                    { 'class': 'visible-xs ng-binding' },
                                                    'Date:'
                                                ),
                                                ' 06/26/2017 - 09/17/2017'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { 'class': 'text-center meetings-row-padding ng-binding' },
                                                _react2.default.createElement(
                                                    'label',
                                                    { 'class': 'visible-xs ng-binding' },
                                                    'Time:'
                                                ),
                                                ' - '
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { 'class': 'text-center meetings-row-padding' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { 'ng-if': 'class.location != \'\'', 'class': 'ng-binding ng-scope' },
                                                    _react2.default.createElement(
                                                        'label',
                                                        { 'class': 'visible-xs ng-binding' },
                                                        'Location:'
                                                    ),
                                                    ' On-line Course / (YW)'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { 'class': 'text-center meetings-row-padding' },
                                                _react2.default.createElement(
                                                    'label',
                                                    { 'class': 'visible-xs ng-binding' },
                                                    'Building / Room Number:'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { 'class': 'meetings-row-padding building-padding ng-binding ng-scope', 'ng-if': 'meeting.building != null && meeting.type != \'CHAT\'' },
                                                    'Online Venue / BLACKBOARD'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'tr',
                                            { 'ng-show': 'class.meetings.length == 0', 'class': 'background-white ng-hide' },
                                            _react2.default.createElement('td', { 'class': 'text-center meetings-row-padding' }),
                                            _react2.default.createElement('td', { 'class': 'text-center meetings-row-padding' }),
                                            _react2.default.createElement('td', { 'class': 'text-center meetings-row-padding' }),
                                            _react2.default.createElement(
                                                'td',
                                                { 'class': 'text-center meetings-row-padding' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { 'ng-if': 'class.location != \'\'', 'class': 'ng-binding ng-scope' },
                                                    'On-line Course / (YW)'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { 'class': 'text-center meetings-row-padding' },
                                                _react2.default.createElement('span', { 'class': 'meetings-row-padding building-padding' })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);
    return CwAccordion2;
}(_react2.default.Component);

// CwAccordion2.propTypes = {
//     subjectCode: React.PropTypes.text.isRequired,
//     number: React.PropTypes.text.isRequired,
//     name: React.PropTypes.text.isRequired,
//     code: React.PropTypes.text.isRequired,
//     description: React.PropTypes.text.isRequired,
//     outcomes: React.PropTypes.text.isRequired,
//     classes: React.PropTypes.array,
// };

CwAccordion2.defaultProps = {
    subjectCode: "",
    number: "",
    code: "",
    name: "",
    description: "",
    outcomes: "",
    classes: []
};