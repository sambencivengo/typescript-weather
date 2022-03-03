const express = require('express');

const locationRouter = express.Router();

const {
	// deleteLocation,
	saveLocation,
	getLocations,
} = require('../controllers/locationController');

locationRouter
	.route('/city')
	.get(getLocations)
	.post(saveLocation)
	// .delete(deleteLocation);

module.exports = locationRouter;

