var express = require('express');
var router = express.Router();
var booksCtrl = require('../controllers/books')


//All posts start with /books
// const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bookshelf' });
});





module.exports = router;
