const pool = require('../conf/db');
async function buscarPorEmail(email){

    const [usuario] = await pool.query(
        "SELECT * FROM usuarios WHERE email = ?",
        [email]
    );

    return usuario[0];

}



async function criarUsuario(nome,email,senha){
    const [resultado] = await pool.query(
        "INSERT INTO usuarios(nome,email,senha) VALUES (?,?,?)",
        [nome,email,senha]

    );
    return resultado;

}



module.exports = {
    buscarPorEmail, criarUsuario
};