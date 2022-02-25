import './App.css';

// const weatherURL = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API key}`

function App() {
	const weatherKey = process.env.REACT_APP_WEATHER_KEY;
	type Coord = number;

	const lat: Coord = 40.651282;
	const lng: Coord = -73.972687;

	const staticURL: string = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherKey}`;

	const fetchWeatherData = async (url: string) => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	fetchWeatherData(staticURL);

	return (
		<div className="App">
			<header className="App-header">Weather App</header>
		</div>
	);
}

export default App;
