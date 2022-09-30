const { Router } = require('express');
const { booksController } = require('../controllers/books.controller')

const router = Router();

router.post("/books", booksController.addBook);
router.delete("/books/:id", booksController.deleteBook);
router.patch("/books/:id", booksController.editBook);
router.get("/books/:id", booksController.showBook);
router.get("/books", booksController.showAllBooks);
router.get("/books/genres/:id", booksController.showGenresBook);


module.exports = router;