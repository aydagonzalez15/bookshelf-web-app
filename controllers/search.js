const {Book} = require('../models/book')
const token = process.env.GOOGLE_KEY
const ROOT_URL = 'https://www.googleapis.com/';
const category = 'fiction'; // Specify the category you want to search for

module.exports = {
    index
}

function index(req, res, next) {
    const bookTitle = req.query.title
    console.log (`title: ${bookTitle}`)
    const author = req.query.author
    const options = {
      headers: {
        Authorization: `token ${token}`
      }
    };
    fetch(`${ROOT_URL}books/v1/volumes?q=${bookTitle}&${token}`, options)
      .then(res => res.json())
      .then(userData => {
        res.render('books/', {userData, title : 'Books found in Search'});
      })
      .catch(error => {
        console.error('Error fetching books:', error);
        res.status(500).send('Error fetching books');
      });
  };
  
