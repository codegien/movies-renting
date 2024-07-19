import { useState, useEffect } from "react";

import "./App.css";
import Button from "./component/Button";
import Banner from "./component/Banner";

function App() {
	return (
		<div className='card'>
			<Banner />
			<h1>Heading</h1>
			<Button />
		</div>
	);
}
export default App;

// const [count, setCount] = useState(0);
// const [isLoading, setIsLoading] = useState(true);
// useEffect(() => {
// 	setTimeout(() => {
// 		console.log("Loading");
// 		setIsLoading(false);
// 	}, 2000);
// }, []);

// return <>{!isLoading ? <h1>My react App</h1> : <h1>Loading...</h1>}</>;
