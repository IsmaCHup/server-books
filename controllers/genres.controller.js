const Genre = require('../models/Genre.model');

// - добавление жанра
module.exports.genresController = {
    addGenre: async (req, res) => {
        const {
            name,
            description
        } = req.body;
        try {
            const newGenres = await Genre.create({
                name,
                description
            });
            res.json(newGenres);
        } catch (e) {
            res.json({ error: "Ошибка при добавлении нового жанра" });
        }
    },
    // - удаление жанра
    deleteGenre: async (req, res) => {
        try {
            const deletedGenre = await Genre.findByIdAndDelete(req.params.id, {new: true});
            res.json(`жанр ${deletedGenre.name} удален`);
        } catch (e) {
            res.json({ error: "Ошибка при удалении жанра" });
        }
    },
    // - вывод всех жанров
    getGenres: async (req, res) => {
        try {
            const allGenres = await Genre.find().select('name description -_id');
            res.json(allGenres);
        } catch (e) {
            res.json({ error: "Ошибка при выводе всех жанров" });
        }
    },
};