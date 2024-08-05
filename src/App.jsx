import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/homepage/home.page";
import TVShows from "./pages/tvshows/tvshows.page";
import SuggestMore from "./pages/suggestmore/suggestmore.page";
import NavBar from "./component/NavBar";
import ErrorComponent from "./component/Error";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
					errorElement={<ErrorComponent />}
				/>
				<Route
					path='/tv-shows'
					element={<TVShows />}
					errorElement={<ErrorComponent />}
				/>
				<Route
					path='/suggest-more'
					element={<SuggestMore />}
					errorElement={<ErrorComponent />}
				/>
			</Routes>
		</Router>
	);
}
export default App;
