import { Request, Response } from "express";

import { User } from "../../../../entities/User";
import { CalcImcUserUseCase } from "./CalcImcUserUseCase";

class CalcImcUserController {
  constructor(private calcImcUserUseCase: CalcImcUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response<User>> {
    try {
      const { id } = request.params;

      const userWithImc = await this.calcImcUserUseCase.execute(id);

      return response.json(userWithImc);
    } catch (e) {
      return response.status(400).json({ message: "User already not exists!" });
    }
  }
}

export { CalcImcUserController };
