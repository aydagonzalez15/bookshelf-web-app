
var express = require('express');
var router = express.Router();
var authorsCtrl = require('../controllers/authors')


// GET	/posts	Read all posts	index	to show all books in book/index pg
router.get('/authors', authorsCtrl.index)

module.exports = router;