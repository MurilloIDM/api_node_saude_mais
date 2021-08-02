import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

export default (): ListUsersController => {
  const repository = new UserRepository();
  const useCase = new ListUsersUseCase(repository);
  const controller = new ListUsersController(useCase);

  return controller;
};
