import React, { useState, useContext } from "react";
import adminImg from "./images/adminavatar.png";
import "./auth.styles.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignupPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const { signup } = useContext(AuthContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(name, email, password);
		await signup(name, email, password);
		navigate("/login");
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
					<h1>SIGN UP</h1>
					<div>
						<span>🙍🏽</span>
						<input
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className='inputfield'
						/>
					</div>
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

					<button type='submit'>Sign Up</button>
				</form>
			</div>
		</div>
	);
}

export default SignupPage;
