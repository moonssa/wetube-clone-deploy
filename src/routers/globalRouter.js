import express from "express";
import { home, handleSearch } from "../controllers/videoController";
import { handleJoin, handleLogin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", handleJoin);
globalRouter.get("/search", handleSearch);
globalRouter.get("/login", handleLogin);

export default globalRouter;
