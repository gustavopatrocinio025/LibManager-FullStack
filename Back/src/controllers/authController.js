const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuarioModel = require('../models/usuarioModel');

async function cadastro(req, res) {

    try {

        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({
                erro: 'Todos os campos são obrigatórios'
            });
        }

        const usuarioExistente =
            await usuarioModel.buscarPorEmail(email);

        if (usuarioExistente) {
            return res.status(400).json({
                erro: 'Email já cadastrado'
            });
        }

        const senhaHash =
            await bcrypt.hash(senha, 10);

        await usuarioModel.criarUsuario(
            nome,
            email,
            senhaHash
        );

        return res.status(201).json({
            mensagem: 'Usuário cadastrado com sucesso'
        });

    } catch (erro) {

        console.log(erro);

        return res.status(500).json({
            erro: 'Erro ao cadastrar usuário'
        });
    }
}

async function login(req, res) {

    try {

        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({
                erro: 'Email e senha são obrigatórios'
            });
        }

        const usuario =
            await usuarioModel.buscarPorEmail(email);

        if (!usuario) {
            return res.status(401).json({
                erro: 'Email ou senha inválidos'
            });
        }

        const senhaCorreta =
            await bcrypt.compare(
                senha,
                usuario.senha
            );

        if (!senhaCorreta) {
            return res.status(401).json({
                erro: 'Email ou senha inválidos'
            });
        }

        const token = jwt.sign(

            {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            },

            process.env.JWT_SECRET,

            {
                expiresIn: '1h'
            }
        );

        return res.status(200).json({

            mensagem:
                'Login realizado com sucesso',

            token,

            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            }

        });

    } catch (erro) {

        console.log(erro);

        return res.status(500).json({
            erro: 'Erro interno do servidor'
        });
    }
}

module.exports = {
    login,
    cadastro
};