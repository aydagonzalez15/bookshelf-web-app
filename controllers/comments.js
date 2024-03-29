const {Book, Comment} = require('../models/book')

module.exports = {
    index,
    edit,
    create,
    delete: deleteComment,
    update
}

async function update(req, res) {
  console.log("ID:", req.params.id, "Body:", req.body.content);
  try {

      const book = await Book.findOne({ 'comment._id': req.params.id });
      console.log("BOOK LOG:", book);
      if (!book) {
          return res.status(404).send("Book not found.");
      }
      const comment = book.comment.find(comment => comment._id.toString() === req.params.id);
      if (!comment) {
          return res.status(404).send("Comment not found.");
      }
      console.log("COMMENT LOG:", comment);
      comment.content = req.body.content;
      await book.save();
      res.redirect(`/books/${book._id}`);
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
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    console.log("AVATARL", req.body.userAvatar)
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

async function edit(req, res) {
  const book = await Book.findOne({ 'comment._id': req.params.id });
  if (!book) {
      return res.status(404).send("Book not found.");
  }
  const comment = book.comment.find(comment => comment._id.toString() === req.params.id);
  if (!comment) {
      return res.status(404).send("Review not found.");
  }
  res.render('comments/edit', {book, comment, title : 'Edit Odes'})
}