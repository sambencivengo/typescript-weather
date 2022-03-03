import { Box, Center, Flex, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import CityCardContainer from './components/CityCardContainer';
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
		setIsCityError(false);
	};

	return (
		<div className="App">
			<Flex>
				<Box position="fixed" left="0" w="350px" h="100%" bg="grey">
					<CityForm onSubmit={handleFetch} />
					{isCityError && <CityErrorAlert />}
					<CityCardContainer />
				</Box>
				<Box
					flex="1"
					marginLeft="350px"
					h="100vh"
					bg="blue"
					padding="20px"
				>
					DISPLAY SELECTED CITY WEATHER ON SIDEBAR CLICK
				</Box>
			</Flex>
		</div>
	);
}

export default App;
