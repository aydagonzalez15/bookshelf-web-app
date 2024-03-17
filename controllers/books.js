const Book = require('../models/book')
const token = process.env.GOOGLE_KEY
const ROOT_URL = 'https://www.googleapis.com/';
const category = 'comedy'; // Specify the category you want to search for


module.exports = {
  index,
  create,
  show,
  delete: deleteBook
}

async function deleteBook(req, res) {
  const book = await Book.findOne({ '_id': req.params.id})
  if (!book) return res.redirect('/books')
  await Book.deleteOne({ '_id': req.params.id });
  // Save the updated movie doc
  // Redirect back to the movie's show view
  res.redirect(`/users`);

}

    
async function show(req, res) {
  const book = await Book.findById(req.params.id)
  res.render('books/show', { title: 'Book Detail', book,  });
}



    
async function create(req, res) {
  try {
  console.log("LOOK HERE ALSo:", req.body)
      const book = await Book.create(req.body)
      book.title= req.body.title
      book.authors= req.body.authors
      book.thumbnail= req.body.thumbnail
      book.description= req.body.description
      book.save()

  console.log("LOOK HERE:", book)
      res.redirect('books/');
  } catch (error) {
      console.error("Error saving , try Again Ayda:", error);
      // res.status(500).send("Internal Server Error");
  }
};


function index(req, res, next) {
  const options = {
    headers: {
      Authorization: `token ${token}`
    }
  };

  fetch(`${ROOT_URL}books/v1/volumes?q=subject:${category}&${token}`, options)
    .then(res => res.json())
    .then(userData => {
      res.render('books/', {userData, title : 'All books'});
    })
    .catch(error => {
      console.error('Error fetching books:', error);
      res.status(500).send('Error fetching books');
    });
};
