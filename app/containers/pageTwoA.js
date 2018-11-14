import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { sessionActions } from '../AppcentralCore/web/react/src/actions';
import PageTwoPresentational from '../components/pageTwoA';
import * as pageTwoActions from '../actions/pageTwoActions';
const config = require('../../config.json');

class PageTwoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: [],
      loaded: false,
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    this.props.sessionActions.validateToken(this.props.session)
      .then(() => {
        this.props.pageTwoActions.getBuildings(this.props.session, undefined, this.props.match.params && this.props.match.params.id ? this.props.match.params.id : undefined)
          .then(() => {
            this.setState({ buildings: this.props.allBuildings.filter((f) => f.active), loaded: true });
          });
        this.props.initialize({ active: true });
      })
      .catch(() => {
        window.location = `${config.login[process.env.NODE_ENV]}/null/${encodeURIComponent(window.location.pathname)}`;
      });
  }

  render() {
    return <PageTwoPresentational {...this.state} {...this.props} />;
  }
}

const mapStateToProps = (state) =>
  ({
    session: state.session,
    allBuildings: state.buildings,
  });

const mapDispatchToProps = (dispatch) =>
  ({
    sessionActions: bindActionCreators(sessionActions, dispatch),
    pageTwoActions: bindActionCreators(pageTwoActions, dispatch),
  });

PageTwoComponent.propTypes = {
  pageTwoActions: PropTypes.object,
  allBuildings: PropTypes.array,
  session: PropTypes.object,
  initialize: PropTypes.func,
  match: PropTypes.object,
  sessionActions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'buildingFilterForm',
})(PageTwoComponent));
