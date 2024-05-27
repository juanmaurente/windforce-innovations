import './App.css';
import FAQSection from './components/Sections/FaqSection/FAQSection';
import Hero from './components/Sections/Hero/Hero';
import Navbar from './components/Sections/Navbar/Navbar';
import OurServices from './components/Sections/OurServices/OurServices';
import Contact from './components/Sections/Contact/Contact';

function App() {
	const handleNavigate = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<>
			<Navbar onNavigate={handleNavigate} />
			<div id='home'>
				<Hero />
			</div>
			<div id='about'>
				<OurServices onNavigate={handleNavigate} />
			</div>
			<div id='projects'>
				<FAQSection />
			</div>
			<div id='contact'>
				<Contact />
			</div>
		</>
	);
}

export default App;
