var express = require('express');
var router = express.Router();
var booksCtrl = require('../controllers/books')

//ALL PARTH START WITH /books

//GET	/posts/:id	Read a specific post	show	for more details about the books
router.get('/:id', booksCtrl.show)

//POST	/posts	Create a new post	create	Yes
router.post('/', booksCtrl.create)


// GET	/posts	Read all posts	index	to show all books in book/index pg
router.get('/', booksCtrl.index)

//DELETE		/comments/:id	
router.delete('/comments/:id', booksCtrl.delete)

module.exports = router;
