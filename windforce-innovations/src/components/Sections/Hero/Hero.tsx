import styles from './Hero.module.css';
import heroImage from '../../../assets/jed-owen-ZdEQ_JKizsU-unsplash.jpg';
import ActionButton from '../../SharedComponents/ActionButton/ActionButton';

const Hero = () => {
	const handleButtonClick = () => {
		console.log('clicked...redirect to contact');
	};

	return (
		<section id='Home' className='fullWidthContainer fullHeightContainer '>
			<div className={styles.heroContainer}>
				<img src={heroImage} alt='highway with cars' />
			</div>
			<div className={styles.heroWrapper}>
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
		</section>
	);
};

export default Hero;
