import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

//nome da table
@Entity("surveys")
class Survey{
  @PrimaryColumn()
  readonly id: string; //Não pode alterar o valor.

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    //Se o ID não existir, então quero que o id seja o valor de uuid.
    if(!this.id){
      this.id = uuid()
    }
  }

}

export { Survey };
