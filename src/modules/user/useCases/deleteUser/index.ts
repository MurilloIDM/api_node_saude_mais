import { UserRepository } from "../../repositories/implementations/UserRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export default (): DeleteUserController => {
  const repository = new UserRepository();
  const useCase = new DeleteUserUseCase(repository);
  const controller = new DeleteUserController(useCase);

  return controller;
};
