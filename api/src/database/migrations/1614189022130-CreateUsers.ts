import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614189022130 implements MigrationInterface {

    //Metodo UP -> Criar tabela/Up na migration
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                //Nome da tabela e colunas
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        // isNullable: true
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        //Trabalhar com data
                        type: "timestamp",
                        //Default do timestamp
                        default: "now()",
                    }
                ]
            })
        )
    }
    //Metodo Down -> Down na migration
    public async down(queryRunner: QueryRunner): Promise<void> {
        //Se eu der um down na migration:
        await queryRunner.dropTable("users");
    }

}
