import React, { useEffect } from "react";
import styles from "./detail.module.css";
import banner from "./images/bann2.jpg";
import { useLocation, useParams } from "react-router-dom";
import { APIIMG_BASE_URL } from "../../Data/config";

function MoviesDetails() {
	const [selectedInfo, setSelectedInfo] = React.useState(null);
	const location = useLocation();
	const { fullinfo } = location.state;
	console.log(fullinfo);
	const imagePath = fullinfo.backdrop_path;
	const posterPath = fullinfo.poster_path;
	const bannerImgUrl = `${APIIMG_BASE_URL}${imagePath}`;
	const posterImgUrl = `${APIIMG_BASE_URL}${posterPath}`;

	return (
		<>
			<div className={styles.detailsbanner}>
				<img
					src={bannerImgUrl || banner}
					// src={banner}
					alt='banner'
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = banner;
					}}
					className={styles.cover}
				/>
			</div>
			<div className={styles.legendwrapper}>
				<div className={styles.poster}>
					<img
						src={posterImgUrl || banner}
						// src={banner}
						alt='banner'
						onError={(e) => {
							e.target.onerror = null;
							e.target.src = banner;
						}}
						className={styles.posterimg}
					/>
				</div>
				<div className={styles.details}>
					<h2>Movie Theme Here</h2>
					<div>
						<p>{fullinfo.overview}</p>
					</div>
					<div>
						<span>8.5</span>
					</div>
					<div className={styles.labelwrap}>
						<p className={styles.label}>Type</p>
						<p className={styles.value}>Movies</p>
					</div>
					<div className={styles.labelwrap}>
						<p className={styles.label}>Release Date</p>
						<p className={styles.value}>02/03/2024</p>
					</div>
					<div className={styles.labelwrap}>
						<p className={styles.label}>Run Time</p>
						<p className={styles.value}>50min</p>
					</div>
					<div className={styles.labelwrap}>
						<p className={styles.label}>Genre</p>
						<p className={styles.value}>Adventure, Science Fiction, Action</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default MoviesDetails;
