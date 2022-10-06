const Author = require("../models/Author.model");

module.exports.authorController = {
    addAuthor: async (req, res) => {
        try {
            const newAuthor = await Author.create({
                name: "Pushkin Alexsandr",
                infoAboutAuthors: "born in Tolstoy-yrt in 1842 years, wrote a many books and romans"
            });
            res.json(newAuthor);
        }  catch (e) {
            res.json({ error: "Ошибка при добавлении нового автора" });
        }
    }
}