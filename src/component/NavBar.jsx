import React from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.module.css";
import Chevronright from "./icons/chevronright";

function NavBar() {
	return (
		<nav>
			<>Logo</>
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
