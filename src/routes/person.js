let express = require('express');
let router = express.Router();

//person?name=thomas
router.get('/person', (req, res) => {
	if (req.query.name) {
		res.send(`You have requested a person ${req.query.name}`);
	} else {
		res.send('You have requested a person');
	}
});

// Params property on the request object
// person/thomas
router.get('/person/:name', (req, res) => {
	res.send(`You have requested a person ${req.params.name}`);
});

module.exports = router;
