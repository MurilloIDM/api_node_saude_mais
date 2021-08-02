import { Request, Response } from "express";

import { User } from "../../../../entities/User";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async handle(
    request: Request,
    response: Response
  ): Promise<Response<User[]>> {
    const users = await this.listUsersUseCase.execute();

    return response.json(users);
  }
}

export { ListUsersController };
