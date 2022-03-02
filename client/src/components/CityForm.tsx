import {
	Box,
	Button,
	Center,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

interface CityFormProps {
	onSubmit: (val: string) => void;
}

function CityForm({ onSubmit }: CityFormProps) {
	const [city, setCity] = useState<string>('');
	const [isError, setIsError] = useState<boolean>(false);
	const cityURL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`;
	console.log(cityURL);
	return (
		<div>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					if (city === '') {
						setIsError(true);
						return;
					} else {
						onSubmit(cityURL);
					}
				}}
			>
				<FormControl isInvalid={isError}>
					<VStack>
						<Box>
							<FormLabel htmlFor="city">City</FormLabel>
							<Input
								onChange={(e) => {
									city.length > 1 && setIsError(false);
									setCity(e.target.value);
								}}
								id="city"
								type="city"
							/>
							{!isError && (
								<FormHelperText>
									Please enter a city
								</FormHelperText>
							)}
							<VStack>
								<FormErrorMessage>
									A city is required.
								</FormErrorMessage>
							</VStack>
							<Button type="submit">Submit</Button>
						</Box>
					</VStack>
				</FormControl>
			</form>
		</div>
	);
}

export default CityForm;
