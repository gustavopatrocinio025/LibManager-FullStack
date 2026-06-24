const livroModel = require('../models/livroModel');
async function listarLivros(req,res){

    try{
        const livros = await livroModel.buscarLivros();
        res.json(livros);
    }catch(erro){
        console.log(erro);
        res.status(500).json({
            erro:"Houve um erro encontrar os livros"
        });
    }
}
async function cadastrarLivro(req,res){
    try{
        const {
            titulo, autor, ano, status, categoria_id
        } = req.body;

        const livro = await livroModel.criarLivro(

            titulo, autor, ano, status, categoria_id
        );

        res.status(201).json({

            mensagem:"Livro cadastrado com exito",
            livro
        });
    }catch(erro){
        console.log(erro);
        res.status(500).json({
            erro:"Erro ao cadastrar livro"
        });
    }
}

module.exports = {
    listarLivros, cadastrarLivro
};