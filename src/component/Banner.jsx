import React from "react";
import bannerImage from "../assets/images/banner.jpg";
import styles from "../styles/Banner.module.css";

// const style = {
// 	margin: "0 auto ",
// 	width: "60px",
// 	height: "80px",
// 	backgroundColor: "yellow",
// };
function Banner() {
	return (
		<div className={styles.ban}>
			<img
				src={bannerImage}
				alt='banner'
				width={100}
			/>
		</div>
	);
}

export default Banner;
