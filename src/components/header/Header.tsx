import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/header/header.module.scss";
import globalStyles from "../../styles/global.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={globalStyles.container}>
				<div className={styles.headerWrapper}>
					<h1 className={styles.title}>I am Atai Samak</h1>
					<h2 className={styles.typewriter}>Frontend developer</h2>
				</div>
				<div className={styles.headerBackground}></div>
			</div>
		</header>
	);
};

export default Header;
