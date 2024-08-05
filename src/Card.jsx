import { useState, useEffect } from "react";
import "./App.css";
import Button from "./component/Button";
import Banner from "./component/Banner";

function Card({ title, desc, imgUrl }) {
	return (
		<div className='card'>
			<Banner imagePath={imgUrl} />
			<div className='cardtext'>
				{/* taking care of edge cases */}
				{title ? <h1>{title}</h1> : <h1>Movie Title Here</h1>}
				{desc ? (
					<p>{desc}</p>
				) : (
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
						enim!
					</p>
				)}
			</div>
			<Button />
		</div>
	);
}
export default Card;
