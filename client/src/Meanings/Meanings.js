import React from 'react';
import Table from 'react-bootstrap/Table';
import './Meanings.css';
import data from '../tarot-images.json';
const m01 = require('../cardImages/m01.jpg');
const m21 = require('../cardImages/m21.jpg');

const Meanings = () => {
	const cards = data.cards;

	return (
		<div>
			<h1 className='Meanings-Head'>The Meanings of Each Tarot Card</h1>
			<img src={m01} className='Meaning-IMG1' />
			<p className='Meanings-P'>
				Tarot Card imagery is evocative and often dream-like, so each card can mean whatever you want it to
				mean! For example, if you draw the Six of Wands and think, "He looks kind of lazy, maybe I should relax
				today" - that is a totally valid reading (even if you don't find it any of the books).
			</p>
			<p className='Meanings-P'>
				<em>However</em>, there are certain archetypes, symbols, and traditional meanings associated with each
				card, and these can be very useful to know about as you continue along the "Fool's Journey".
			</p>
			<p className='Meanings-P'>
				Below is a chart of each card in a standard 78-card Tarot Deck, some keywords, and some suggested
				meanings:
			</p>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Keywords</th>
						<th className='Meanings-Light'>Meanings (Light)</th>
						<th className='Meanings-Shadow'>Meanings (Dark)</th>
						<th>Archetype / Affirmation</th>
					</tr>
				</thead>
				<tbody>
					{cards.map((card, key) => {
						return (
							<React.Fragment>
								<tr>
									<td>{card.name}</td>
									<td className='Meanings-Keywords'>
										{card.keywords[0]} * {card.keywords[1]}
									</td>
									<td className='Meanings-Light'>{card.meanings.light[0]}</td>
									<td className='Meanings-Shadow'>{card.meanings.shadow[0]}</td>
									<td>{card.Affirmation ? card.Affirmation : card.Archetype}</td>
								</tr>
							</React.Fragment>
						);
					})}
				</tbody>
			</Table>
			<img src={m21} className='Meaning-IMG2' />
		</div>
	);
};

export default Meanings;
