import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TarotApi from '../api/api';
import Table from 'react-bootstrap/Table';
import './Profile.css';
import UserContext from '../Auth/UserContext';
import { Link } from 'react-router-dom';
import DeleteConfirm from '../common/DeleteConfirm';

const editIcon = require('../edit.png');

const Profile = () => {
	const history = useNavigate();
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const [ spreads, setSpreads ] = useState();
	const [ id, setId ] = useState(null);
	const [ displayConfirmationModal, setDisplayConfirmationModal ] = useState(false);
	const [ deleteMessage, setDeleteMessage ] = useState('Are you sure you want to delete this spread?');

	useEffect(function getSpreadsOnMount() {
		search();
	}, []);

	async function search(username) {
		const currentUsername = currentUser.username;
		let spreads = await TarotApi.getSpreads(currentUsername);
		setSpreads(spreads);
	}

	const showDeleteModal = (id) => {
		setId(id);
		setDisplayConfirmationModal(true);
	};

	const hideConfirmationModal = () => {
		setDisplayConfirmationModal(false);
	};

	async function deleteSpread(e) {
		const currentUsername = currentUser.username;
		await TarotApi.deleteSpread(currentUsername, id);
		setDisplayConfirmationModal(false);
		history(0);
	}

	if (!spreads) return <p>Loading...</p>;

	return (
		<div>
			<h1 className='Meanings-Head'>Your Profile and Saved Spreads</h1>

			<Table responsive striped bordered hover size='sm'>
				<thead>
					<tr>
						<th>Username</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{currentUser.username}</td>
						<td>{currentUser.firstName}</td>
						<td>{currentUser.lastName}</td>
						<td>{currentUser.email}</td>
						<td>
							<Link to='/edit'>
								<img src={editIcon} width='20px' />
							</Link>
						</td>
					</tr>
				</tbody>
			</Table>
			<p className='Profile-P'>Your Saved Spreads:</p>
			<Table responsive striped bordered hover size='sm'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Title</th>
						<th>Spread</th>
						<th>Comments</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{spreads.map((spread, key) => {
						return (
							<React.Fragment>
								<tr>
									<td>{spread.timedate.toString().slice(0, 10)}</td>

									<td>{spread.title}</td>
									<td>{spread.spread}</td>
									<td>{spread.comments}</td>
									<td
										className='Profile-DeleteBtn'
										id={spread.id}
										onClick={() => showDeleteModal(spread.id)}
									>
										X
									</td>
								</tr>
							</React.Fragment>
						);
					})}
				</tbody>
			</Table>
			<DeleteConfirm
				showModal={displayConfirmationModal}
				confirmModal={deleteSpread}
				hideModal={hideConfirmationModal}
				id={id}
				message={deleteMessage}
			/>
		</div>
	);
};
export default Profile;
