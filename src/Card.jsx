import { useState, useEffect } from "react";
import "./App.css";
import Button from "./component/Button";
import Banner from "./component/Banner";
import { Link } from "react-router-dom";

function Card({ title, desc, imgUrl, fullinfo }) {
	return (
		<div className='card'>
			<Link
				to='/movie-details'
				state={{ fullinfo }}>
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
			</Link>
		</div>
	);
}
export default Card;
