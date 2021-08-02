import { Router } from "express";

import CreateUserController from "../modules/user/useCases/createUser";
import ListUsersController from "../modules/user/useCases/listUsers";

const router = Router();

router.post("/", (request, response) => {
  return CreateUserController().handle(request, response);
});

router.get("/", (request, response) => {
  return ListUsersController().handle(request, response);
});

export default router;
