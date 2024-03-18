const {Book} = require('../models/book')
const token = process.env.GOOGLE_KEY
const ROOT_URL = 'https://www.googleapis.com/books/v1/volumes';
const author = 'stephanue+Meyer'; // Specify the category you want to search for


module.exports = {
  index,

}


function index(req, res, next) {
    const options = {
      headers: {
        Authorization: `token ${token}`
      }
    };

    fetch(`${ROOT_URL}?q=${author}&key=${token}`, options)
      .then(res => res.json())
      .then(userData => {
        res.render('books/', {userData, title : 'All books'});
      })
      .catch(error => {
        console.error('error getting your books, look at your code Ayda:', error);
        res.status(500).send('Error fetching books');
      });
  };
  