import React from 'react';
import './History.css';
const m00 = require('../cardImages/m00.jpg');
const m11 = require('../cardImages/m11.jpg');

function History() {
	return (
		<div>
			<h1 className='History-Head'>The History of Tarot Cards</h1>
			<img src={m00} className='History-IMG1' />

			<p className='History-P'>
				Volumes have been written about the origins of Tarot (and if you are interested in furthering your
				knowledge, check out the Resources tab!)
			</p>
			<p className='History-P'>
				While you may assume these colorful cards come shrouded in mystery with no one certain of their
				beginning, they actually have a pretty clear lineage!
			</p>
			<ul className='History-UL'>
				<li>1367 - The first known record of playing cards and card decks</li>
				<li>
					1377 - John de Rheinfelden writes of a style of deck containing 4 suits of 13 cards (much like
					today's standard deck)
				</li>
				<li>
					1440-1450 - The first documented Tarot decks appear in Italy, their original purpose to play games.
					In fact, it's likely that the word <em>tarot</em> derives from <em>tarocchi</em>, an Italian card
					game that preceded tarot)
				</li>
				<li>
					1750 - The earliest evidence of Tarot cards being used for cartomancy (card-based fortune telling)
				</li>
				<li>1780's - The popularization of 'esoteric' tarot reading begins in Paris</li>
				<li>
					1909 - Dr. Arthur Waite commissioned Pamela Smith to produce a tarot deck to appeal to the world of
					art, and the result was the cards seen on this website.
				</li>
			</ul>
			<p className='History-P'>Today, a 'standard' Tarot deck consists of 78 cards, split into two sections:</p>
			<ul className='History-UL'>
				<li>
					The Major Arcana - 22 cards without suits representing broad themes such as The Lovers, The Moon,
					and Death
				</li>
				<li>
					The Minor Arcana - 56 cards divided into four suits (Wands, Cups, Swords, and Pentacles or Coins) of
					14 cards
				</li>
			</ul>
			<p className='History-P'>
				As mentioned above, the tarot card images used in this website come from the original artwork of Pamela
				Colman Smith. These iconic designs are featured in what are now called Rider-Waite-Smith (or RWS) decks.
			</p>
			<img src={m11} className='History-IMG2' />
		</div>
	);
}

export default History;
