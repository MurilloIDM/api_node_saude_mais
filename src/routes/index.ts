import { Router } from "express";

import routerUser from "./User";

const router = Router();

router.use("/users", routerUser);

export { router };
