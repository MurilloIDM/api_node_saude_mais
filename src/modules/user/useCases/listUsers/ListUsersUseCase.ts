import { User } from "../../../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

class ListUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.findAll();

    return users;
  }
}

export { ListUsersUseCase };
