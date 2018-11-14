import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { sessionActions } from '../AppcentralCore/web/react/src/actions';
import PageOnePresentational from '../components/pageOne';
import * as pageOneActions from '../actions/pageOneActions';
const config = require('../../config.json');

class PageOneComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: [],
      pageOfItems: [],
      loaded: false,
      isGridView: true,
    };

    this.handleToggleFilters = this.handleToggleFilters.bind(this);
  }

  componentWillMount() {
    this.props.sessionActions.validateToken(this.props.session)
      .then(() => {
        this.props.pageOneActions.getCampuses(this.props.session)
          .then(() => {
            this.setState({ campuses: this.props.allCampuses.filter((f) => f.active), loaded: true });
          });
        this.props.initialize({ active: true });
      })
      .catch(() => {
        window.location = `${config.login[process.env.NODE_ENV]}/null/${encodeURIComponent(window.location.pathname)}`;
      });
  }

  handleToggleFilters(state) {
    if (state) {
      this.props.reset();
    }
  }

  render() {
    return <PageOnePresentational onToggleFilters={this.handleToggleFilters} {...this.state} {...this.props} />;
  }
}

const mapStateToProps = (completeStore) => // maps state (redux store) to component props
  ({
    session: completeStore.session,
    allCampuses: completeStore.campusList,
    appName: completeStore.appName,
  });

//  injects dispatch to call other actions from the action creators
const mapDispatchToProps = (dispatch) =>
  ({
    sessionActions: bindActionCreators(sessionActions, dispatch),
    pageOneActions: bindActionCreators(pageOneActions, dispatch),
  });

PageOneComponent.propTypes = {
  pageOneActions: propTypes.object,
  session: propTypes.object,
  sessionActions: propTypes.object,
  allCampuses: propTypes.array,
  initialize: propTypes.func,
  reset: propTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'campusesFilterForm',
})(PageOneComponent));
