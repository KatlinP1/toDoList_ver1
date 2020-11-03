const express = require('express');
const workController = require('../controllers/workItems'); //.. tähendab kaks sammu tagasi
//const { post } = require('./404');
const router= express.Router();

router.get('/work', workController.getWorkItems);
router.post('/work', workController.postWorkItem);
router.post('/work/delete', workController.deleteWorkItem);

module.exports = router;