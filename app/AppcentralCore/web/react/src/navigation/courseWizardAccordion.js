import React from 'react';
import propTypes from 'prop-types';
import { Collapse } from 'react-bootstrap';

class CwAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  render() {
    return (
      <div>
        <div className="panel-header accordion-margin-b panel panel-default">
          <div className="panel-heading course-wizard-blue">
            <h4 style={{ color: 'white' }} className="panel-title">{this.props.subjectCode} {this.props.number} {this.props.name}<span onClick={() => this.setState({ open: !this.state.open })} className={`glyphicon pull-right ${this.state.open ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`}></span></h4>

          </div>
          <div className="panel-description description-padding">
            <span className="panel-description"><strong>Description:</strong></span><br />
            <p>{this.props.description}</p>
          </div>
          <Collapse style={{ border: '0px' }} in={this.state.open} className="cw-panel">
            <div>
              <div className="outcome-padding">
                <span><strong>LEARNING_OUTCOMES:</strong></span><br />
                <span className="outcome-wrap">{this.props.outcomes}</span><br /><br />
              </div>
              {this.props.classes && this.props.classes.map((classItem) =>
                (
                  <div className="row no-margin">
                    <div className="row class-borders no-margin course-Head-Style">
                      <div className="col-lg-3 col-md-3">
                        <div>
                          <span><strong>CRN: </strong></span>
                          <span>{classItem.crn} </span>
                          <span><strong>Sec: </strong></span>
                          <span>{classItem.seqNum} </span>
                          <span><strong>Cr: </strong></span>
                          <span>{classItem.credits} </span>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3">
                        <div>
                          <span><strong>Faculty: </strong></span>
                          <span>{classItem.professor.lastName}, {classItem.professor.firstName}</span>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 cursor-pointer ng-scope book-info">
                        <div>
                          <span className="glyphicon glyphicon-share"></span><span>BOOK INFO</span>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 cursor-pointer btngrry disabled cursor-not-allowed">
                        <div>
                          <span className="glyphicon glyphicon-share"></span><span>View Syllabus</span>
                        </div>
                      </div>
                    </div>
                    <table className="meetings-table no-border mobile-table">
                      <thead className="no-border mobile-hide nowrap">
                        <tr>
                          <th className="text-center meetings-row-padding" width="10%">Day</th>
                          <th className="text-center meetings-row-padding" width="20%">Date</th>
                          <th className="text-center meetings-row-padding" width="20%">Time</th>
                          <th className="text-center meetings-row-padding" width="25%">Location</th>
                          <th className="text-center meetings-row-padding" width="25%">Building / Room Number</th>
                        </tr>
                      </thead>
                      <tbody className="no-border-x no-border-y">
                        {classItem.meetings && classItem.meetings.map((meetingItem) =>
                          (
                            <tr>
                              <td className="text-center meetings-row-padding">{meetingItem.days ? meetingItem.days : '-'}</td>
                              <td className="text-center meetings-row-padding">{meetingItem.startDate.split(' ')[0]} - {meetingItem.endDate.split(' ')[0]}</td>
                              <td className="text-center meetings-row-padding">-</td>
                              <td className="text-center meetings-row-padding">{classItem.location} / ({classItem.campusCode})</td>
                              <td className="text-center meetings-row-padding">{meetingItem.building} / {meetingItem.room}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                ))}
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}

CwAccordion.propTypes = {
  subjectCode: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  // code: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  outcomes: propTypes.string.isRequired,
  classes: propTypes.array,
};

// CwAccordion.defaultProps = {
//     subjectCode: "",
//     number: "",
//     code: "",
//     name: "",
//     description: "",
//     outcomes: "",
//     classes: [],
// }

export default CwAccordion;
