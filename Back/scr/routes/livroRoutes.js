const express = require('express');
const router = express.Router();


const {

listarLivros} = require('../controllers/livroController');

router.get('/livros', listarLivros);

module.exports = router;