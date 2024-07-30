import React, { useState } from "react";
import styles from "./Hero.module.css";
import SearchIcon from "../component/icons/SearchIcon";
import ThemeToggle from "../component/useState";

const HeroPage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isActive, setIsActive] = useState(false);
	// Handler for search input changes
	// const handleSearchChange = (event) => {
	// 	setSearchTerm(event.target.value);
	// };

	const handleFocuse = () => setIsActive(true);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>MaileHereko</h1>
			<p className={styles.paragraph}>
				List of List of movies and TV Shows, I, Pramod Poudel have watched till
				date. Explore what I have watched and also feel free to make a
				suggestion. 😉
			</p>
			<div className={`${isActive ? styles.active : styles.scontainer}`}>
				<SearchIcon />
				<input
					type='text'
					className={styles.input}
					placeholder='Search movies or TV shows...'
					onChange={() => {
						setIsActive(true);
					}}
					onBlur={() => {
						setIsActive(false);
					}}
				/>
			</div>

			<ThemeToggle />
		</div>
	);
};

export default HeroPage;
