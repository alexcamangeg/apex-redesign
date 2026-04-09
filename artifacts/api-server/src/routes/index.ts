import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import submissionsRouter from "./submissions";
import adminAuthRouter from "./adminAuth";
import careersRouter from "./careers";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(submissionsRouter);
router.use(adminAuthRouter);
router.use(careersRouter);

export default router;
