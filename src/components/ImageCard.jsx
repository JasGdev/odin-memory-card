import { useState, useEffect } from "react";
import catImg from "../assets/cat.jpg";
import blackImg from '../assets/black.jpg'
import "./styles/ImageCard.css";

function ImageCard({ prompt, onClick}) {
	const [imgSrc, setImgSrc] = useState(null);

	useEffect(() => {
		async function getImg() {
			try {
				const response = await fetch(
					`https://api.giphy.com/v1/gifs/translate?api_key=oJnG1fKVm1cBr27Usk1i24OT1zWwQveE&s=${prompt}`,
				);
				const imgData = await response.json();
				const imgUrl = imgData.data.images.original.url
				setImgSrc(imgUrl);
			} catch (error) {
				console.log("Error");
			}
		}
		getImg();
	}, [prompt]);

	return (
		<>
			<div
				onClick={onClick}
				className="imageCardContainer"
			>
				<img src={imgSrc} alt="CAT" />
				<div className="imgLabel">{prompt}</div>
			</div>
		</>
	);
}

export default ImageCard;
