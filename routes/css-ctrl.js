
const express = require('express');
const router = express.Router();
const cssCtrl = require('../controllers/css-ctrl');

router.post('/css-ctrl', cssCtrl.rightArrow)


module.exports = router;