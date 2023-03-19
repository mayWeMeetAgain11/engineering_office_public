const express = require('express');

const router = express.Router();

const ownerController = require('../controllers/ownerController');

router.post('/owner-login', ownerController.ownerLogin);

router.post('/owner/search', ownerController.ownerSearch);

module.exports = router