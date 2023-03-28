import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// Bootstrap modal to pop-up and warn when deleting - cancel will hide modal, confirm will delete item based on id

const DeleteConfirm = ({ showModal, hideModal, confirmModal, id, message }) => {
	return (
		<Modal show={showModal} onHide={hideModal}>
			<Modal.Header closeButton>
				<Modal.Title>Delete Confirmation</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className='alert alert-danger'>{message}</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='default' onClick={hideModal}>
					Cancel
				</Button>
				<Button variant='danger' onClick={() => confirmModal(id)}>
					Delete
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DeleteConfirm;
