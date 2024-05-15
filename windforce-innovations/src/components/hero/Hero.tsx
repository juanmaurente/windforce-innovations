import styles from './Hero.module.css';
import heroImage from '../../assets/jed-owen-ZdEQ_JKizsU-unsplash.jpg';

const Hero = () => {
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
					<p>
						Discover modern living with our eco-friendly containers,
						designed for a greener, more efficient future.
					</p>
				</h1>
			</div>
		</section>
	);
};

export default Hero;
