function Scoreboard({ currentScore, topScore }) {
	return (
		<div className="scoreboard">
			<h1>Current Score = {currentScore}</h1>
			<h1>Top Score = {topScore}</h1>
		</div>
	);
}

export default Scoreboard;
