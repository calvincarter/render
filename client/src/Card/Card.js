import React, { useEffect, useState } from 'react';
import data from '../tarot-images.json';
import './Card.css';
import backOfCard from '../cardImages/back.jpeg';

// ↓↓↓ 78 Tarot Card Images imported for use - public domain ↓↓↓
import cardImports from './cardImports';

const TarotCard = ({ updateTarotCard }) => {
	const [ isFlipped, setFlipped ] = useState(true);
	const flip = () => {
		setFlipped(!isFlipped);
	};

	const cards = data.cards;
	let cardArray = [];
	const randomCardNumber = Math.floor(Math.random() * 78);
	const cardPull = {
		name: cards[randomCardNumber].name,
		image: cardImports[cards[randomCardNumber].img.split('.')[0]],
		affirmation: cards[randomCardNumber].Affirmation,
		archetype: cards[randomCardNumber].Archetype,
		keywords: cards[randomCardNumber].keywords
	};

	// updateTarotCard(cardPull);

	const [ card, setCard ] = useState(cardPull);

	useEffect(
		() => {
			cardArray.push(card);
			localStorage.setItem('cardDraw', JSON.stringify(cardArray));
		},
		[ cardPull ]
	);

	return (
		<div className='Card'>
			<img src={isFlipped ? backOfCard : card.image} alt={card.name} className='Card-img' onClick={flip} />
			{isFlipped ? null : (
				<div className='Card-body'>
					<p className='Card-name'>{card.name}</p>
					<p>{card.affirmation ? card.affirmation : card.archetype}</p>
					<p className='Card-keyword'>{card.keywords.join('  *  ')}</p>
				</div>
			)}
		</div>
	);
};

export default TarotCard;
