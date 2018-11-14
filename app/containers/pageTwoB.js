import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { toastr } from 'react-redux-toastr';
import { sessionActions } from '../AppcentralCore/web/react/src/actions';
import * as buildingActions from '../actions/pageTwoActions';
import PageTwoBComponentPresentational from '../components/pageTwoB';

class PageTwoBComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      isUS: null,
    };
    this.manageGoBack = this.manageGoBack.bind(this);
    this.manageSaveBuilding = this.manageSaveBuilding.bind(this);
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      this.props.sessionActions.validateToken(this.props.session)
        .then(() => {
          this.props.buildingActions.getBuilding(this.props.session, this.props.match.params.id)
            .then((building) => {
              this.getCampuses(building[0].campuses[0] ? building[0].campuses[0].id : undefined);
              if (building.length !== 1) {
                toastr.error('Error', 'Error retrieving building information');
                this.manageGoBack();
              }

              this.setState({ isUS: building[0].addressNation != null && building[0].addressNation.code === '671' });

              this.props.initialize({
                ...building[0],
                campusId: building[0].campuses[0] ? building[0].campuses[0].id : null,
                blocksOfTime: building[0].blocksOfTime ? building[0].blocksOfTime.toString() : null,
                leadTime: building[0].leadTime ? building[0].leadTime.toString() : null,
                blocksPerUserPerDay: building[0].blocksPerUserPerDay ? building[0].blocksPerUserPerDay.toString() : null,
              });
              this.setState({
                schedule: building[0].bookingAdmin ? building[0].bookingAdmin.hoursAvaList || [] : [],
                exceptions: building[0].bookingAdmin ? building[0].bookingAdmin.avaExcepList || [] : [],
                showBannerName: building[0].name !== null && building[0].name !== undefined,
                loaded: true,
                files: building[0].files || [],
                position: building[0].latitude && building[0].longitude ? { lat: building[0].latitude, lng: building[0].longitude } : null,
              });
            });
        });
    } else if (this.props.location.campusId) {
      this.props.initialize({ active: true, campusId: this.props.location.campusId });
      this.setState({ loaded: true });
    } else {
      this.props.initialize({ active: true });
      this.setState({ loaded: true });
    }
  }

  manageSaveBuilding(formValues) {
    console.log('formValues:', formValues);
    toastr.success('Success', `Not really submitting but you get the idea... Building: ${formValues.alternateName} Description: ${formValues.description}`);

    // Example of submitting some data to Appcentral //

    // return new Promise((resolve) => {
    //   this.props.sessionActions.validateToken(this.props.session)
    //     .then(() => {
    //       this.props.buildingActions.saveBuilding(
    //         this.props.session,
    //         {
    //           ...formValues,
    //           bookingAdmin: { hoursAvaList: schedule, avaExcepList: exceptions },
    //           latitude: position ? position.lat : null,
    //           longitude: position ? position.lng : null,
    //           files: this.state.files,
    //         },
    //         formValues.campusId,
    //       ).then(() => {
    //         resolve();
    //         toastr.success('Success', 'Building saved successfully');
    //         this.manageGoBack();
    //       }).catch((error) => {
    //         toastr.error('Error', `Error Saving Building: ${error}`);
    //         resolve();
    //       });
    //     });
    // });
  }

  manageGoBack() {
    this.props.history.push(`/${this.props.appName}/pagetwo/pagetwoa`);
  }

  render() {
    return <PageTwoBComponentPresentational saveBuilding={this.manageSaveBuilding} goBack={this.manageGoBack} {...this.state} {...this.props} />;
  }
}

const mapStateToProps = (state) =>
  ({
    session: state.session,
    appName: state.appName,
    instanceId: state.instanceId,
  });

const mapDispatchToProps = (dispatch) =>
  ({
    sessionActions: bindActionCreators(sessionActions, dispatch),
    buildingActions: bindActionCreators(buildingActions, dispatch),
  });

PageTwoBComponent.propTypes = {
  history: propTypes.object,
  instanceId: propTypes.number,
  buildingActions: propTypes.object,
  sessionActions: propTypes.object,
  session: propTypes.object,
  location: propTypes.object,
  initialize: propTypes.func,
  match: propTypes.object,
  isUS: propTypes.bool,
  appName: propTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'buildingAdminForm',
})(PageTwoBComponent));
