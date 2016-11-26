import express from 'express';
const router = express.Router();
import Countries from '../data/countries';

router.get('/', (req, res) => {
	res.json(Countries);
});

export default router;
