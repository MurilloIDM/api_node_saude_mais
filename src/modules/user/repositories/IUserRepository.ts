import { User } from "../../../entities/User";
import { IRequestUser } from "../dto/IRequestUser";

interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User>;
  create(requestUser: IRequestUser): Promise<void>;
  update(requestUser: IRequestUser, id: string): Promise<User>;
  delete(id: string): Promise<void>;
}

export { IUserRepository };
