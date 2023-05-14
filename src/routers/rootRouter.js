import express from "express";
import { home, search } from "../controllers/videoController";
import { getJoin, postJoin, login } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/search", search);

rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);

export default rootRouter;
