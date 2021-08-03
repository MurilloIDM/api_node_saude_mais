import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CalcImcUserController } from "./CalcImcUserController";
import { CalcImcUserUseCase } from "./CalcImcUserUseCase";

export default (): CalcImcUserController => {
  const repository = new UserRepository();
  const useCase = new CalcImcUserUseCase(repository);
  const controller = new CalcImcUserController(useCase);

  return controller;
};
