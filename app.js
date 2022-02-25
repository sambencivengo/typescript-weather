const express = require('express');
const app = express();

const port = 5000 || process.env.PORT;

const start = async () => {
	try {
		// await DB connect when the DB is set up
		app.listen(port, () => {
			console.log(`server is listening on port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
