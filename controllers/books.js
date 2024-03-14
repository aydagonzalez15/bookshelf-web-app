const Book = require('../models/book')

module.exports = {
    index
}

async function index(req, res) {
const books = await Book.find({})
// console.log("HELLO:",books)
res.render('books/index', { books, title : 'All books' })
}