const Book = require('../models/Book.model');

module.exports.booksController = {
    addBook: async (req, res) => {
        const {
            name,
            author,
            genres
        } = req.body;
        try {
            const newBook = await Book.create({
                name,
                author,
                genres
            });
            res.json(newBook);
        } catch (e) {
            res.json({error: "Ошибка при добавлении новой книги"});
        }
        ;
    },
    deleteBook: async (req, res) => {
        try {
            const deletedBooks = await Book.findByIdAndDelete(req.params.id, {new: true});
            res.json(`книга ${deletedBooks.name} удалена`)
        } catch (e) {
            res.json({error: "Ошибка при удалении"});
        }
        ;
    },
    editBook: async (req, res) => {
        try {
            const updateBook = await Book.findByIdAndUpdate(req.params.id, {genres: req.body.genres}, {new: true});
            res.json(updateBook);
        } catch (e) {
            res.json({error: "Ошибка при изменении"});
        }
        ;
    },
    showBook: async (req, res) => {
        try {
            const getСurrentBook = await Book.findById(req.params.id)
                .populate('genres', 'name -_id', 'Genre')
                .populate('authors', 'name -_id', 'Author')
                .select('name -_id');
            res.json(getСurrentBook);
        } catch (e) {
            res.json({error: "Ошибка при показе"});
        }
        ;
    },
    showAllBooks: async (req, res) => {
        try {
            const showBooks = await Book.find();
            res.json(showBooks);
        } catch (e) {
            res.json({error: "Ошибка при показе"});
        }
        ;
    },
    showGenresBook: async (req, res) => {
        try {
            const getBook = await Book.findById(req.params.id);
            res.json(getBook);
        } catch (e) {
            res.json({error: "Ошибка при показе"});
        }
        ;
    },
}