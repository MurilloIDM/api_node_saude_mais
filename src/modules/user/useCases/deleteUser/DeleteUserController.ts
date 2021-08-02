import { Request, Response } from "express";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response<void>> {
    try {
      const { id } = request.params;

      await this.deleteUserUseCase.execute(id);

      return response.send();
    } catch (e) {
      return response.status(400).json({ message: "User already not exists!" });
    }
  }
}

export { DeleteUserController };
