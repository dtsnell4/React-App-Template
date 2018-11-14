import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'reactstrap';
class FilterContainer extends React.Component {
  /* eslint-disable no-underscore-dangle */
  constructor(props) {
    super(props);
    this._toggleFilters = this._toggleFilters.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
    this.state = {
      showFilters: false,
    };
  }
  toggleFilters() {
    this._toggleFilters();
  }

  _toggleFilters() {
    const newState = !this.state.showFilters;
    if (this.props.onToggle) {
      this.props.onToggle(newState);
    }
    this.setState({ showFilters: newState });
    document.getElementsByTagName('body')[0].className = this.state.showFilters ? '' : 'modal-open';
  }

  render() {
    return (
      <span>
        <Button outline color="primary" onClick={this._toggleFilters}>Filters</Button>
        <div
          style={this.props.width ? { width: `${this.props.width}px`, right: (this.props.width && !this.state.showFilters ? `-${this.props.width + 30}px` : null) } : {}}
          className={`filters-container slide-fromleft ${this.state.showFilters ? 'filters-open' : 'filters-closed'}`}
        >
          <div className="filter-body overflow-auto">
            <button type="button" className="close" aria-label="Close" onClick={this._toggleFilters}>
              <span aria-hidden="true">&times;</span>
            </button>
            {this.props.children}
          </div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */}
        <div className="filters-mask" onClick={this._toggleFilters}></div> {/* eslint-disable-line  jsx-a11y/no-static-element-interactions */}
      </span>
    );
  }
}

FilterContainer.propTypes = {
  /** The html for elements that make up your filters */
  children: propTypes.oneOfType([propTypes.array, propTypes.element]),
  /** Optional width parameter if you need to change the width for some reason.  Check with design  */
  width: propTypes.number,
  /** Toggles the visibility of the container.  Can be called externally to remotely open/close */
  onToggle: propTypes.func,
};

export default FilterContainer;
