import {
	Box,
	Button,
	Center,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';

// const weatherURL = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API key}`

function App() {
	const [formInput, setFormInput] = useState<string | null>(null);
	const weatherKey = process.env.REACT_APP_WEATHER_KEY;

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
			<FormControl>
				<VStack>
					<Box>
						<FormLabel htmlFor="city">City</FormLabel>
						<Input
							onChange={(e) => {
								setFormInput(e.target.value);
							}}
							id="city"
							type="city"
						/>
						<FormHelperText>Please enter a city</FormHelperText>
						<Button onClick={() => {}}>Submit</Button>
					</Box>
				</VStack>
			</FormControl>
		</div>
	);
}

export default App;
