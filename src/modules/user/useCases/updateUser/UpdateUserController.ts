import { Request, Response } from "express";

import { User } from "../../../../entities/User";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response<User>> {
    try {
      const { id } = request.params;
      const { name, weight, height, birthDate } = request.body;

      const userUpdated = await this.updateUserUseCase.execute(
        {
          name,
          weight,
          height,
          birthDate,
        },
        id
      );

      return response.json(userUpdated);
    } catch (e) {
      return response.status(400).json({ message: "User already not exists!" });
    }
  }
}

export { UpdateUserController };
