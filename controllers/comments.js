const {Book, Comment} = require('../models/book')



module.exports = {
  index,
    create,
    delete: deleteComment,
    update
}

async function update(req, res) {
  console.log("ID:", req.params.id, "Body:", req.body.content);
  try {
      // Find the book document that contains the comment with the given ID
      const book = await Book.findOne({ 'comment._id': req.params.id });

      console.log("BOOK LOG:", book);

      // Ensure the book and its comment were found
      if (!book) {
          return res.status(404).send("Book not found.");
      }

      // Find the specific comment within the book
      const comment = book.comment.find(comment => comment._id.toString() === req.params.id);

      if (!comment) {
          return res.status(404).send("Comment not found.");
      }
      console.log("COMMENT LOG:", comment);
      // Update the comment's content
      comment.content = req.body.content;
      // Save the updated book document
      await book.save();
      res.redirect(`/users`);
  } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred.");
  }
}



async function deleteComment(req, res) {
  const book = await Book.findOne({ 'comment._id': req.params.id})
  if (!book) return res.redirect('/books')
  book.comment.remove(req.params.id );
  await book.save()
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

async function index(req, res) {
  const book = await Book.findById(req.params.id)

  res.render('comments/new', {book, title : 'Opinion Odes'})
}