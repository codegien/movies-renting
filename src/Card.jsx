import { useState, useEffect } from "react";
import "./App.css";
import Button from "./component/Button";
import Banner from "./component/Banner";

function Card({ title, desc }) {
	return (
		<div className='card'>
			<Banner />
			<div className='cardtext'>
				{/* taking care of edge cases */}
				{title ? <h1>{title}</h1> : <h1>Movie Title Here</h1>}
				<p>{desc}</p>
			</div>
			<Button />
		</div>
	);
}
export default Card;
