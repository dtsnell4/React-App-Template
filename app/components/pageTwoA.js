import React from 'react';
import propTypes from 'prop-types';

const PageTwo = (props) => {
  const {
    buildings,
    loaded,
  } = props;
  return (
    <div className="block-flat">
      {loaded &&
        <div>
          <div className="header">
            <h3>Page Two A</h3>
          </div>
          <div className="mb-6 mt-3">Just using some Spaces data as an example</div>
          <div>
            {buildings.length > 0 &&
              <div>
                {buildings.map((building) => (
                  <div key={building.id}>
                    <h4>Building: {building.name}</h4>
                    <h4>Id: {building.id}</h4>
                    <h4 className="mb-5">Description: {building.description}</h4>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
      }
    </div>
  );
};

PageTwo.propTypes = {
  buildings: propTypes.array,
  loaded: propTypes.bool,
};

export default PageTwo;
