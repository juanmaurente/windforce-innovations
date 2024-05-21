import styles from './Contact.module.css';

const Contact = () => {
	return (
		<div className='container'>
			<div className={styles.contactContainer}>
				<div className={styles.titleSection}>
					<div className={`sectionTitle ${styles.contactTitle}`}>
						<h2>CONTACT</h2>
						<p>
							Have a question? Just drop us a line via email or
							Whatsapp. We would love to hear back from you!
						</p>
					</div>
				</div>
				<div className={styles.formDisplay}>
					<ul>
						<li>Method 1</li>
						<li>Method 2</li>
						<li>Text l</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
