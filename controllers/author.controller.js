const Author = require("../models/Author.model");

module.exports.authorController = {
    addAuthor: async (req, res) => {
        try {
            const newAuthor = await Author.create({
                name: "Baduev Said",
                infoAboutAuthors: "born in Mehkety in 1942 years, wrote a many books and romans"
            });
            res.json(newAuthor);
        }  catch (e) {
            res.json({ error: "Ошибка при добавлении нового автора" });
        }
    }
}