import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export default (): CreateUserController => {
  const repository = new UserRepository();
  const useCase = new CreateUserUseCase(repository);
  const controller = new CreateUserController(useCase);

  return controller;
};
