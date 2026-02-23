import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ImageCard from "./components/ImageCard";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<ImageCard prompt={"Cat"} />
			<ImageCard prompt={"Dog"} />
			<ImageCard prompt={"Gun"} />
      <ImageCard prompt={"bomb"} />
		</>
	);
}

export default App;
