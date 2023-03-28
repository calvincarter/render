import React, { useContext } from 'react';
import './Footer.css';
import UserContext from '../Auth/UserContext';

const Footer = () => {
	const { currentUser } = useContext(UserContext);
	const today = new Date();
	return (
		<div className='Footer'>
			{currentUser ? (
				<p>You are signed in as {currentUser.username}</p>
			) : (
				<p>Log in or Register for more features!</p>
			)}
			<p>Muddlefog Tarot {today.getFullYear()}</p>
		</div>
	);
};

export default Footer;
