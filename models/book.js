const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please enter book title"]
    },
    author:{
        type: String,
        required: [true, "Please enter author name"]
    },
    genre: {
        type: String,
    },
    publishYear: {
        type: Number
    }
},
{
    timestamps: true
})








module.exports = mongoose.model('Book', bookSchema)