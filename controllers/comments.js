const Book = require('../models/book')


module.exports = {
    create,
    delete: deleteComment,
    update
}

async function update(req, res) {
  try {
    const book = await Book.findOne({ 'comments._id': req.params.id });

    if (!book) {
      return res.redirect('/books');
    }

    // Find the index of the comment to update
    const commentIndex = book.comments.findIndex(comment => comment._id === req.params.id);

    if (commentIndex === -1) {
      return res.redirect('/books');
    }

    // Update the comment with the data from req.body
    Object.assign(book.comment[commentIndex], req.body);

    // Save the updated book
    await book.save();

    // Redirect back to the book's show view or wherever you intend
    res.redirect(`/books/${book._id}`);
  } catch (error) {
    // Handle error appropriately
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function deleteComment(req, res) {
  const book = await Book.findOne({ 'comment._id': req.params.id})
  if (!book) return res.redirect('/books')
 book.comment.remove(req.params.id );
  await book.save()
  // Save the updated movie doc
  // Redirect back to the movie's show view
  res.redirect(`/users`);
}


async function create(req, res) {
    const book = await Book.findById(req.params.id)
    book.comment.push(req.body);
    try {
      await book.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/books/${book._id}`)
}