const express = require('express');
const router = express.Router();
// const passport = require('passport');

const userController = require('../controllers/user');


router.post('/addproject', userController.addProject);
router.post('/addstock', userController.addStock);
router.post('/addenteries', userController.addEnteries);
module.exports = router;