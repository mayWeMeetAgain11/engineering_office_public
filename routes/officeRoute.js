const express = require('express');

const router = express.Router();

const officeController = require('../controllers/officeController');

router.post('/office/store', officeController.storeOffice);

router.get('/offices', officeController.getAllOffice);

// router.post('/offices/search', officeController.searchOffice);

router.get('/test', officeController.fetch);

module.exports = router;