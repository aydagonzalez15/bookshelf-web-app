const {Book} = require('../models/book')
const User = require('../models/user')

module.exports = {
    index
}

async function index (req, res) {
    const books = await Book.find({})
    // const book = await Book.find(book._Id)
    // console.log(books)
    res.render(`users/`, {books, title: "Archived Adventures" });
}

