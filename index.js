const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(require('./routes/genres.routes'));
app.use(require('./routes/author.routes'));
app.use(require('./routes/reviews.routes'));
app.use(require('./routes/books.routes'));

mongoose
    .connect("mongodb+srv://Is:lam@cluster0.7eomugg.mongodb.net/books")
    .then(() => {
        app.listen(3000, () => {
            console.log("Сервер успешно запущен");
        });
    })
    .catch((e) => console.log(e.message));