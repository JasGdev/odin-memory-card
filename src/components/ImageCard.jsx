import { useState, useEffect } from "react";

function ImageCard({ prompt }) {
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

	return <img src={imgSrc} alt="CAT" />;
}

export default ImageCard;
