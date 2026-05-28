import { Router } from "express";const router = Router();
import { list, create, getById, update, remove } from "../controllers/projectController.js";
import { validateProject } from '../middlewares/validateProject.js';
import { authenticate } from "../middleware/authenticate.js";
const router = Router();


router.get('/',list);

router.post('/', authenticate, validateProject, create);

router.get('/:id', authenticate, getById);

router.patch('/:id', authenticate, validateProject, update);

router.delete('/:id', remove);

export default router