import {Router} from "express";
import passport from "passport";
import PhotoController from "./controllerMogoose";


const PhotoRouter = new Router();
PhotoRouter.get("/", PhotoController.get);
PhotoRouter.get("/:id", PhotoController.getById);
PhotoRouter.post("/",  PhotoController.post);


export default PhotoRouter;