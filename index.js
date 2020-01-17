let mongoose = require('mongoose');
let express = require('express');
let app = express();
let personRoute = require('./src/routes/person');
let customerRoute = require('./src/routes/customer');
let path = require('path');
let bodyParser = require('body-parser');
const { PORT = 8000, DB_LINK } = process.env;

app.use(bodyParser.json());
app.use(customerRoute);
app.use(personRoute);

//connect to database
mongoose
	.connect(DB_LINK, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('connected to db'))
	.catch(err => console.log(err.message));

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
	res.status(404).send('404 not found error');
});

// Handler for Error 500
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.sendFile(path.join(__dirname, '../public/500.html'));
});

app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
