import React, { useEffect, useState } from "react";
import Card from "./Card";
import { MoviesData } from "./Data/moviedata";
import axios from "axios";
import Loader from "./component/Loader";
import ErrorComponent from "./component/Error";
import NavBar from "./component/NavBar";
import "./App.css";

const moviesDB =
	"https://api.themoviedb.org/3/discover/movie?api_key=b2defd5282fbc07c195e2c67373704cb&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2020-01-01&release_date.lte=2023-12-31";

function App() {
	const [moviesArray, setMoviesArray] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [subscribed, setSubscribed] = useState(false);

	useEffect(() => {
		async function getMovies() {
			try {
				setLoading(true);
				const response = await axios.get(moviesDB);
				console.log(response);
				console.log(response.data.results);
				setMoviesArray(response.data.results);
				setLoading(false);

				return moviesArray;
			} catch (e) {
				console.log(e);
				console.log(e.message);
				setErrorMessage(e.message);
				setLoading(false);
			}
		}

		getMovies();
	}, []);

	return (
		<>
			{loading ? (
				// <h1>Loading....</h1>
				<Loader />
			) : (
				<>
					{errorMessage ? (
						<>
							{/* <h1>{errorMessage}</h1> */}
							<ErrorComponent errormsg={errorMessage} />
						</>
					) : (
						<>
							<header>
								<NavBar />
							</header>
							<main>
								{moviesArray?.map((movie) => (
									<Card
										key={movie.id}
										title={movie.title}
										desc={movie.overview}
									/>
								))}
							</main>
						</>
					)}
				</>
			)}
		</>
	);
}
export default App;
