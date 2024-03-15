var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();
// var booksCtrl = require('../controllers/books')
const passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bookshelf' });
});


// Google OAuth login route
router.get('/auth/google', passport.authenticate(// Which passport strategy is being used?
  'google',
  {// Requesting the user's profile and email
    scope: ['profile', 'email'],  // prompt: "select_account"
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/books',
    failureRedirect: '/books'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/books');
  });
});




module.exports = router;
