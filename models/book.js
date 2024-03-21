const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
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
        ref: 'User',
        required: true
    }],
    description: String,
    categories: String,
    comment: [commentSchema],
},
{
    timestamps: true
})


module.exports = {
    Book  : mongoose.model('Book', bookSchema),
    Comment : mongoose.model('Comment', commentSchema)
    }


