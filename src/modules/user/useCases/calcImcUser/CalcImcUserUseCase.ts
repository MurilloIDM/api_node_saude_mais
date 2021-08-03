import { User } from "../../../../entities/User";
import imcRating from "../../../../utils/imcRating";
import { IUserRepository } from "../../repositories/IUserRepository";

class CalcImcUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<User> {
    const userAlreadyExists = await this.userRepository.findById(id);

    if (!userAlreadyExists) {
      throw new Error();
    }

    const { weight, height } = userAlreadyExists;

    const heightInMeters = height / 100;
    const calcImc = weight / heightInMeters ** 2;

    const rating = imcRating(calcImc);

    userAlreadyExists.imc = rating;

    const userUpdated = await this.userRepository.update(userAlreadyExists, id);

    return userUpdated;
  }
}

export { CalcImcUserUseCase };
