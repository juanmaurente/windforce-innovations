import { useForm } from 'react-hook-form';
import styles from './Contact.module.css';
import heroImage from '../../../assets/container-beach.webp';
import logo from '../../../assets/windforceLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

interface FormData {
	name: string;
	email: string;
	message: string;
}

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<div className='fullWidthContainer'>
			<div className={`backgroundAnimated ${styles.heroContainer}`}>
				<img src={heroImage} alt='highway with cars' />
			</div>
			<div className='container'>
				<div className={styles.contactContainer}>
					<div className={styles.titleSection}>
						<div className={`sectionTitle ${styles.contactTitle}`}>
							<h2>CONTACT</h2>
							<p
								id='contactText'
								className={`${styles.contactText}`}>
								Have a question? Just drop us a line via email
								or Whatsapp. <br /> We would love to hear back
								from you!
							</p>
							<ul>
								<li>
									<FontAwesomeIcon icon={faEnvelope} />{' '}
									windforce@email.com
								</li>
								<li>
									<FontAwesomeIcon icon={faPhone} /> 0404 012
									322
								</li>
							</ul>
							<p></p>
						</div>
					</div>
					<div className={styles.formDisplay}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								{...register('name', {
									required: 'Name is required',
								})}
								placeholder='NAME'
								className={styles.input}
							/>
							{errors.name && <p>Name is required.</p>}

							<input
								{...register('email', {
									required: 'Email is required',
									pattern: {
										value: /^\S+@\S+\.\S+$/,
										message: 'Please enter a valid email',
									},
								})}
								placeholder='EMAIL'
								className={styles.input}
							/>
							{errors.email && <p>{errors.email.message}</p>}

							<textarea
								{...register('message', {
									required: 'Message is required',
								})}
								placeholder='MESSAGE'
								className={styles.textarea}></textarea>
							{errors.message && <p>{errors.message.message}</p>}

							<button className={styles.sendButton} type='submit'>
								Send
							</button>
						</form>
					</div>
					<div className={styles.logo}>
						<img src={logo} alt='Logo' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
