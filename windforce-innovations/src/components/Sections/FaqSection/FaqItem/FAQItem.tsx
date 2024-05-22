import React, { useState } from 'react';
import styles from './FAQItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface Props {
	question: string;
	answer: string;
}

const FAQItem = ({ question, answer }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAnswer = () => {
		setIsOpen(!isOpen);
	};

	return (
		<li className={styles.faqItem}>
			<div
				className={`${styles.faqQuestion} ${
					isOpen ? styles.active : ''
				}`}
				onClick={toggleAnswer}>
				<span>{question}</span>
				<FontAwesomeIcon
					icon={faChevronDown}
					className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`}
				/>
			</div>
			<p className={`${styles.faqAnswer} ${isOpen ? styles.show : ''}`}>
				{answer}
			</p>
		</li>
	);
};

export default FAQItem;
