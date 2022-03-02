import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	CloseButton,
} from '@chakra-ui/react';

function CityErrorAlert() {
	return (
		<div>
			<Alert status="error">
				<AlertIcon />
				<AlertTitle mr={2}>Error!</AlertTitle>
				<AlertDescription>
					That city is invalid or the API had trouble finding your
					data, please try again.
				</AlertDescription>
				<CloseButton position="absolute" right="8px" top="8px" />
			</Alert>
		</div>
	);
}

export default CityErrorAlert;
