const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuarioModel = require('../models/usuarioModel');

async function login(req, res) {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({
                erro: 'Email e senha são obrigatórios'
            });
        }

        const usuario = await usuarioModel.buscarPorEmail(email);

        if (!usuario) {
            return res.status(401).json({
                erro: 'Email ou senha inválidos'
            });
        }

        const senhaCorreta = await bcrypt.compare(
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
            mensagem: 'Login realizado com sucesso',
            token,
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            }
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            erro: 'Erro interno do servidor'
        });
    }
}

module.exports = {
    login
};