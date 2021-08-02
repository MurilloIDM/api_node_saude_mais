import { User } from "../../../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

class FindByIdUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);

    return user;
  }
}

export { FindByIdUserUseCase };
