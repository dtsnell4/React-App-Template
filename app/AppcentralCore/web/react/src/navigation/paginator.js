import React from 'react';
import propTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink, Input } from 'reactstrap';

class Paginator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {}, pageSize: this.props.initialSize };
    this.handlePagerCount = this.handlePagerCount.bind(this);
  }

  componentWillMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page, pageSize) {
    const { items } = this.props;
    let { pager } = this.state;

    pager = this.getPager(items.length, page, pageSize || this.state.pageSize, this.props.pagerPages);
    // if (page < 1 || page > pager.totalPages) {
    //   return;
    // }
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    this.setState({ pager });
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, _currentPage, _pageSize, _pagerPages) {
    const pagerPages = _pagerPages || 5;
    const currentPage = _currentPage || 1;
    const pageSize = _pageSize || 10;
    const totalPages = Math.ceil(totalItems / pageSize);
    let startPage;
    let endPage;
    if (totalPages <= pagerPages) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= pagerPages * 0.6) {
      startPage = 1;
      endPage = pagerPages;
    } else if (currentPage + (pagerPages * 0.4) >= totalPages) {
      startPage = (totalPages - pagerPages) + 1;
      endPage = totalPages;
    } else {
      // startPage = currentPage - 5;
      startPage = (Math.ceil(currentPage + (pagerPages * 0.4)) - pagerPages) + 1;
      endPage = currentPage + (pagerPages * 0.4);
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min((startIndex + pageSize) - 1, totalItems - 1);
    const pages = new Array((endPage - startPage) + 1).fill().map((_, i) => startPage + i);
    // const pages = _.range(startPage, endPage + 1);
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    };
  }

  handlePagerCount(event) {
    this.setState({ pageSize: parseInt(event.target.value, 10) });
    this.setPage(1, parseInt(event.target.value, 10));
  }

  render() {
    const { pager } = this.state;
    return (
      <div className="paginator-container">
        {this.props.pagerValues && this.state.pager && pager.pages && pager.pages.length > 1 &&
          <span className="page-count">
            {this.state.pager.currentPage} of {this.state.pager.totalPages} pages ({this.state.pager.totalItems} items)
          </span>
        }
        <div className="pull-right">
          <span className="for-rows mr-5">
            <span>Show &nbsp;</span>
            <Input onChange={this.handlePagerCount} defaultValue={this.props.initialSize} type="select">
              {this.props.pagerValues.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </Input>
            <span>&nbsp; Items</span>
          </span>
          {pager.pages && pager.pages.length > 0 &&
            <Pagination>
              <PaginationItem>
                {pager.currentPage === 1 ?
                  <PaginationLink disabled>&lt;&lt;</PaginationLink> :
                  <PaginationLink onClick={() => this.setPage(1)}>&lt;&lt;</PaginationLink>
                }
              </PaginationItem>
              <PaginationItem>
                {pager.currentPage === 1 ?
                  <PaginationLink disabled>&lt;</PaginationLink> :
                  <PaginationLink onClick={() => this.setPage(pager.currentPage - 1)}>&lt;</PaginationLink>
                }
              </PaginationItem>
              {pager.pages.map((page) => (
                <PaginationItem key={page} active={pager.currentPage === page} >
                  <PaginationLink onClick={() => this.setPage(page)}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                {pager.currentPage === pager.totalPages ?
                  <PaginationLink disabled>&gt;</PaginationLink> :
                  <PaginationLink onClick={() => this.setPage(pager.currentPage + 1)}>&gt;</PaginationLink>
                }
              </PaginationItem>
              <PaginationItem>
                {pager.currentPage === pager.totalPages ?
                  <PaginationLink disabled>&gt;&gt;</PaginationLink> :
                  <PaginationLink onClick={() => this.setPage(pager.totalPages)}>&gt;&gt;</PaginationLink>
                }
              </PaginationItem>
            </Pagination>
          }
        </div>
      </div>
    );
  }
}

Paginator.propTypes = {
  /** What page number to start on. */
  initialPage: propTypes.number,
  /** This initial value for the pageValues property */
  initialSize: propTypes.number,
  /** The array of items that is to be displayed */
  items: propTypes.array.isRequired,
  /** Function to execute when the page is changed.  This will usually entail settiing the state to include the items for the current page. */
  onChangePage: propTypes.func.isRequired,
  /** The number of page buttons to display in the paginator at any given time */
  pagerPages: propTypes.number,
  /** An array of values that represents the choices of number of items to display per page */
  pagerValues: propTypes.oneOfType([propTypes.array, propTypes.bool]),
};

Paginator.defaultProps = {
  initialPage: 1,
  pagerPages: 5,
  pagerValues: [5, 10, 20, 50],
  initialSize: 10,
};

export default Paginator;
