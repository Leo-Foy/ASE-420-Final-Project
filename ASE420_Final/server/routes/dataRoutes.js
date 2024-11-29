const express = require('express');
const dataController = require('../controllers/dataController');
const router = express.Router();

router.get('/data', dataController.getAllData); // GET all data
router.post('/data', dataController.addData);  // POST new data

module.exports = router;