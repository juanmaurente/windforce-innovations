import { useEffect, useRef } from 'react';
import styles from './FullPageMenu.module.css';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';

interface Props {
	menuOpen: boolean;
	onNavigate: (sectionId: string) => void;
	toggleMenu: () => void;
}

const FullPageMenu = ({ menuOpen, onNavigate, toggleMenu }: Props) => {
	const handleNavigation = (sectionId: string) => {
		onNavigate(sectionId);
		toggleMenu();
	};

	return (
		<div className={menuOpen ? styles.menuInner : styles.menuInnerClosed}>
			<ul>
				<li
					className={styles.mainMenuItem}
					onClick={() => handleNavigation('home')}>
					Home
				</li>
				<li
					className={styles.mainMenuItem}
					onClick={() => handleNavigation('about')}>
					Services
				</li>
				<li
					className={styles.mainMenuItem}
					onClick={() => handleNavigation('projects')}>
					FAQ
				</li>
				<li
					className={styles.mainMenuItem}
					onClick={() => handleNavigation('contact')}>
					Contact
				</li>
			</ul>
		</div>
	);
};

export default FullPageMenu;
