import { Request, Response } from "express";

import { User } from "../../../../entities/User";
import { FindByIdUserUseCase } from "./FindByIdUserUseCase";

class FindByIdUserController {
  constructor(private findByIdUserUseCase: FindByIdUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response<User>> {
    try {
      const { id } = request.params;

      const user = await this.findByIdUserUseCase.execute(id);

      return response.json(user);
    } catch (e) {
      return response.status(204).send();
    }
  }
}

export { FindByIdUserController };
