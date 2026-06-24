const jwt = require('jsonwebtoken');
function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({
            erro:"O token infelizmente não foi enviado"
        });
    }
    const token = authHeader.split(" ")[1];

    try{
        const usuario = jwt.verify(
            token, process.env.JWT_SECRET
        );

        req.usuario = usuario;
        next();
    }catch(erro){
        return res.status(401).json({
            erro:"Token inválido"
        });
    }
}
module.exports = authMiddleware;