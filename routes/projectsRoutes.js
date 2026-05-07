import { Router } from "express";
const router = Router();
import { validateProject } from '../middlewares/validateProject.js';


//"Banco" em memória - array de projetos 
let projects = [
    { id: 1001, title: "projeto iniciado", descripition: "qualquer projeto", createAt: "" }, //deixa rotulado uma lista de projeto pronto padrao, as rotas podem acessar tbm //array ja vem com projetos
    { id: 1002, title: "projeto klç", descripition: " projeto sigiloso", createAt: "" },
    { id: 1003, title: "projeto ggeruy", descripition: "segredo de estado", createAt: "" }
]; //cria um array para gardar as rotas dos projetos 


//GET /api/v1/projects - listar todos
router.get('/', (req, res) => { //faz aleitura de todos os projetos do array
    res.json({ projects, tottal: projects.length });
});


//POST /api/v1/projects - criar
router.post('/', validateProject, (req, res) => {
    const { title, description } = req.body; //exigi que seja enviado 
    const projects = {id: Date.now () .toString (), title, description: description || '' };

    if (!title ) return res.status(400).json({ error: 'title é obrigatório' });//<!> garante quq pelo menos um seja envia e se estive vazio envia amensagem <return.status>
    const project = {
        id: parseINt(Date.now().toString()), //gera num aleatorio
        title: title, 
        description: description || '',
        createAt: new Date().toISOString()
    };
    projects.push(project);//adiciona no  final do array
    res.status(201).json(project);// devolve o status
});


//GET /api/v1/projects/: id - buscar po ID
router.get('/:id', (req, res) => {
    const {id} = req.params;
    const project = projects.find(p => p.id === id);//<find>percorre o array atras do valor do campo que quero
    if (!project) return res.status(400).json({ error: 'Projeto não encontrado' })
    res.json(project);
})


//DELETE /api/v1/projects/:id - remover
router.delete('/:id', (req, res) => {
const index = projects.findIndex(p => p.id === req.params.id);
if (index === -1) return res.status(404).json({ error: 'Projeto não encontrado' });
projects.splice(index, 1);
res.sendStatus(204);
});

export default router;