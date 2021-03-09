import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

//Definindo que a classe  será um repositório
@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export { UsersRepository };
