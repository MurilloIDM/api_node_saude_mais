import { UserRepository } from "../../repositories/implementations/UserRepository";
import { FindByIdUserController } from "./FindByIdUserController";
import { FindByIdUserUseCase } from "./FindByIdUserUseCase";

export default (): FindByIdUserController => {
  const repository = new UserRepository();
  const useCase = new FindByIdUserUseCase(repository);
  const controller = new FindByIdUserController(useCase);

  return controller;
};
