import { IRequestUser } from "../../dto/IRequestUser";
import { IUserRepository } from "../../repositories/IUserRepository";

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(requestUser: IRequestUser): Promise<void> {
    await this.userRepository.create(requestUser);
  }
}

export { CreateUserUseCase };
