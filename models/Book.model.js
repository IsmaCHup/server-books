const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    genres: String
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;