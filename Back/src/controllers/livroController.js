const livroModel = require('../models/livroModel');

async function listarLivros(req,res){

    try{

        const livros =
            await livroModel.buscarLivros();

        res.json(livros);

    }catch(erro){

        console.log("ERRO COMPLETO:");
        console.log(erro);

        res.status(500).json({
            erro: erro.message
        });
    }
}

async function cadastrarLivro(req, res) {

    try {

        console.log("USUARIO:");
        console.log(req.usuario);

        console.log("BODY:");
        console.log(req.body);

        const {
            titulo,
            autor,
            ano,
            status,
            categoria_id
        } = req.body;

        const livro =
            await livroModel.criarLivro(
                titulo,
                autor,
                ano,
                status,
                categoria_id
            );

        res.status(201).json({
            mensagem: "Livro cadastrado com êxito",
            livro
        });

    } catch (erro) {

        console.log("ERRO COMPLETO:");
        console.log(erro);

        res.status(500).json({
            erro: erro.message
        });
    }
}

module.exports = {
    listarLivros,
    cadastrarLivro
};