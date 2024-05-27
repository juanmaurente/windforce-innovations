import styles from './InfoCard.module.css';

interface Props {
	title: string;
	image: string;
	description: string;
	index: number; // Añadir className como prop opcional
	onNavigate: (sectionId: string) => void; // Añadir onNavigate como prop
}
const InfoCard = ({ title, image, description, index, onNavigate }: Props) => {
	const isReversed = index % 2 === 1; // Determina si es el segundo o cuarto (y así sucesivamente)

	const handleLearnMoreClick = () => {
		onNavigate('contact');
	};

	return (
		<div
			className={`${styles.cardWrapper} ${
				isReversed ? styles.cardWrapperReversed : ''
			}`}>
			<div className={styles.cardImage}>
				<img src={image} alt={title} />
			</div>
			<div className={styles.cardInfo}>
				<h3>{title}</h3>
				<p>{description}</p>
				<p className={styles.learnMore}>
					<a onClick={handleLearnMoreClick}>Learn More</a>
				</p>
			</div>
		</div>
	);
};

export default InfoCard;
