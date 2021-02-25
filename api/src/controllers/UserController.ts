import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {
  //Criar o metodo create e atribuindo os dois tipos
  async create(request: Request, response: Response) {
    //Iremos receber os dados através do body da requisição
    const {name, email} = request.body;

    //Criando repositorio de usuário, para manejar a entidade/dados.
    const usersRepository = getRepository(User);

    //SELECT * FROM USERS WHERE EMAIL = "EMAIL"
    const userAlreadyExists = await usersRepository.findOne({
      email
    });

    if(userAlreadyExists){
      return response.status(400).json({
        error: "User already exists!",
      });
    }

    const user = usersRepository.create ({
      name, email
    })

    await usersRepository.save(user);

    return response.json(user);
  }
}

export { UserController };