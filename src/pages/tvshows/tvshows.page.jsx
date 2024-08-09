import React, { useEffect, useState } from "react";
import Card from "../../Card";
import axios from "axios";
import Loader from "../../component/Loader";
import ErrorComponent from "../../component/Error";
import "../../App.css";
import HeroPage from "../HeroPage";

const moviesDB = "https://moviebe-i5ue.onrender.com/api/v1/movies/get";

function TVShows() {
	const [moviesArray, setMoviesArray] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [query, setQuery] = useState("");

	useEffect(() => {
		async function getMovies() {
			try {
				setLoading(true);
				const response = await axios.get(moviesDB);
				console.log(response);
				console.log(response.data.data);
				setMoviesArray(response.data.data);
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

	const handleSearch = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const response = await axios.get(`${moviesDB}?title=${query}`);
			console.log(response);
			console.log(response.data.data);
			setMoviesArray(response.data.data);
			setLoading(false);

			return moviesArray;
		} catch (e) {
			console.log(e);
			console.log(e.message);
			setErrorMessage(e.message);
			setLoading(false);
		}
	};

	return (
		<>
			<h1>TV Show</h1>
			<form onSubmit={handleSearch}>
				<input
					type='text'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder='Search for a movie...'
				/>
				<button type='submit'>Search</button>
			</form>
			<>
				{loading ? (
					<Loader />
				) : (
					<>
						{errorMessage ? (
							<ErrorComponent errormsg={errorMessage} />
						) : (
							<main>
								{moviesArray?.map((movie) => (
									<Card
										key={movie.id}
										title={movie.title}
										desc={movie.overview}
										imgUrl={movie.backdrop_path}
										fullinfo={movie}
									/>
								))}
							</main>
						)}
					</>
				)}
			</>
		</>
	);
}

export default TVShows;
