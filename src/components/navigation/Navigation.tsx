import React, { useState } from "react";
import styles from "../../styles/navigation/navigation.module.scss";
import globalStyles from "../../styles/global.module.scss";
import NavigationButtons from "./NavigationButtons";
import NavigationHamburger from "./NavigationHamburger";
import useMobileDetect from "../../hooks/useMobileDetect";

const Navigation = () => {
	const isMobile = useMobileDetect();
	const [active, setActive] = useState(false);

	const handleChangeHamburgerState = () => setActive(!active);

	return (
		<nav className={`${styles.navbar} ${active ? styles.active : ""}`}>
			<div className={globalStyles.container}>
				<div className={styles.navbarWrapper}>
					<h1 className={styles.title}>AtaiSamak</h1>
					{!isMobile && <NavigationButtons />}
					<NavigationHamburger
						onChangeHamburgerState={handleChangeHamburgerState}
						active={active}
					/>
				</div>
				<div className={styles.menuItemsWrapper}>
					<NavigationButtons />
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
