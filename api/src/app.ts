import "reflect-metadata";

// Importando o Express
import express from 'express';

//Importando banco de dados, não precisa informar index.
import createConnection from './database';
import { router } from "./routes";

createConnection();
// Criando constante para iniciar a func do express
const app = express();

//Habilita a possibiidade de trabalharmos com formato JSON
app.use(express.json());

app.use(router);

export { app };
