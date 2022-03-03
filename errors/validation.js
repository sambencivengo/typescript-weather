const handleValidationError = (err) => {
	const errors = {
		city: '',
	};

	if (err.code === 11000) {
		if (err.keyValue.city) {
			errors.city = 'You have already saved that city...';
		}
		return errors;
	}
};

module.exports = handleValidationError;
