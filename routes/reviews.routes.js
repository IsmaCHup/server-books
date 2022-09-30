const { Router } = require('express');
const { reviewControllers } = require('../controllers/reviews.controller')

const router = Router();

router.post("/reviews/books/:id", reviewControllers.addReview);
router.delete("/reviews/:id", reviewControllers.deleteReview);
router.get("/reviews/books/:id", reviewControllers.showReviewById);

module.exports = router;