const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({
// - текст рецензии
    textReview: String,
// - имя автора рецензии
    authorReview: {
        ref: 'Author',
        type: mongoose.Schema.Types.ObjectId
    },
// - книга (к которой написана рецензия)
    bookReview: {
        ref: 'Book',
        type: mongoose.Schema.Types.ObjectId
    }
})

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
