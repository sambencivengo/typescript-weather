// const {
// 	deleteLocation,
// 	saveLocation,
// 	getLocations,
// } = require('../controllers/locationController');

const Location = require('../models/location');
const express = require('express');
const handleValidationError = require('../errors/validation');

const saveLocation = async (req, res) => {
	try {
		const { city } = req.body;
		const newLocation = await Location.create({ city });
		res.status(201).json(newLocation);
	} catch (error) {
		const errors = handleValidationError(error);
		res.status(400).json({ errors });
	}
};

const getLocations = async (req, res) => {
	try {
		console.log('route hit');
		const locations = await Location.find({});
		res.status(202).json(locations);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { saveLocation, getLocations };
