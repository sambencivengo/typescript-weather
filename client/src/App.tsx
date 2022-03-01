import { useState } from 'react';
import './App.css';
import CityForm from './components/CityForm';

// const weatherURL = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API key}`

function App() {
	const [formInput, setFormInput] = useState<string | null>(null);
	const weatherKey = process.env.REACT_APP_WEATHER_KEY;

	const handleInput = (val: string): void => {
		setFormInput(val);
	};
	type Coord = number;

	const lat: Coord = 40.651282;
	const lng: Coord = -73.972687;
	const city: string = 'Los angeles';
	const latLngURL: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherKey}`;
	const cityURL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`;

	const fetchWeatherData = async (url: string) => {
		try {
			const res = await fetch(cityURL);
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	fetchWeatherData(latLngURL);

	return (
		<div className="App">
			<CityForm onChange={handleInput} />
		</div>
	);
}

export default App;
