const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const cors = require('cors');

const locationRouter = require('./routes/locationRouter');
require('dotenv').config({ path: './.env' });

const port = 5000 || process.env.PORT;
const db = process.env.MONGO_URI;

const corsOptions = {
	origin: 'http://localhost:3000' || process.env.CORS_ORIGIN,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/v1/', locationRouter);

app.get('*', (req, res) =>
	res.status(200).send({ message: 'This is where it all starts!!!' })
);
const start = async () => {
	try {
		await connectDB(db);
		console.log('database connected...');

		app.listen(port, () => {
			console.log(`server is listening on port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
