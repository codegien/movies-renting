import bannerImage from "../assets/images/banner.jpg";
import styles from "../styles/Banner.module.css";
import { APIIMG_BASE_URL } from "../Data/config";
// import { url } from "inspector";

function Banner({ imagePath }) {
	const bannerImgUrl = `${APIIMG_BASE_URL}${imagePath}`;
	return (
		<div className={styles.banner_container}>
			<img
				src={bannerImgUrl || bannerImage}
				alt='banner'
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = bannerImage;
				}}
				className={styles.img_banner}
			/>
		</div>
	);
}

export default Banner;
