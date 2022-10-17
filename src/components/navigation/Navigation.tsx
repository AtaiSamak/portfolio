import React from "react";
import styles from "../../styles/navigation/navigation.module.scss";
import globalStyles from "../../styles/global.module.scss";
import NavigationButtons from "./NavigationButtons";

const Navigation = () => {
	return (
		<nav className={styles.navbar}>
			<div className={globalStyles.container}>
				<div className={styles.navbarWrapper}>
					<h1 className={styles.title}>AtaiSamak</h1>
					<NavigationButtons />
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
