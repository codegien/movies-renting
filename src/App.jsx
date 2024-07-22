import Card from "./Card";
import { MoviesData } from "./Data/moviedata";

function App() {
	return (
		<>
			{/* <Card
				title='Avengers End Game'
				desc='Avengers End Game 2024 sit amet. Loren5 Lorem ipsum dolor sit amet.
					Loren5 Lorem ipsum dolor sit amet. Loren5'
			/> */}

			{MoviesData.map((movie) => (
				<Card
					key={movie.id}
					title={movie.title}
					desc={movie.description}
				/>
			))}
		</>
	);
}
export default App;
