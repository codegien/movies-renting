import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/homepage/home.page";
import TVShows from "./pages/tvshows/tvshows.page";
import SuggestMore from "./pages/suggestmore/suggestmore.page";
import MoviesDetails from "./pages/moviedetail/moviedetail.page";
import SignupPage from "./pages/authpages/signuppage";
import NavBar from "./component/NavBar";
import ErrorComponent from "./component/Error";
import LoginPage from "./pages/authpages/loginpage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./privateroute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<AuthProvider>
			<Router>
				<NavBar />
				<Routes>
					<Route
						path='/'
						element={
							<PrivateRoute>
								<Home />
							</PrivateRoute>
						}
						errorElement={<ErrorComponent />}
					/>
					<Route
						path='/tv-shows'
						element={
							<PrivateRoute>
								<TVShows />
							</PrivateRoute>
						}
						errorElement={<ErrorComponent />}
					/>
					<Route
						path='/suggest-more'
						element={
							<PrivateRoute>
								<SuggestMore />
							</PrivateRoute>
						}
						errorElement={<ErrorComponent />}
					/>
					<Route
						path='/movie-details'
						element={
							<PrivateRoute>
								<MoviesDetails />
							</PrivateRoute>
						}
						errorElement={<ErrorComponent />}
					/>
					<Route
						path='/signup'
						element={<SignupPage />}
						errorElement={<ErrorComponent />}
					/>
					<Route
						path='/login'
						element={<LoginPage />}
						errorElement={<ErrorComponent />}
					/>
				</Routes>
			</Router>
			<ToastContainer />
		</AuthProvider>
	);
}
export default App;
