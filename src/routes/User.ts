import { Router } from "express";

import CreateUserController from "../modules/user/useCases/createUser";

const router = Router();

router.post("/", (request, response) => {
  return CreateUserController().handle(request, response);
});

export default router;
