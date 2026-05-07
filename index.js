import express from 'express';
import morgan from 'morgan';
import projectRoutes from './routes/projectRoutes.js';

const app = express ();

app.use (express.json());
app.use (morgan ('dev'));

app.use('/api/v1/projects', projectRoutes);

const port = 3000;
//git.com douglaslegramante>repositorios
//GitHub - douglaslegramante/devlog-api-2b · GitHub
//https://github.com/douglaslegramante/devlog-api-2b <===

app.get('/health', (req, res) =>
res.json({status: "OK"}));

//monta router no prefixo==caminho
app.use('/api/v1/projects', projectRoutes);// o restante e definido no routes

app.listen(port, () => { //cria a fincao para que o servidor inicie esperando as requicicoes atraves dA porta criada
    let data = new Date(); //express ja esta rodando
console.log(`Servidor iniciado em ${data}`)
});