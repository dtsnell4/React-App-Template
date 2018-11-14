import React from "react";
import PropTypes from 'prop-types';
import { Accordion, Panel, Glyphicon } from 'react-bootstrap'
// import './style.css';

export class CwAccordion2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    render() {
        return (
            <div class="accordion-margin-b panel panel-default ng-isolate-scope panel-open" ng-if="course.tabs.length >= 1" template-url="app/widgets/coursewizardListCourses/accordion.tpl.html" heading="BHS 4000 Cultural Competency in Health Care" is-open="course.open" description="course.description" ng-repeat="course in vm.pagedCollection">
                <div class="panel-heading course-wizard-blue">
                    <h4 class="panel-title"><a href="" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude2="heading"><span class="span-width ng-binding">BHS 4000 Cultural Competency in Health Care <i class="pull-right glyphicon icon-right glyphicon-chevron-up" ng-class="{'glyphicon glyphicon-chevron-up': isOpen, 'glyphicon glyphicon-chevron-down': !isOpen}"></i></span></a></h4>
                </div>
                <div class="panel-description description-padding"><span class="panel-description ng-binding">
                    <strong>Description:</strong></span>
                    <br /><span>The purpose of this course is to develop competency and better understanding when confronted with issues related to culture, diversity and ethnically based customs, rituals, alternative health care choices, folk medicine, cultural structure and viewpoints and the practitioner's delivery of health care. Prerequisite: COMP 1500. Frequency: Every Spring, Every Summr I, Every Summer II, Every Fall and Every Winter.
                        </span>
                </div>
                <div class="panel-collapse collapse in" collapse="!isOpen" style={{height: "auto"}}>
                    <div class="panel-body panel-border" ng-transclude="">
                        <div class="outcome-padding ng-scope"><strong class="ng-binding">LEARNING_OUTCOMES:</strong>
                            <br /><span class="outcome-wrap ng-binding">1)	Learn, understand and be able to identify the barriers, factors and prejudice that hinder cultural understanding, acceptance and delivery of care and create strategies to overcome these barriers
2)	Learn, understand and be able to define key terminology
3)	Create an increased awareness of personal cultural biases and ethnic identity and preconceived notions that impact interactions with other diverse populations
4)	Become familiar with various ethnic and cultural culturally diverse populations
5)	Demonstrate knowledge and understanding of factors that shape and define different groups of people as a culture
6)	Learn, understand and recognize the importance of language as to culture and the delivery of care limitations of utilizing interpreter services and understand the concept of "cultural br/okers"
7)	Learn, understand and demonstrate ability to utilize selected cultural competency models and tools in the delivery of care to different cultures
</span>
                            <br />
                            <br />
                        </div>
                        <div ng-repeat="tab in course.tabs" class="ng-scope">
                            <div class="col-md-12"></div>
                            <div ng-repeat="class in tab.classes" class="ng-scope">
                                <div class="row class-borders no-margin course-Head-Style">
                                    <div class="col-md-1 col-sm-12 col-xs-12 no-left-padding no-padding-sm ng-hide" ng-show="class.maxEnroll <= class.enrolled">
                                        <div class="full-class"><strong>Full</strong>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                        <div class="ng-binding"><strong>CRN:</strong> 10008 <strong>Sec:</strong> 1 <strong>Cr:</strong> 3.0</div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-xs-12 border-left">
                                        <div class="ng-binding"><strong class="ng-binding">Faculty:</strong>
                                            <span ng-if="class.professor.lastName != null" class="ng-binding ng-scope">Berman,</span>
                                            Jodie</div>
                                    </div>
                                    <div class="col-md-1 col-sm-12 col-xs-12 hidden-sm hidden-xs ng-scope" ng-if="class.maxEnroll > class.enrolled">&nbsp;</div>
                                    <div class="col-md-3 col-sm-6 col-xs-12 cursor-pointer ng-scope book-info" ng-if="class.bookUrl != null &amp;&amp; class.bookUrl !=''" ng-class="class.bookUrl == null || class.bookUrl == '' ? 'btngrry disabled cursor-not-allowed' : 'book-info'" ng-click="vm.bookUrl(class.bookUrl)">
                                        <div class="ng-binding"><i class="fa fa-external-link-square"></i> BOOK_INFO</div>
                                    </div>
                                    <div class="col-md-2 col-sm-6 col-xs-12 cursor-pointer btngrry disabled cursor-not-allowed ng-scope" ng-if="class.hasSyllabus == false || class.hasSyllabus == true &amp;&amp; class.endorsementMet == false || class.hasSyllabus == true &amp;&amp; class.endorsementMet == true &amp;&amp; class.showSyllabusLink == false">
                                        <div class="disabled ng-binding"><i class="fa fa-external-link-square"></i> View Syllabus</div>
                                    </div>
                                </div>
                                <table class="no-border mobile-table">
                                    <thead class="no-border mobile-hide nowrap">
                                        <tr class="background-white">
                                            <th class="text-center meetings-row-padding ng-binding" width="10%">Day</th>
                                            <th class="text-center meetings-row-padding ng-binding" width="20%">Date</th>
                                            <th class="text-center meetings-row-padding ng-binding" width="20%">Time</th>
                                            <th class="text-center meetings-row-padding ng-binding" width="25%">Location</th>
                                            <th class="text-center meetings-row-padding ng-binding" width="25%">Building / Room Number</th>
                                        </tr>
                                    </thead>
                                    <tbody class="no-border-x no-border-y">
                                        <tr ng-repeat="meeting in class.meetings | orderBy:'startDate'" class="background-white ng-scope" ng-class="meeting.type === 'EXAM' ? 'color-warning' : ''">
                                            <td class="text-center meetings-row-padding ng-binding">
                                                <label class="visible-xs ng-binding">Day:</label> -</td>
                                            <td class="text-center meetings-row-padding ng-binding">
                                                <label class="visible-xs ng-binding">Date:</label> 06/26/2017 - 09/17/2017</td>
                                            <td class="text-center meetings-row-padding ng-binding">
                                                <label class="visible-xs ng-binding">Time:</label> - </td>
                                            <td class="text-center meetings-row-padding">
                                                <span ng-if="class.location != ''" class="ng-binding ng-scope"><label class="visible-xs ng-binding">Location:</label> On-line Course / (YW)</span>

                                            </td>
                                            <td class="text-center meetings-row-padding">
                                                <label class="visible-xs ng-binding">Building / Room Number:</label>
                                                <span class="meetings-row-padding building-padding ng-binding ng-scope" ng-if="meeting.building != null &amp;&amp; meeting.type != 'CHAT'">Online Venue / BLACKBOARD</span>

                                            </td>
                                        </tr>
                                        <tr ng-show="class.meetings.length == 0" class="background-white ng-hide">
                                            <td class="text-center meetings-row-padding"></td>
                                            <td class="text-center meetings-row-padding"></td>
                                            <td class="text-center meetings-row-padding"></td>
                                            <td class="text-center meetings-row-padding">
                                                <span ng-if="class.location != ''" class="ng-binding ng-scope">On-line Course / (YW)</span>
                                            </td>
                                            <td class="text-center meetings-row-padding"><span class="meetings-row-padding building-padding"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

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
    classes: [],
}