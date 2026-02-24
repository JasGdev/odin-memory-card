import { useState } from 'react';
import ImageCard from './ImageCard';
import './styles/CardContainer.css';

function CardContainer({
	prompts,
	clickedIds,
	setClickedIds,
}) {
	function handleClick(id) {
		setClickedIds((prev) => {
			const newClickedIds = prev.slice();
			newClickedIds.push(id);
			return newClickedIds;
		});
		console.log(clickedIds);
	}

	return (
		<div className="CardContainer">
			{prompts.map((animal) => {
				return (
					<ImageCard
						key={animal}
						prompt={animal}
						onClick={() => {
							console.log('clicked');
							handleClick(animal);
						}}
					/>
				);
			})}
		</div>
	);
}

export default CardContainer;
