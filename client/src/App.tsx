import { useState } from 'react';
import './App.css';
import CityErrorAlert from './components/CityErrorAlert';
import CityForm from './components/CityForm';

// const weatherURL = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API key}`

function App() {
	const [isCityError, setIsCityError] = useState<boolean>(false);
	type Coord = number;
	const lat: Coord = 40.651282;
	const lng: Coord = -73.972687;

	const fetchWeatherData = async (url: string) => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	const handleFetch = async (url: string) => {
		const data = await fetchWeatherData(url);
		if (data.message === 'city not found') {
			setIsCityError(true);
			return;
		}
		console.log(data);
	};

	return (
		<div className="App">
			<CityForm onSubmit={handleFetch} />
			{isCityError && <CityErrorAlert />}
		</div>
	);
}

export default App;
