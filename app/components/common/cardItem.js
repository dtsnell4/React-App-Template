import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Card, CardText, CardBody, CardTitle, CardFooter, DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem } from 'reactstrap';
import bgLogo from '../../AppcentralCore/assets/images/cardBg.png';

export const CardItem = (props) => {
  const {
    item,
    dDLinkPath,
    dDViewTitle,
    roomFacilities,
    editUrl,
  } = props;
  return (
    <Col xs="12" sm="6" md="6" lg="4" xl="4" className="cardCol mb-3">
      <Card className="m-0">
        <div className={`cardimg ${roomFacilities ? 'sixteen-nine' : 'spaces'}`} style={{ backgroundImage: `url(${item.files && item.files[0] ? item.files[0].link : bgLogo})` }}></div>
        <CardBody>
          <CardTitle>{item.alternateName || item.name || item.fullName}</CardTitle>
          <CardText>{item.description}</CardText>
        </CardBody>
        <CardFooter>
          <UncontrolledDropdown>
            <DropdownToggle size="sm" color="primary" caret>Select Action</DropdownToggle>
            <DropdownMenu>
              {/* <DropdownItem header>{dDHeader} Actions</DropdownItem> */}
              {editUrl && <Link to={editUrl}><DropdownItem>Edit</DropdownItem></Link>}
              {dDLinkPath ? <Link to={dDLinkPath}><DropdownItem>View {dDViewTitle}</DropdownItem></Link> : ''}
            </DropdownMenu>
          </UncontrolledDropdown>
        </CardFooter>
      </Card>
    </Col>
  );
};

CardItem.propTypes = {
  item: propTypes.object,
  dDLinkPath: propTypes.string,
  dDViewTitle: propTypes.string,
  roomFacilities: propTypes.bool,
  editUrl: propTypes.oneOfType([propTypes.string, propTypes.object]),
};
