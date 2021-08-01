import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("user")
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

  @Column("birth_date")
  birthDate: Date;

  @Column("created_at")
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
