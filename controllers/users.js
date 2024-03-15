const Book = require('../models/book')
const User = require('../models/user')


module.exports = {
    index,

}

function index(req, res) {
    res.render('users/', { title : 'Saved books' })
    }
