// const {
// 	deleteLocation,
// 	saveLocation,
// 	getLocations,
// } = require('../controllers/locationController');

const Location = require('../models/location');
const express = require('express');

const saveLocation = async (req, res) => {
	try {
		const { city } = req.body;
		console.log('hitting route');

		res.status(202).json(city);
	} catch (error) {
		console.log(error);
	}
};

const getLocations = async (req, res) => {
	try {
		const locations = await Location.find({});
		res.status(202).json(locations);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { saveLocation, getLocations };
