const Review = require('../models/Review.model');

module.exports.reviewControllers = {
// - добавление рецензии к определенной книге
    addReview: async (req, res) => {
        const {
            textReview,
            authorReview,
            bookReview
        } = req.body;
        try {
            const newReview = await Review.create({
                textReview,
                authorReview,
                bookReview
            });
            res.json(newReview);
        } catch (e) {
            res.json({error: "Ошибка при добавлении новой рецензии"});
        }
    },
// - удалени рецензии
    deleteReview: async (req, res) => {
        try {
            const deletedReview = await Review.findByIdAndDelete(req.params.id, {new: true});
            res.json(deletedReview);
        } catch (e) {
            res.json({error: `Ошибка при удалении рецензии ${deletedReview}`});
        }
    },
// - вывод всех рецензий к определенной книге
    showReviewById: async (req, res) => {
        try {
            const getReview = await Review.findById(req.params.id);
            res.json(getReview);
        } catch (e) {
            res.json({error: "Ошибка при показе рецензии"});
        }
    }
}