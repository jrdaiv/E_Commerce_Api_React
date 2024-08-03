import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const CustomerModal = ({ show, handleClose, handleConfirmation, action}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm {action}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to {action} this customer?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleConfirmation}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomerModal;


















