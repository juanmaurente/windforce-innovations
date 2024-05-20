import './App.css';
import FAQSection from './components/Sections/FaqSection/FAQSection';
import Hero from './components/Sections/Hero/Hero';
import Navbar from './components/Sections/Navbar/Navbar';
import OurServices from './components/Sections/OurServices/OurServices';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<OurServices />
			<FAQSection />
		</>
	);
}

export default App;
