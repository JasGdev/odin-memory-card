import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import ImageCard from './components/ImageCard';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';

function scramble(array) {
	return array.sort(() => Math.random() - 0.5);
}

function App() {
	// scoreboard shows current score and best score
	// function displays card in random order when a user clicks one (invoked when componenet mounts)

	const [prompts, setPrompts] = useState([
		'Dog',
		'Cat',
		'Lion',
		'Tiger',
		'Panda',
		'Elephant',
		'Monkey',
		'Fox',
		'Penguin',
		'Koala',
	]);
  const [clickedIds, setClickedIds] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0)


	return (
		<>
			<Header />
			<Scoreboard currentScore={0} topScore={1} />
			<CardContainer prompts={prompts} />
		</>
	);
}

export default App;
