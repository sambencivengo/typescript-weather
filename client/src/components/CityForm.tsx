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

interface CityFormProps {
	onChange: (val: string) => void;
}
function CityForm({ onChange }: CityFormProps) {
	return (
		<div>
			<FormControl>
				<VStack>
					<Box>
						<FormLabel htmlFor="city">City</FormLabel>
						<Input
							onChange={(e) => {
								onChange(e.target.value);
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

export default CityForm;
