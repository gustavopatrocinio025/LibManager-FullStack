const pool = require('../config/db');

async function listarLivros(req, res) {
    try {
        const [livros] = await pool.query(
            'SELECT * FROM livros ORDER BY id DESC'
        );

        res.json(livros);
    } catch (erro) {
        console.log(erro);
        res.status(500).json({
            erro: 'Erro ao buscar livros'
        });
    }
}

module.exports = {
    listarLivros
};