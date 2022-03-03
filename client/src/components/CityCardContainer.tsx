import { useEffect } from 'react';

const url = 'http://localhost:5000/api/v1/city';

interface CityData {
  [
}
function CityCardContainer() {
  interface City {
    _id: Number;
    city: String;
    __v: Number
  }
	useEffect(() => {
		// fetch cities and render small cards for each city.

		const fetchCityData = async (url: string): Promise<City[]> => {
			try {
				const res = await fetch(url);
				const data = await res.json();
        // do something with data
        return data
			} catch (error) {
        console.log(error)        
			}
		};

		fetchCityData(url);
	}, []);

	return <>Testing</>;
}

export default CityCardContainer;
