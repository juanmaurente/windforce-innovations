import InfoCard from '../../SharedComponents/InfoCard/InfoCard';
import styles from './OurServices.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import photo1 from '../../../assets/container-house.webp';
import photo2 from '../../../assets/electric-car.webp';
import photo4 from '../../../assets/highway-image.webp';
import photo5 from '../../../assets/solar-panels.webp';

const OurServices = () => {
	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		gsap.from('.sectionTitle', {
			scrollTrigger: {
				trigger: '.sectionTitle',
				start: 'top 60%',
				end: 'top 100px',
				markers: false,
			},
			y: -80,
			duration: 2,
			opacity: 0,
		});

		gsap.from('.gridContainer', {
			scrollTrigger: {
				trigger: '.gridContainer',
				start: 'top 80%',
				end: 'top 100px',
				markers: false,
			},
			delay: 1,
			duration: 2,
			opacity: 0,
		});

		gsap.from('.gridItem', {
			scrollTrigger: {
				trigger: '.gridItem',
				start: 'top 80%',
				end: 'top 100px',
				markers: false,
			},
			y: -20,
			x: -20,
			stagger: 0.5,
			duration: 1,
			opacity: 0,
		});
	});

	return (
		<div className='servicesContainer'>
			<div className='container'>
				<div className={`sectionTitle ${styles.servicesTitle}`}>
					<h2>The Future of Shipping Containers</h2>
					<p>
						Revolutionize your shipping container experience with
						our modern solutions powered with Clean Energy
						Technologies.
						<br />
						From solar rooftops to electric vehicle charging
						stations, we're shaping a more sustainable world.
					</p>
				</div>
				<div className={`gridContainer ${styles.gridContainer}`}>
					<div className='gridItem'>
						<InfoCard
							title='Eco-Friendly Homes'
							description='Discover our innovative container homes, designed for sustainable living.'
							image={photo1}
						/>
					</div>
					<div className='gridItem'>
						<InfoCard
							title='Electric Vehicles'
							description='Explore our electric vehicle solutions, perfect for eco-conscious transportation.'
							image={photo2}
						/>
					</div>
					<div className='gridItem'>
						<InfoCard
							title='Eco-Friendly Highways'
							description='Experience the future of transportation with our eco-friendly highway initiatives.'
							image={photo4}
						/>
					</div>
					<div className='gridItem'>
						<InfoCard
							title='Solar Power Solutions'
							description='Harness the power of the sun with our solar panel installations for shipping containers.'
							image={photo5}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurServices;
