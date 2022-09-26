const Author = require("../models/Author.model");

module.exports.authorController = {
    addAuthor: async (req, res) => {
        try {
            const newAuthor = await Author.create({
                name: "Mamakaev Isa",
                infoAboutAuthors: "born in Nojay-urt in 1984 years, wrote a many books and esseys"
            });
            res.json(newAuthor);
        }  catch (e) {
            res.json({ error: "Ошибка при добавлении нового автора" });
        }
    }
}