import { getCustomRepository } from 'typeorm';
import { Request, Response } from 'express';
import { SurveysRepository } from '../repositories/SurveysRepository';

class SurveysController {
    async create(request: Request, response: Response) {

        //pesquisa irá receber titulo e description
        const { title, description } = request.body;

        //Chamando o repositorio e passando
        const surveysRepository = getCustomRepository(SurveysRepository);
        
        //Criando a pesquisa
        const survey = surveysRepository.create({
            title, 
            description
        });

        //Salvando informação
        await surveysRepository.save(survey);

        //retornando a pesquisa criada
        return response.status(201).json(survey);
    }

    //Metodo para listar todas as pesquisas
    async show(request: Request, response: Response) {

        //Acessando repository
        const surveysRepository = getCustomRepository(SurveysRepository);

        //Chamando o repositorio e dando um find para listar todos os registros na table
        const all = await surveysRepository.find();

        //Retornando a lista completa em JSON
        return response.json(all);
    }

}

export { SurveysController }