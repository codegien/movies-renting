import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "../styles/Navbar.module.css";
import Chevronright from "./icons/chevronright";

function NavBar() {
	const { email, token, logout } = useContext(AuthContext);
	return (
		<nav>
			<>Logo</>
			{email && <p>{email}</p>}
			<>
				{token ? (
					<p onClick={() => logout()}>Logout</p>
				) : (
					<>
						<Link to='/signup'>signup</Link>
						<Link to='/login'>login</Link>
					</>
				)}
			</>

			<ul>
				<li>
					<Link to='/'>Movies</Link>
				</li>
				<li>
					<Link to='/tv-shows'>TV Shows</Link>
				</li>
				<li>
					<Link to='/suggest-more'>
						<span>
							Suggest More
							<Chevronright />
						</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
