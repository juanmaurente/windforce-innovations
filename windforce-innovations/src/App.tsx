import './App.css';
import Hero from './components/Sections/Hero/Hero';
import Navbar from './components/Sections/Navbar/Navbar';
import OurServices from './components/Sections/OurServices/OurServices';

function App() {
	return (
		<>
			<Navbar
				onNavigate={function (sectionId: string): void {
					throw new Error('Function not implemented.');
				}}
			/>
			<Hero />
			<OurServices />
		</>
	);
}

export default App;
