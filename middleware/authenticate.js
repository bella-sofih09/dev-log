import jwt from 'jsonwebtoken';

export function authenticate (req, res, next){
const authHeader = req.headers ['authorization'];
const token = authHeader && authHeader.split(' ') [1];

if (!token) {
    return res.status (401).json ({erro: 'Token não fornecido' });
}

try {
    const payload = jwt.verify (token, process.env.JWT_SECRET);
    req.user = payload;
    next () ;
} catch (err) {
    return res.status (401).json ({erro: 'Token inválido ou expirado'});
}
}