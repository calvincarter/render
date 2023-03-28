import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TarotApi from './api/api';
import UserContext from './Auth/UserContext';
import useLocalStorage from './Hooks/useLocalStorage';
import Home from './Home/Home';
import History from './History/History';
import Resources from './Resources/Resources';
import Meanings from './Meanings/Meanings';
import SignUp from './LogIn_SignUp/SignUp';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import jwt_decode from 'jwt-decode';
import Profile from './Profile/Profile';
import EditForm from './Profile/EditForm';

export const TOKEN_STORAGE_ID = 'tarot-token';

function App() {
	const [ infoLoaded, setInfoLoaded ] = useState(false);
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ token, setToken ] = useLocalStorage(TOKEN_STORAGE_ID);

	useEffect(
		function loadUserInfo() {
			async function getCurrentUser() {
				if (token) {
					try {
						let { username } = jwt_decode(token);
						TarotApi.token = token;
						let currentUser = await TarotApi.getCurrentUser(username);
						setCurrentUser(currentUser);
					} catch (err) {
						console.error('App loadUserInfo: problem loading', err);
						setCurrentUser(null);
					}
				}
				setInfoLoaded(true);
			}
			setInfoLoaded(false);
			getCurrentUser();
		},
		[ token ]
	);

	function logout() {
		setCurrentUser(null);
		setToken(null);
	}
	async function signup(signupData) {
		try {
			let token = await TarotApi.signup(signupData);
			setToken(token);
			return { success: true };
		} catch (errors) {
			console.error('Signup failed', errors);
			return { success: false, errors };
		}
	}

	async function login(loginData) {
		try {
			let token = await TarotApi.login(loginData);
			setToken(token);
			return { success: true };
		} catch (errors) {
			console.error('Login failed', errors);
			return { success: false, errors };
		}
	}

	if (!infoLoaded) return <p>Loading...</p>;
	return (
		<div>
			<BrowserRouter>
				<UserContext.Provider value={{ currentUser, setCurrentUser }}>
					<NavBar logout={logout} />
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route exact path='/history' element={<History />} />
						<Route exact path='/resources' element={<Resources />} />
						<Route exact path='/meanings' element={<Meanings />} />
						<Route exact path='/signup' element={<SignUp signup={signup} login={login} />} />
						<Route exact path='/profile' element={<Profile />} />
						<Route exact path='/edit' element={<EditForm />} />
					</Routes>
					<Footer />
				</UserContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;
