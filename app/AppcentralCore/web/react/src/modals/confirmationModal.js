import React from 'react';
import propTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, DropdownItem } from 'reactstrap';

class ConfirmationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      content: null,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.cancel = this.cancel.bind(this);
    this.ok = this.ok.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  showModal(content) {
    this.setState({
      content,
    });
    this.toggleModal();
  }

  ok() {
    if (this.props.ok) {
      this.props.ok();
    }
    this.setState({ modal: false });
  }

  cancel() {
    if (this.props.cancel) {
      this.props.cancel();
    }
    this.setState({ modal: false });
  }

  render() {
    const {
      header, icon, buttonLabel, buttonColor, okColor, dropdown, noCancel,
    } = this.props;

    return (
      <span>
        {dropdown && <DropdownItem onClick={this.toggleModal}>{buttonLabel}</DropdownItem>}
        {buttonColor && <Button color={buttonColor} outline onClick={this.toggleModal}><i className={`fa ${icon}`}></i> {buttonLabel}</Button>}
        <Modal toggle={this.toggleModal} isOpen={this.state.modal || this.props.modal} >
          {header && <ModalHeader>{header}</ModalHeader>}
          <ModalBody>
            {this.state.content || this.props.children}
          </ModalBody>
          <ModalFooter>
            <Row>
              {!noCancel &&
                <Col xs="6">
                  <Button color="secondary" block onClick={this.cancel}>Cancel</Button>
                </Col>
              }
              <Col xs={{ size: 6, offset: noCancel ? 3 : 0 }}>
                <Button color={okColor} block onClick={this.ok}>Ok</Button>{' '}
              </Col>
            </Row>
          </ModalFooter>
        </Modal>
      </span>
    );
  }
}

ConfirmationModal.propTypes = {
  /** Color of the button that opens the modal */
  buttonColor: propTypes.string,
  /** Text for the button that opens the modal */
  buttonLabel: propTypes.string,
  /** Optional function to execute when the Cancel button is clicked. */
  cancel: propTypes.func,
  /** The html contents of the modal */
  children: propTypes.element.isRequired,
  /** Add this parameter if the button is to be a <DropdownItem> in a Bootstrap dropdown menu */
  dropdown: propTypes.bool,
  /** Text to display in an optional blue modal header */
  header: propTypes.bool,
  /** Optional font awesome icon to be shown on the open modal button (e.g. `fa-plus`) */
  icon: propTypes.string,
  /** State of the modal, true/false == open/closed */
  modal: propTypes.bool.isRequired,
  /** Add this parameter to hide the cancel button in the modal */
  noCancel: propTypes.bool,
  /** Function to execute when the OK button is clicked */
  ok: propTypes.func.isRequired,
  /** Color of the OK button */
  okColor: propTypes.string,
  /** Function to call to toggle the modal's state externally of the component.  Content can be passed as an argument to change the message displayed in the modal if it is dynamic. */
  /* eslint-disable-next-line */
  showModal: propTypes.func,
};

export default ConfirmationModal;
