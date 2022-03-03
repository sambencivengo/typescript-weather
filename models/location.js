const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
	city: {
		type: String,
		required: true,
		lowercase: true,
	},
});

module.exports = mongoose.model('location', locationSchema);
