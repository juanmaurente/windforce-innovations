import FAQItem from './FaqItem/FAQItem';
import styles from './FAQSection.module.css';

const FAQSection = () => {
	return (
		<div className='container'>
			<div className={styles.faqContainer}>
				<div className={styles.titleSection}>
					<div className={`sectionTitle ${styles.servicesTitle}`}>
						<h2>FAQ</h2>
						<p>
							Get answers to commonly asked questions about
							sustainable living and our eco-friendly solutions.
						</p>
					</div>
				</div>
				<div className={styles.faqDisplay}>
					<ul>
						<FAQItem
							question='What are the benefits of using shipping containers for eco-friendly homes?'
							answer='Shipping containers are durable, cost-effective, and can be repurposed, reducing waste and the need for traditional building materials. They provide a sustainable and innovative housing solution.'
						/>
						<FAQItem
							question='How does solar power enhance the sustainability of shipping container homes?'
							answer='Solar power systems installed on container homes provide renewable energy, reducing reliance on non-renewable power sources and decreasing utility bills. Solar energy contributes to a lower carbon footprint and energy independence.'
						/>
						<FAQItem
							question='Can shipping container homes be integrated with smart home technology?'
							answer='Yes, shipping container homes can be equipped with smart home devices that allow for remote control and monitoring of energy usage, security systems, and home appliances, enhancing convenience and efficiency.'
						/>
						<FAQItem
							question='Are shipping container homes suitable for all climates?'
							answer='With proper insulation and climate control systems, shipping container homes can be adapted for various climates, providing comfortable living conditions in both hot and cold environments.'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FAQSection;
