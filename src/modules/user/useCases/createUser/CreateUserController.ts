import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response<void>> {
    const { name, weight, height, birthDate } = request.body;

    await this.createUserUseCase.execute({ name, weight, height, birthDate });

    return response.status(201).send();
  }
}

export { CreateUserController };
