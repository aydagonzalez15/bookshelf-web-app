const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const bookSchema = new Schema({
    title: {
        type: String,
        // required: [true, "Please enter book title"]
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
    comments: String,

    description: String,
    categories: String

    // Add user ref

},
{
    timestamps: true
})








module.exports = mongoose.model('Book', bookSchema)