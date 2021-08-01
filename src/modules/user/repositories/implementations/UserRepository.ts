import { getRepository, Repository } from "typeorm";

import { User } from "../../../../entities/User";
import { IRequestUser } from "../../dto/IRequestUser";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findAll(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });

    return user;
  }

  async create({
    name,
    weight,
    height,
    birthDate,
  }: IRequestUser): Promise<void> {
    const user = this.repository.create({ name, weight, height, birthDate });

    await this.repository.save(user);
  }

  async update(requestUser: IRequestUser, id: string): Promise<User> {
    const user = await this.repository.findOne({ id });
    const newUser = { ...user, ...requestUser };
    const createUser = this.repository.create(newUser);

    await this.repository.save(createUser);
    return createUser;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}

export { UserRepository };
