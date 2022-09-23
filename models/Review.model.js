const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;
const reviewSchema = mongoose.Schema({
// - текст рецензии
    textReview: String,
// - имя автора рецензии
    authorReview: {
        ref: 'Author',
        type: Schema.Types.ObjectId
    },
// - книга (к которой написана рецензия)
    bookReview: {
        ref: 'Book',
        type: Schema.Types.ObjectId
    }
})

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
