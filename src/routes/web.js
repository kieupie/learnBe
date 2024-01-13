const { getHomePage, getSample } = require('../controllers/home.controller');


const express = require('express');
const router = express.Router();


router.get('/', getHomePage)
router.get('/sample', getSample)


module.exports = router;