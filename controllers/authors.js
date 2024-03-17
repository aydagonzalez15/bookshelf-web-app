const Book = require('../models/book')
const token = process.env.GOOGLE_KEY
const ROOT_URL = 'https://www.googleapis.com/';
const author = 'Stephani+Meyer'; // Specify the category you want to search for


module.exports = {
  index,

}


function index(req, res, next) {
    const options = {
      headers: {
        Authorization: `token ${token}`
      }
    };

    fetch(`${ROOT_URL}books/v1/volumes?q=inauthor:${author}&${token}`, options)
      .then(res => res.json())
      .then(userData => {
        res.render('books/', {userData, title : 'All books'});
      })
      .catch(error => {
        console.error('Error fetching books:', error);
        res.status(500).send('Error fetching books');
      });
  };
  