import React, { useEffect, useState } from "react";
import Card from "../../Card";
import axios from "axios";
import Loader from "../../component/Loader";
import ErrorComponent from "../../component/Error";
import "../../App.css";
import HeroPage from "../HeroPage";

//old endpoints
// const moviesDB =
// 	"https://api.themoviedb.org/3/discover/movie?api_key=b2defd5282fbc07c195e2c67373704cb&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2020-01-01&release_date.lte=2023-12-31";

const moviesDB = "https://moviebe-i5ue.onrender.com/api/v1/movies/get";

function Home() {
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
							<header>{/* <NavBar /> */}</header>
							<HeroPage />
							<form onSubmit={handleSearch}>
								<input
									type='text'
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									placeholder='Search for a movie...'
								/>
								<button type='submit'>Search</button>
							</form>
							<main>
								{moviesArray?.map((movie) => (
									<Card
										key={movie.id}
										title={movie.title}
										desc={movie.overview}
										imgUrl={movie.backdrop_path}
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
export default Home;
