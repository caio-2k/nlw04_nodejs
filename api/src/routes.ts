import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

//Criando controllers
const userController = new UserController();
const surveysController = new SurveysController();

router.post("/users", userController.create);

//Criando rota de cadastro de pesquisa
router.post("/surveys", surveysController.create);

//Listando a pesquisa
router.get("/surveys", surveysController.show);

export { router };