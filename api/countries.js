import express from 'express';
const router = express.Router();
import Countries from '../data/countries';

router.get('/', (req, res) => {
	res.json({ countries: Countries });
});

export default router;
