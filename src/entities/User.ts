import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("user_plus")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  weight: number;

  @Column()
  height: number;

  @Column()
  imc: string;

  @Column({ name: "birth_date", type: "date" })
  birthDate: string;

  @CreateDateColumn()
  @Column({ name: "created_at" })
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
