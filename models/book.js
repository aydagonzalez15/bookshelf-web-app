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
    publishYear: {
        type: Number
    },
    thumbnail: {
        type: String
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
    // Add user ref

},
{
    timestamps: true
})








module.exports = mongoose.model('Book', bookSchema)