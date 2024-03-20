
const express = require('express');
const router = express.Router();
const searchCtrl = require('../controllers/search');

// GET	/posts	Read all posts	index	to show all books in book/index pg
router.get('/search', searchCtrl.index)



module.exports = router;



