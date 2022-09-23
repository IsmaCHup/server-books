const { Router } = require('express');
const router = Router();

router.post("/reviews/books/:id");
router.delete("/reviews/:id");
router.get("/reviews/books/:id");

module.exports = router;