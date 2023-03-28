const express = require('express');
const { ensureCorrectUserOrAdmin } = require('../middleware/auth');
const { BadRequestError } = require('../expressError');
const Spread = require('../models/spreads');

const router = express.Router();

router.get('/:username', ensureCorrectUserOrAdmin, async function(req, res, next) {
	try {
		const userSpreads = await Spread.get(req.params.username);
		return res.json({ userSpreads });
	} catch (err) {
		return next(err);
	}
});

router.post('/:username', ensureCorrectUserOrAdmin, async function(req, res, next) {
	try {
		const newSpread = await Spread.post(req.body);
		return res.status(201).json({ newSpread });
	} catch (err) {
		return next(err);
	}
});

router.delete('/:username/:id', ensureCorrectUserOrAdmin, async function(req, res, next) {
	try {
		await Spread.remove(req.params.id);
		return res.json({ deleted: +req.params.id });
	} catch (err) {
		return next(err);
	}
});

module.exports = router;
