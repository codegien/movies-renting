import React, { useEffect, useState } from "react";
import Card from "./Card";
import { MoviesData } from "./Data/moviedata";
import axios from "axios";

const moviesDB =
	"https://api.themoviedb.org/3/discover/movie?api_key=b2defd5282fbc07c195e2c67373704cb&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2020-01-01&release_date.lte=2023-12-31";

function App() {
	const [moviesArray, setMoviesArray] = useState([]);
	useEffect(() => {
		async function getMovies() {
			try {
				const response = await axios.get(moviesDB);
				console.log(response);
				console.log(response.data.results);
				setMoviesArray(response.data.results);

				return moviesArray;
			} catch (e) {
				console.log(e);
			}
		}

		getMovies();
	}, []);

	return (
		<>
			{/* <Card
				title='Avengers End Game'
				desc='Avengers End Game 2024 sit amet. Loren5 Lorem ipsum dolor sit amet.
					Loren5 Lorem ipsum dolor sit amet. Loren5'
			/> */}

			{moviesArray?.map((movie) => (
				<Card
					key={movie.id}
					title={movie.title}
					desc={movie.overview}
				/>
			))}
		</>
	);
}
export default App;
