import styles from './Hero.module.css';
import heroImage from '../../../assets/jed-owen-ZdEQ_JKizsU-unsplash.jpg';
import ActionButton from '../../SharedComponents/ActionButton/ActionButton';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
	const handleButtonClick = () => {
		console.log('clicked...redirect to contact');
	};

	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		// gsap code here...
		gsap.from('.containerAniamted', {
			delay: 1,
			opacity: 0,
			duration: 3,
		});

		gsap.fromTo(
			'.backgroundAnimated img',
			{
				filter: 'brightness(0)',
			},
			{
				filter: 'brightness(0.3)',
				duration: 1.5,
			},
		);
	});

	return (
		<div className='fullWidthContainer fullHeightContainer '>
			<div className={`backgroundAnimated ${styles.heroContainer}`}>
				<img src={heroImage} alt='highway with cars' />
			</div>
			<div className={` containerAniamted ${styles.heroWrapper}`}>
				<h1>
					Eco-Friendly Homes Made from{' '}
					<span className={styles.titleHighlight}>
						Shipping Containers
					</span>{' '}
				</h1>
				<p>
					Discover modern living with our eco-friendly containers,
					designed for a greener, more efficient future.
				</p>
				<ActionButton
					textOfButton='Get in touch'
					onClick={handleButtonClick}
				/>
			</div>
		</div>
	);
};

export default Hero;
