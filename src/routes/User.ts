import { Router } from "express";

import CalcImcUserController from "../modules/user/useCases/calcImcUser";
import CreateUserController from "../modules/user/useCases/createUser";
import DeleteUserController from "../modules/user/useCases/deleteUser";
import FindByIdUserController from "../modules/user/useCases/findByIdUser";
import ListUsersController from "../modules/user/useCases/listUsers";
import UpdateUserController from "../modules/user/useCases/updateUser";

const router = Router();

router.post("/", (request, response) => {
  return CreateUserController().handle(request, response);
});

router.put("/:id", (request, response) => {
  return UpdateUserController().handle(request, response);
});

router.get("/", (request, response) => {
  return ListUsersController().handle(request, response);
});

router.get("/:id", (request, response) => {
  return FindByIdUserController().handle(request, response);
});

router.delete("/:id", (request, response) => {
  return DeleteUserController().handle(request, response);
});

router.get("/imc/:id", (request, response) => {
  return CalcImcUserController().handle(request, response);
});

export default router;
