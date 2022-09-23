const mongoose = require('mongoose');
const { Schema } = mongoose;
const bookSchema = mongoose.Schema({
    name: String,
    author: {
        ref: 'Author',
        type: Schema.Types.ObjectId
    },
    genres: {
        ref: 'Genre',
        type: Schema.Types.ObjectId
    }
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;