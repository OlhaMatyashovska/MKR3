import {Router} from "express";
import PhotoRouter from "./photo";

const apiRouter = new Router();

apiRouter.use("/photo", PhotoRouter);

export default apiRouter;
