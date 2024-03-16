const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')




//GET	/posts	Read all posts	index
router.get('/users', usersCtrl.index)



module.exports = router;
