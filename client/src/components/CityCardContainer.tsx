import { VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { convertToObject } from 'typescript';
import CityCardItem from './CityCardItem';

const url = 'http://localhost:5000/api/v1/city';
interface City {
	_id: Number;
	city: String;
	__v: Number;
}

function CityCardContainer() {
	const [cityData, setCityData] = useState<[] | null>(null);
	useEffect(() => {
		const fetchCityData = async (url: string): Promise<City[] | null> => {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setCityData(data);
			} catch (error) {
				console.log(error);
			}
			return null;
		};

		fetchCityData(url);
	}, []);

	return (
		<VStack>
			{cityData?.map((city) => {
				return <CityCardItem />;
			})}
		</VStack>
	);
}

export default CityCardContainer;
