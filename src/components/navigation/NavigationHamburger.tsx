import React, { FC, useState } from "react";
import styles from "../../styles/navigation/navigationHamburger.module.scss";
import NavigationButtons from "./NavigationButtons";

type Props = {
	onChangeHamburgerState: () => void;
	active: boolean;
};

const NavigationHamburger: FC<Props> = ({ onChangeHamburgerState, active }) => {
	return (
		<div className={styles.hamburger}>
			<div
				className={`${styles.hamburgerLines} ${active ? styles.active : ""}`}
				onClick={onChangeHamburgerState}
			>
				<span className={`${styles.line} ${styles.line1}`}></span>
				<span className={`${styles.line} ${styles.line2}`}></span>
				<span className={`${styles.line} ${styles.line3}`}></span>
			</div>
		</div>
	);
};

export default NavigationHamburger;
