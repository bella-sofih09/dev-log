let projects = [
    { id: 1001, title: "projeto iniciado", descripition: "qualquer projeto", createAt: "" }, //deixa rotulado uma lista de projeto pronto padrao, as rotas podem acessar tbm //array ja vem com projetos
    { id: 1002, title: "projeto klç", descripition: " projeto sigiloso", createAt: "" },
    { id: 1003, title: "projeto ggeruy", descripition: "segredo de estado", createAt: "" }
]; //cria um array para gardar as rotas dos projetos 

export function listProjects() {
    return projects;
}

export function createProject({ title, descripition}) {
    const project = {
        id: parseInt(Date.now().toString()),
        title,
        descripition: descripition || '',
        createAt: new Date().toISOString()
    };
    projects.push(project);
    return project;
}

export function getProjectById(id) {
    const project = projects.find(p => p.id === parseInt(id));
    if (!project) {
        const err = new Error('Projeto não encontrado');
        err.statusCode = 404;
        throw err; // ← lança erro — controller vai capturar
    }
    return project;
}

export function updateProject(id, data){
    const index =projects.findIndex(p => p.id === parent(id));
    if (index === -1) {
        const err = new Error('Projeto não encontrado');
        err.statusCode = 404;
        throw err;
    }
     projects[index] = { ...projects[index], ...data, id: projects[index].id };
    return projects[index];
}

export function deleteProject(id) {
    const index = projects.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
        const err = new Error('Projeto não encontrado');
        err.statusCode = 404;
        throw err;
    }
    projects.splice(index, 1);
}