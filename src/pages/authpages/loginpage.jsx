import React, { useState, useContext } from "react";
import adminImg from "./images/adminavatar.png";
import "./auth.styles.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../component/Loader";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { login, loading } = useContext(AuthContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
		navigate("/");
	};

	return (
		<div className='authcontainer'>
			<div>
				<img
					src={adminImg}
					alt='banner'
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = adminImg;
					}}
				/>
			</div>
			<div>
				<form onSubmit={handleSubmit}>
					<h1>LOGIN</h1>

					<div>
						<span>✉️</span>
						<input
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className='inputfield'
						/>
					</div>
					<div>
						<span>🔑</span>
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							className='inputfield'
						/>
					</div>
					{loading ? <Loader /> : <button type='submit'>Login</button>}
				</form>
			</div>
		</div>
	);
}

export default LoginPage;
