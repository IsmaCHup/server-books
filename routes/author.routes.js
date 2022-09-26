const { Router } = require('express');
const { authorController } = require('../controllers/author.controller');

const router = Router();

router.post('/author', authorController.addAuthor);

module.exports = router;