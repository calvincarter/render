import React, { useState, useContext } from 'react';
import TarotCard from '../Card/Card';
import './Home.css';
import { Button } from 'react-bootstrap';
import UserContext from '../Auth/UserContext';
import SaveSpreadForm from '../Profile/SaveSpreadForm';

const Home = () => {
	const today = new Date().toDateString();

	const { currentUser } = useContext(UserContext);
	const [ cardDraws, setCardDraws ] = useState([]);
	const [ saveForm, setSaveForm ] = useState();

	function addCard() {
		setCardDraws(cardDraws.concat(<TarotCard />));
	}
	function renderSaveForm() {
		setSaveForm(<SaveSpreadForm />);
	}
	function clearCards() {
		setCardDraws([]);
	}

	// ↓↓↓ Homepage render when not logged in ↓↓↓
	// Will only allow for drawing 1 card at a time

	function loggedOutHome() {
		return (
			<div className='Home'>
				<div className='Home-Button-Layout'>
					<Button
						className='Home-Button-Draw'
						onClick={cardDraws.length < 1 ? addCard : null}
						variant='success'
						size='lg'
					>
						Click to draw a single Tarot Card
					</Button>
				</div>
				<div className='CardTable'>{cardDraws}</div>
				{!cardDraws.length ? null : (
					<div className='Home-Button-Clear'>
						<Button onClick={clearCards} variant='light' size='lg'>
							Clear all cards
						</Button>
					</div>
				)}
			</div>
		);
	}

	// ↓↓↓ Homepage render when logged in ↓↓↓
	// Will allow for 1, 3, and 9 card spreads
	function loggedInHome() {
		return (
			<div className='Home'>
				<h3 className='Home-User-Head'>
					{currentUser.username}'s Tarot Spread for {today}
				</h3>

				<div className='Home-Button-Layout'>
					<Button
						className='Home-Button-Draw'
						onClick={cardDraws.length < 1 ? addCard : null}
						variant='success'
						size='lg'
					>
						Click to draw a single Tarot Card
					</Button>
					<Button
						className='Home-Button-Draw'
						onClick={cardDraws.length < 3 ? addCard : null}
						variant='info'
						size='lg'
					>
						Click to draw a three card spread
					</Button>
					<Button
						className='Home-Button-Draw'
						onClick={cardDraws.length < 9 ? addCard : null}
						variant='warning'
						size='lg'
					>
						Click to draw a nine card spread
					</Button>
				</div>

				<div className='CardTable'>{cardDraws}</div>
				{!cardDraws.length ? null : (
					<React.Fragment>
						<div className='d-grid gap-2 Home-Button-Save'>
							<Button onClick={renderSaveForm} variant='light' size='lg'>
								Save This Spread
							</Button>
						</div>
						<div className='Home-Save-Form'>{saveForm}</div>
						<div className='d-grid gap-2 Home-Button-Clear'>
							<Button onClick={clearCards} variant='light' size='lg'>
								Clear all cards
							</Button>
						</div>
					</React.Fragment>
				)}
			</div>
		);
	}
	{
		return <div>{currentUser ? loggedInHome() : loggedOutHome()}</div>;
	}
};

export default Home;
