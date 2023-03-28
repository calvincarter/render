import React, { useContext } from 'react';
import UserContext from '../Auth/UserContext';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';
const logo = require('../muddlefog_logo.png');

function NavBar({ logout }) {
	const { currentUser } = useContext(UserContext);

	function loggedOutNav() {
		return (
			<div className='NavBar'>
				<img src={logo} className='NavBar-Logo' />
				<NavLink to='/' className='NavBar-NavLink-Home'>
					Home
				</NavLink>
				<NavLink to='/meanings' className='NavBar-NavLink'>
					Card Meanings
				</NavLink>
				<NavLink to='/history' className='NavBar-NavLink'>
					History of Tarot
				</NavLink>
				<NavLink to='/resources' className='NavBar-NavLink'>
					Resources
				</NavLink>
				<NavLink to='/signup' className='NavBar-NavLink'>
					Log In/Register
				</NavLink>
			</div>
		);
	}
	function loggedInNav() {
		return (
			<div className='NavBar'>
				<img src={logo} className='NavBar-Logo' />
				<NavLink to='/' className='NavBar-NavLink-Home'>
					Home
				</NavLink>
				<NavLink to='/meanings' className='NavBar-NavLink'>
					Card Meanings
				</NavLink>
				<NavLink to='/history' className='NavBar-NavLink'>
					History of Tarot
				</NavLink>
				<NavLink to='/resources' className='NavBar-NavLink'>
					Resources
				</NavLink>
				<NavLink to='/profile' className='NavBar-NavLink'>
					Profile
				</NavLink>
				<Link to='/' onClick={logout} className='NavBar-NavLink'>
					LogOut {currentUser.username}
				</Link>
			</div>
		);
	}

	return <nav>{currentUser ? loggedInNav() : loggedOutNav()}</nav>;
}

export default NavBar;
