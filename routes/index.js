var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();
// var booksCtrl = require('../controllers/books')
const passport = require('passport');


//uncomment below if you dont have fetch in node
// const fetch = require('node-fetch')


const token = process.env.GOOGLE_KEY
const ROOT_URL = 'https://books.google.com/';


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Bookshelf' });
// });



router.get('/', function(req, res, next) {
const options = {
  headers: {
    Authorization: `token ${token}`
  }

}
fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&${token}`, options)
.then(res => res.json())
.then(userData => {
  res.render('index', {userData, title: 'Bookshelf'} );
})

});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bookshelf' });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
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
