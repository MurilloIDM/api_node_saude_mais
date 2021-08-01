import { Router } from "express";

import routerUser from "./User";

const router = Router();

router.use("/user", routerUser);

export { router };
