import { User } from "../../../../entities/User";
import { IRequestUser } from "../../dto/IRequestUser";
import { IUserRepository } from "../../repositories/IUserRepository";

class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(requestUser: IRequestUser, id: string): Promise<User> {
    const userAlreadyExists = await this.userRepository.findById(id);

    if (!userAlreadyExists) {
      throw new Error();
    }

    const userUpdated = await this.userRepository.update(requestUser, id);

    return userUpdated;
  }
}

export { UpdateUserUseCase };
