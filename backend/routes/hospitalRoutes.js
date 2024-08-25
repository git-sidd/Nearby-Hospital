const express = require('express');
const { fetchHospitals, getHospitalDetails } = require('../controllers/hospitalController');

const router = express.Router();

router.get('/', fetchHospitals);
router.get('/:id', getHospitalDetails);

module.exports = router;
