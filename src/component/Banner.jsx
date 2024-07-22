import React from "react";
import bannerImage from "../assets/images/banner.jpg";
import styles from "../styles/Banner.module.css";

function Banner() {
	return (
		<div className={styles.banner_container}>
			<img
				src={bannerImage}
				alt='banner'
				className={styles.img_banner}
			/>
		</div>
	);
}

export default Banner;
