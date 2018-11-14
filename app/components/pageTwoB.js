import React from 'react';
import propTypes from 'prop-types';
import { Row, Col, Button } from 'reactstrap';
import { Field } from 'redux-form';
import { FormInput } from '../AppcentralCore/web/react/src';

const PageTwoB = (props) => {
  const {
    goBack,
    submitting,
    loaded,
    invalid,
    saveBuilding,
    handleSubmit,
    showBannerName,
  } = props;

  return (
    <div>
      {loaded &&
        <form className="form-tab-wizard" onSubmit={handleSubmit(saveBuilding)}>
          <div>
            <div className="block-flat">
              <h5>Page Two B</h5>
              <Field name="id" type="text" component="input" hidden></Field>
              <Row>
                <Col lg="6" xl="4">
                  {showBannerName &&
                    <Field label="Building Name" name="alternateName" placeholder="Enter building name" type="text" component={FormInput} />
                  }
                  {!showBannerName &&
                    <Field label="Building Name" required name="alternateName" placeholder="Enter building name" type="text" component={FormInput} />
                  }
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <Field label="Description" name="description" placeholder="Enter description here" type="textarea" component={FormInput} />
                </Col>
              </Row>
              <div className="buttonscontainer">
                <div className="left-buttons">
                  <Button color="primary" outline type="button" onClick={goBack} disabled={submitting}>Cancel/Go Back to Page 2a</Button>
                  <Button color="primary" type="submit" disabled={submitting || invalid}>{submitting && <i className="fa fa-spinner fa-spin ml-1"></i>}Submit Some Data</Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      }
    </div>
  );
};

PageTwoB.propTypes = {
  goBack: propTypes.func,
  submitting: propTypes.bool,
  invalid: propTypes.bool,
  saveBuilding: propTypes.func,
  handleSubmit: propTypes.func,
  loaded: propTypes.bool,
  showBannerName: propTypes.bool,
};

export default PageTwoB;
