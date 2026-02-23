async function getImg(prompt) {
	try {
		const response = await fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=oJnG1fKVm1cBr27Usk1i24OT1zWwQveE&s=${prompt}`,
		);
		const imgData = await response.json();
		const imgSrc = imgData.data.images.original.url;
		return imgSrc;
	} catch (error) {
		console.log("Error");
	}
}

getImg('Cat')