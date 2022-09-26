const Book = require('../models/Book.model');

module.exports.booksController = {
    addBook: async (req, res) => {
        const {
            name,
            author,
            genres
        }
        const newBook = await Book.create({

        })
    }
}