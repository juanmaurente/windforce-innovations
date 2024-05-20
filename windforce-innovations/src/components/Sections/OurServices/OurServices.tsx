import InfoCard from '../../SharedComponents/InfoCard/InfoCard';
import styles from './OurServices.module.css';

import photo1 from '../../../assets/container-house.webp';
import photo2 from '../../../assets/electric-car.webp';
import photo3 from '../../../assets/frontal-window-container.webp';
import photo4 from '../../../assets/highway-image.webp';
import photo5 from '../../../assets/solar-panels.webp';

const OurServices = () => {
	return (
		<div className='container'>
			<div className={`sectionTitle ${styles.servicesTitle}`}>
				<h2>The Future of Shipping Containers</h2>
				<p>
					Revolutionize your shipping container experience with our
					modern solutions powered with Clean Energy Technologies.
					From solar rooftops to electric vehicle charging stations,
					we're shaping a more sustainable world.
				</p>
			</div>
			<div className={styles.gridContainer}>
				<InfoCard
					title='Eco-Friendly Homes'
					description='Discover our innovative container homes, designed for sustainable living.'
					image={photo1}
				/>
				<InfoCard
					title='Electric Vehicles'
					description='Explore our electric vehicle solutions, perfect for eco-conscious transportation.'
					image={photo2}
				/>

				<InfoCard
					title='Eco-Friendly Highways'
					description='Experience the future of transportation with our eco-friendly highway initiatives.'
					image={photo4}
				/>
				<InfoCard
					title='Solar Power Solutions'
					description='Harness the power of the sun with our solar panel installations for shipping containers.'
					image={photo5}
				/>
			</div>
		</div>
	);
};

export default OurServices;
