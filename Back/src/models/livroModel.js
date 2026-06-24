const pool = require('../conf/db');
async function buscarLivros(){

    const [livros] = await pool.query(`
        SELECT  livros.id, livros.titulo, livros.autor, livros.ano, livros.status, categorias.nome AS categoria
        FROM livros INNER JOIN categorias ON livros.categoria_id = categorias.id
        ORDER BY livros.id DESC
    `);

    return livros;
}

async function criarLivro(titulo,autor,ano,status,categoria_id){

    const [resultado] = await pool.query(

        `INSERT INTO livros (titulo,autor,ano,status,categoria_id)
        VALUES (?,?,?,?,?)`,
        [
            titulo, autor, ano, status, categoria_id
        ]

    );
    return resultado;

}
module.exports = {
    buscarLivros, criarLivro

};