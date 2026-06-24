const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {

    listarLivros, cadastrarLivro

} = require('../controllers/livroController');

router.get('/livros', listarLivros);
router.post('/livros', authMiddleware, cadastrarLivro);



module.exports = router;