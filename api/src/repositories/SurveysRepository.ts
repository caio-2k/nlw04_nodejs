import { EntityRepository, Repository } from "typeorm";

import { Survey } from "../models/Survey";

//Definindo que a classe  será um repositório
//Repositório de pesquisa
@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey> {}

export { SurveysRepository };
