import jwt from 'jsonwebtoken';

const usuarios = [
    { id: 1, email: 'ana@devlog.com', senha: '123456' },
    { id: 1, email: 'bob@devlog.com', senha: 'abcdef'},
];

export function login (req, res) {
    const {email, senha} = req.body;
    const usuario = usuarios.find(u => u.email === email);

    if (!usuario || usuario.senha !== senha) {
        return res.status (401).json ({erro: 'Credenciais inválidas' });
    }
    const token = jwt.sign (
        { userId: usuario.id},
        process.env.JWT_SECRET,
        {expiresIn: 'Id'}
    );
    req.json({token});
}