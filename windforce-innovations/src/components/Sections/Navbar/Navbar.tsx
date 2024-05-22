import { useRef, useState } from 'react';
import styles from './Navbar.module.css';
import Hamburguer from '../../SharedComponents/Hamburguer/Hamburguer';
import logo from '../../../assets/windforceLogo.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface Props {
	onNavigate: (sectionId: string) => void;
}

const Navbar = ({ onNavigate }: Props) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const boxRef = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		// gsap code here...
		gsap.from('.container', {
			delay: 1,
			opacity: 0,
			duration: 1,
			y: -150,
		});
	});

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div ref={boxRef} className={`container ${styles.navbarWrapper}`}>
			<div className={styles.logo}>
				<img src={logo} alt='Logo' />
			</div>

			<div className={`${styles.navbarLinks}`}>
				<ul>
					<li
						className={styles.navItem}
						onClick={() => onNavigate('home')}>
						Home
					</li>
					<li
						className={styles.navItem}
						onClick={() => onNavigate('about')}>
						About
					</li>
					<li
						className={styles.navItem}
						onClick={() => onNavigate('projects')}>
						Projects
					</li>
					<li
						className={styles.navItem}
						onClick={() => onNavigate('contact')}>
						Contact
					</li>
				</ul>
			</div>
			<Hamburguer menuOpen={menuOpen} toggleMenu={toggleMenu} />
		</div>
	);
};

export default Navbar;
