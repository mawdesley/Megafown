const express = require('express');
const router = express.Router();
const castController = require('../controllers/castController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get("/", (req, res) => {
	res.render('layout', {
		title: "Megafown"
	});
});

router.get("/listen", (req, res) => {
	res.render('listen', {
		title: "Listen"
	});
});

router.get("/speak", (req, res) => {
	res.render('speak', {
		title: "Speak"
	});
});

router.post('/api/new-cast', catchErrors(castController.createCast));
router.post('/api/end-cast', catchErrors(castController.endCast));
router.post('/api/nearby-casts', catchErrors(castController.nearbyCasts));

module.exports = router;