var express = require('express');
var router = express.Router();
var booksCtrl = require('../controllers/books')



//all paths start with books

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('');
// });


// GET	/posts/new	Return view (form) to add a new post	new
router.get('/new', booksCtrl.new);

//POST	/posts	Create a new post	create	
router.post('/', booksCtrl.create)

router.get('/', booksCtrl.show)



module.exports = router;
