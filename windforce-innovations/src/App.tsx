import './App.css';
import FAQSection from './components/Sections/FaqSection/FAQSection';
import Hero from './components/Sections/Hero/Hero';
import Navbar from './components/Sections/Navbar/Navbar';
import OurServices from './components/Sections/OurServices/OurServices';
import Contact from './components/Sections/Contact/Contact';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<OurServices />
			<FAQSection />
			<Contact />
		</>
	);
}

export default App;
