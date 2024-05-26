import styles from './InfoCard.module.css';

interface Props {
	title: string;
	image: string;
	description: string;
}
const InfoCard = ({ title, image, description }: Props) => {
	return (
		<div className={`${styles.cardWrapper}`}>
			<div className={styles.cardImage}>
				<img src={image}></img>
			</div>
			<div className={styles.cardInfo}>
				<h3>{title}</h3>
				<p>{description}</p>

				<p className={styles.learnMore}>
					<a href='#contact'>Learn More</a>
				</p>
			</div>
		</div>
	);
};

export default InfoCard;
