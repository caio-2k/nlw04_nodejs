import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  //Verificado que o comando dado é um comando de teste ou um comando de prod (yarn jest ou yarn dev/prod)
  return createConnection(
    //Verificando se a var e teste ou não (para utilizar um banco em especifico)
    Object.assign(defaultOptions, {
        database: process.env.NODE_ENV === 'test' ?
         "./src/database/db.test.sqlite" : defaultOptions.database 
      })
  );
}