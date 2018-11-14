import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, FormGroup } from 'reactstrap';
import { FilterContainer } from '../AppcentralCore/web/react/src';
import { CardItem } from './common/cardItem';

const PageOne = (props) => {
  const {
    campuses,
    submitting,
    loaded,
    onToggleFilters,
    appName,
  } = props;
  return (
    <div className="block-flat">
      {
        loaded &&
        <div>
          <div className="header">
            <h3 className="">Page One</h3>
          </div>
          <div className="buttonscontainer" >
            <div className="right-buttons">
              <Link className="btn btn-primary" to={`/${appName}/pageone/pageonea`}>Go To Page 1A</Link>
              <FilterContainer onToggle={onToggleFilters}>
                <h3>Filters</h3>
                <p>Select from the filters below in order to refine your search and find related content.</p>
                <form>
                  <FormGroup>Add your form input here.</FormGroup>
                  <FormGroup><Button color="primary" disabled={submitting} block outline>Apply</Button></FormGroup>
                </form>
              </FilterContainer>
            </div>
          </div>
          <h4> Just showing some data from Spaces as an example</h4>
          <br></br>
          {campuses.length > 0 &&
            <div>
              {campuses.map((c) => (
                <CardItem
                  item={c}
                  key={c.id}
                  editUrl={`/${appName}/campus/edit/${c.id}`}
                  dDHeader="Campus"
                  match={props.match}
                  dDLinkPath={`/${appName}/buildings/list/${c.id}`}
                  dDViewTitle="Buildings"
                />
              ))}
            </div>
          }
        </div>
      }
    </div>
  );
};

/* eslint-disable */
PageOne.propTypes = {
  campuses: propTypes.array,
  match: propTypes.object,
  submitting: propTypes.bool,
  onChangePage: propTypes.func,
  handleSubmit: propTypes.func,
  loaded: propTypes.bool,
  handleGridView: propTypes.func,
  handleListView: propTypes.func,
  onToggleFilters: propTypes.func,
  appName: propTypes.string,
};

export default PageOne;
