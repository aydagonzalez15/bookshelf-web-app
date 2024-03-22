const {Book} = require('../models/book')
const User = require('../models/user')

module.exports = {
    index
}

async function index (req, res) {
    const books = await Book.find({})
    userObj = await User.findById(req.user).populate('favBooks')
    console.log(userObj)
    res.render(`books/archives`, {books, userObj, title: "Archived Adventures"})
}

