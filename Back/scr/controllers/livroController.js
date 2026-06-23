const pool = require('../config/db');

async function listarLivros(req,res){

    try{

        const [livros] = await pool.query(`

            SELECT livros.id,livros.titulo, livros.autor, livros.ano, livros.status, categorias.nome AS categoria
            FROM livros
            INNER JOIN categorias
            ON livros.categoria_id = categorias.id
            ORDER BY livros.id DESC
        `);
        res.json(livros);

    }catch(erro){

        console.log(erro);
        res.status(500).json({
            erro:"Erro ao buscar livros"
        });

    }

}

module.exports = {
    listarLivros

};