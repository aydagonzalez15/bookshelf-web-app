const Book = require('../models/book')


module.exports = {
    create
}


async function create(req, res) {
    const book = await Book.findById(req.params.id)
    book.comments= req.body.comments
    await book.save();
    // book.comments.push(req.body);
    try {
      // Save any changes made to the movie doc
      await book.save();
    } catch (err) {
      console.log(err);
    }
    // Step 5:  Respond to the Request (redirect if data has been changed)
    res.redirect(`/books/${book._id}`)
}