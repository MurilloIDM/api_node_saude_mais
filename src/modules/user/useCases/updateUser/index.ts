import { UserRepository } from "../../repositories/implementations/UserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export default (): UpdateUserController => {
  const repository = new UserRepository();
  const useCase = new UpdateUserUseCase(repository);
  const controller = new UpdateUserController(useCase);

  return controller;
};
