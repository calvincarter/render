import React from 'react';
import './Resources.css';

const Resources = () => {
	return (
		<div className='Resources'>
			<h1 className='Resources-Head'>Continue your journey...</h1>
			<h2 className='Resources-H2'>Books</h2>
			<p className='Resources-P'>Nothing like a good old-fashioned book to dive in and learn more</p>
			<ul className='Resources-UL'>
				<a href='https://www.amazon.com/Ultimate-Guide-Tarot-Beginners-Revealing/dp/1592336574' target='_blank'>
					The Ultimate Guide to Tarot by Liz Dean
				</a>
				<li>
					This book is like a Tarot encyclopedia - every correlation and traditional meaning for each card
					with glossy, full-color pages. One of my favorites to reach for when I want the big picture on any
					given card.
				</li>
				<a href='https://www.amazon.com/Creative-Tarot-Modern-Guide-Inspired/dp/1501120239' target='_blank'>
					The Creative Tarot: A Modern Guide to an Inspired Life by Jessa Crispin
				</a>
				<li>
					Less color, less shine, but a whole lot of personality. This is THE Tarot book for artists,
					creators, and folks who think differently.
				</li>
				<a
					href='https://www.amazon.com/Seventy-Eight-Degrees-Wisdom-Journey-Self-Awareness/dp/1578636655/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1674869086&sr=1-5'
					target='_blank'
				>
					Seventy Eight Degrees of Wisdom: A Tarot Journey to Self-Awareness by Rachel Pollack
				</a>
				<li>
					A total classic, this book is one I reach for over and over when I need to get back to basics and
					deepen my understanding of the Tarot big picture. Original published in the 1980's, this book holds
					up really well.
				</li>
			</ul>
			<h2 className='Resources-H2'>Websites</h2>
			<p className='Resources-P'>Some of my go-to resources and digital spaces to expand your tarot horizons</p>
			<ul className='Resources-UL'>
				<li>Learning the Tarot </li>

				<a href='http://www.learntarot.com' target='_blank'>
					learntarot.com
				</a>
				<li>Biddy Tarot</li>
				<a href='http://www.biddytarot.com' target='_blank'>
					biddytarot.com
				</a>
				<li>Benebell Wen</li>
				<a href='http://www.benebellwen.com' target='_blank'>
					benebellwen.com
				</a>
			</ul>
			<h2 className='Resources-H2'>YouTube Channels</h2>
			<p className='Resources-P'>
				If you're looking to get more involved in the tarot community and see different decks, styles, and some
				deeper thoughts on tarot
			</p>
			<ul className='Resources-UL'>
				<a href='https://www.youtube.com/@the_hermits_cave' target='_blank'>
					The Hermit's Cave
				</a>
				<li>
					Simon Harrison - Professional Tarot Consultant with 30 years experience reading the tarot and a joy
					to watch. He does deck walkthroughs (so you can see the cards before you buy), interviews with other
					readers, and a Saturday "Cuppa, Catch up, and Cards" live interactive show. One of my favorites!
				</li>
				<a href='https://www.youtube.com/channel/UC2BVPxZo3S3YTlRq4vK-Tcw' target='_blank'>
					Jennifer Ball's Witch House
				</a>
				<li>
					A lovely retiree and frequent poster, Jennifer Ball is so goofy and fun. She does book and deck
					reviews, shares about her life as a cat mom, and witchy-themed hauls. She's a treasure.{' '}
				</li>
				<a href='https://www.youtube.com/@atypicaltarot' target='_blank'>
					Atypical Tarot
				</a>
				<li>
					One of the best channels on YouTube to dig deep into a particular card. Want to get ALL the
					ins-and-outs about the Eight of Swords, for example? Will is your guy. His goal is to combine his
					interests of science and the tarot into one perspective.
				</li>
			</ul>
		</div>
	);
};

export default Resources;
