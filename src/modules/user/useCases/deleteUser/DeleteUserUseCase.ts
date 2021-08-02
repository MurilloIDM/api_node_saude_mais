import { IUserRepository } from "../../repositories/IUserRepository";

class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<void> {
    const userAlreadyExists = await this.userRepository.findById(id);

    if (!userAlreadyExists) {
      throw new Error();
    }

    await this.userRepository.delete(id);
  }
}

export { DeleteUserUseCase };
