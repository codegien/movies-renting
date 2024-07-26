import React from "react";

import "../styles/Navbar.module.css";
import Chevronright from "./icons/chevronright";

function NavBar() {
	return (
		<nav>
			<>Logo</>
			<ul>
				<li>Movies</li>
				<li>TV Shows</li>
				<li>
					<span>
						Suggest More
						<Chevronright />
					</span>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
