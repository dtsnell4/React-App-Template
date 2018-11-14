import React from 'react';
import { Pagination } from 'react-bootstrap'

export class ClientPaginator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }

  getInitialState() {
    return {
      activePage: 1,
    };
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey,
    });
  }

  render() {
    return (
      <div>

        <Pagination
          bsSize="small"
          items={10}
          activePage={this.state.activePage}
          onSelect={(eventKey) => this.handleSelect(eventKey)}
        />
      </div>
    );
  }
}
