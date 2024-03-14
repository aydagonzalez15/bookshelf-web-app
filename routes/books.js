var express = require('express');
var router = express.Router();
var booksCtrl = require('../controllers/books')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('');
// });


router.get('/', booksCtrl.index);


module.exports = router;
