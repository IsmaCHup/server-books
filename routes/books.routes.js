const { Router } = require('express');
const router = Router();

router.post("/books");
router.delete("/books/:id");
router.patch("/books/:id");
router.get("/books/:id");
router.get("/books");
router.get("/books/genres/:id");
router.post("/genres");
router.delete("/genres");
router.get("/genres");
router.post("/reviews/books/:id");
router.delete("/reviews/:id");
router.get("/reviews/books/:id");

module.exports = router;