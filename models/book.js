const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const commentSchema = new Schema({
    content: {
      type: String,
      required: true
    },
  }, {
    timestamps: true
  });


const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors:{
        type: String,
        // required: [true, "Please enter author name"]
    },
    genre: {
        type: String,
    },
    publishDate: {
        type: String
    },
    thumbnail: {
        type: String
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    description: String,
    categories: String,
    comment: [commentSchema],

},
{
    timestamps: true
})








module.exports = mongoose.model('Book', bookSchema)