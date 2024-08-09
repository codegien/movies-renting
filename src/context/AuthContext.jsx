import React, { createContext, useState } from "react";
import axios from "axios";
import { notify } from "../component/toastconfig";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState(null);
	const [token, setToken] = useState(localStorage.getItem("token") || null);

	const signup = async (name, email, password) => {
		console.log("signup", name, email, password);
		const payload = {
			name: name,
			email: email,
			password: password,
		};
		try {
			const response = await axios.post(
				`${API_BASE_URL}/auth/register`,
				payload
			);
			// setToken(response.data.accessToken);
			setUser(response.data.result.name);
			console.log("Data", response.data);
			// if (response.data.result.userId){
			// 	login(email, password);
			// }
		} catch (err) {
			console.log("Signup Error:", err);
		}
	};

	const login = async (email, password) => {
		setLoading(true);
		const payload = {
			email: email,
			password: password,
		};
		try {
			const response = await axios.post(`${API_BASE_URL}/auth/login`, payload);
			console.log("vvvvv", response);
			console.log("yyyyy", response.data.accessToken);
			setToken(response.data.accessToken);
			setUser(response.data.userId);
			localStorage.setItem("token", response.data.accessToken);
			setEmail(email);
			notify("Login successful");
		} catch (err) {
			console.log("Login Error:", err);
			notify(`Login Error:, ${err.response.data.message}`);
		}
		setLoading(false);
	};

	const logout = () => {
		setToken(null);
		setUser(null);
		setEmail(null);
		localStorage.removeItem("token");
		notify("logged out");
	};

	return (
		<AuthContext.Provider
			value={{ user, token, email, loading, signup, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
