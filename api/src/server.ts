// Importando o Express
import express, { response } from 'express';

// Criando constante para iniciar a func do express
const app = express();

/**
 * GET => BUSCA DATA
 * POST => SALVAR DATA
 * PUT => ALTERAR DATA
 * DELETE => DELETAR DATA
 * PATCH => ALTERAÇÃO ESPECÍFICA
 */

//Criando primeira rota (requisição get)
//Ex: http://localhost:3333/users
app.get("/", (request, response) => {
  //Retornando uma resposta
  // return response.send("Hello World - NLW04");
  //Retornando uma responsa em JSON
  return response.json({message: "Hello World!"});
})

// Criando segunda rota (requisição post)
//1 param => Rota(Recurso API)
//2 param => request, resposnse
app.post("/", (request, response) => {
  //Recebeu dados para salvar, retornar para o cliente que foram salvos:
  return response.json({message: "Os dados foram salvados com sucesso!"});
})

//Criar o servidor (need express)
app.listen(3333, () => console.log("Server is Running!"));